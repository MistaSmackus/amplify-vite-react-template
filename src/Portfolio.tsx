import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";
import * as Amplify from "aws-amplify";
const { API, graphqlOperation } = Amplify;

import { listWatchStocks, listPurchasedStocks } from "./graphql/queries";
import {
  ListWatchStocksQuery,
  ListPurchasedStocksQuery,
  WatchStock,
  PurchasedStock
} from "./graphql/API";

import { createPurchasedStock } from "./graphql/mutations";


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, Title);

export default function Portfolio() {
  const { user } = useAuthenticator();
  const fallbackName = user?.signInDetails?.loginId?.split("@")[0];
  const displayName = fallbackName || "Guest";
  const [watchStocks, setWatchStocks] = useState<WatchStock[]>([]);
  const [purchasedStocks, setPurchasedStocks] = useState<PurchasedStock[]>([]);
  const totalPortfolioValue = purchasedStocks.reduce((sum, stock) => {
  const price = typeof stock.price === "number" ? stock.price : parseFloat(`${stock.price}` || "0");
  return sum + (stock.quantity ?? 0) * price;
}, 0).toLocaleString("en-US", {
  style: "currency",
  currency: "USD",
});

const [portfolioHistory, setPortfolioHistory] = useState<number[]>([]);

useEffect(() => {
  if (purchasedStocks.length) {
    const values = Array.from({ length: 7 }, (_, i) => {
      return purchasedStocks.reduce((sum, stock) => {
        const price = typeof stock.price === "number" ? stock.price : parseFloat(`${stock.price}` || "0");
        return sum + (stock.quantity ?? 0) * price;
      }, 0) * (1 + i * 0.01); // 1% growth simulation per day
    });

    setPortfolioHistory(values);
  } else {
    setPortfolioHistory([]);
  }
}, [purchasedStocks]);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const watchResult = (await API.graphql(graphqlOperation(listWatchStocks))) as {
          data: ListWatchStocksQuery;
        };
        const purchasedResult = (await API.graphql(graphqlOperation(listPurchasedStocks))) as {
          data: ListPurchasedStocksQuery;
        };

        setWatchStocks(watchResult.data.listWatchStocks?.items || []);
        setPurchasedStocks(purchasedResult.data.listPurchasedStocks?.items || []);
      } catch (err) {
        console.error("Failed to fetch stocks", err);
      }
    };

    fetchData();
  }, []);

  const handleAddTestStock = async () => {
  try {
    const newStock = {
      symbol: "AAPL",
      quantity: 10,
      price: 150.25,
    };

    await API.graphql(graphqlOperation(createPurchasedStock, { input: newStock }));
    console.log("Test stock added!");

    // Optionally re-fetch data after insert
    fetchPortfolioData?.(); 
  } catch (error) {
    console.error("Error adding test stock:", error);
  }
};



  const labels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toLocaleDateString();
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Portfolio Value ($)",
        data: portfolioHistory,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75,192,192,1)"
      }
    ]
  };

  return (
    <Container fluid className="d-flex flex-column align-items-center mt-4">
      {/* Portfolio Card */}
      <Card className="m-3 p-3 bg-dark text-light w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center">
          <h2 className="fw-bold">{displayName}'s Portfolio</h2>
          <h4>
            Total Value: <span className="text-success">{totalPortfolioValue}</span>
          </h4>
        </div>
      </Card>

      {/* Portfolio Graph */}
      <Card className="m-3 p-3 bg-secondary text-light w-100" style={{ maxWidth: "700px" }}>
        <h5 className="text-center">Portfolio Value Over Time</h5>
        <Line data={data} />
      </Card>

      {portfolioHistory.length === 0 && (
        <p className="text-light text-center mt-2">
            No portfolio data available yet. Start by adding your first stock!
        </p>
      )}

      {/* Buttons */}
      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <Button variant="success">Buy/Sell</Button>
        <Button variant="danger">Cancel Order</Button>
        <Button variant="info">Transactions</Button>
        <Button variant="warning">Deposit/Withdraw</Button>
        <Button variant="secondary" onClick={handleAddTestStock}>Add Test Stock</Button>

      </div>

      {/* Watch Stocks */}
      <Card className="m-3 p-3 bg-secondary text-light w-100" style={{ maxWidth: "800px" }}>
        <h5 className="text-center">Top 3 Watch Stocks</h5>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Last Price</th>
              <th>% Change</th>
            </tr>
          </thead>
          <tbody>
            {watchStocks.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.symbol}</td>
                <td>${stock.lastPrice?.toFixed(2)}</td>
                <td style={{ color: stock.change?.includes("-") ? "red" : "limegreen" }}>
                  {stock.change}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* Purchased Stocks */}
      <Card className="m-3 p-3 bg-secondary text-light w-100" style={{ maxWidth: "800px" }}>
        <h5 className="text-center">Your Purchased Stocks</h5>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Purchase Price</th>
            </tr>
          </thead>
          <tbody>
            {purchasedStocks.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>${stock.price?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
