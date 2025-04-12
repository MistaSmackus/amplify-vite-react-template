/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPurchasedStock = /* GraphQL */ `query GetPurchasedStock($id: ID!) {
  getPurchasedStock(id: $id) {
    id
    symbol
    quantity
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPurchasedStockQueryVariables,
  APITypes.GetPurchasedStockQuery
>;
export const listPurchasedStocks = /* GraphQL */ `query ListPurchasedStocks(
  $filter: ModelPurchasedStockFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchasedStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      symbol
      quantity
      price
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchasedStocksQueryVariables,
  APITypes.ListPurchasedStocksQuery
>;
export const getWatchStock = /* GraphQL */ `query GetWatchStock($id: ID!) {
  getWatchStock(id: $id) {
    id
    symbol
    lastPrice
    change
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWatchStockQueryVariables,
  APITypes.GetWatchStockQuery
>;
export const listWatchStocks = /* GraphQL */ `query ListWatchStocks(
  $filter: ModelWatchStockFilterInput
  $limit: Int
  $nextToken: String
) {
  listWatchStocks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      symbol
      lastPrice
      change
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWatchStocksQueryVariables,
  APITypes.ListWatchStocksQuery
>;
