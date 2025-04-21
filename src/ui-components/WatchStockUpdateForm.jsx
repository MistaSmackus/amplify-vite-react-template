/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getWatchStock } from "../graphql/queries";
import { updateWatchStock } from "../graphql/mutations";
const client = generateClient();
export default function WatchStockUpdateForm(props) {
  const {
    id: idProp,
    watchStock: watchStockModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    symbol: "",
    lastPrice: "",
    change: "",
  };
  const [symbol, setSymbol] = React.useState(initialValues.symbol);
  const [lastPrice, setLastPrice] = React.useState(initialValues.lastPrice);
  const [change, setChange] = React.useState(initialValues.change);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = watchStockRecord
      ? { ...initialValues, ...watchStockRecord }
      : initialValues;
    setSymbol(cleanValues.symbol);
    setLastPrice(cleanValues.lastPrice);
    setChange(cleanValues.change);
    setErrors({});
  };
  const [watchStockRecord, setWatchStockRecord] =
    React.useState(watchStockModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getWatchStock.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getWatchStock
        : watchStockModelProp;
      setWatchStockRecord(record);
    };
    queryData();
  }, [idProp, watchStockModelProp]);
  React.useEffect(resetStateValues, [watchStockRecord]);
  const validations = {
    symbol: [{ type: "Required" }],
    lastPrice: [{ type: "Required" }],
    change: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          symbol,
          lastPrice,
          change,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateWatchStock.replaceAll("__typename", ""),
            variables: {
              input: {
                id: watchStockRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "WatchStockUpdateForm")}
      {...rest}
    >
      <TextField
        label="Symbol"
        isRequired={true}
        isReadOnly={false}
        value={symbol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              symbol: value,
              lastPrice,
              change,
            };
            const result = onChange(modelFields);
            value = result?.symbol ?? value;
          }
          if (errors.symbol?.hasError) {
            runValidationTasks("symbol", value);
          }
          setSymbol(value);
        }}
        onBlur={() => runValidationTasks("symbol", symbol)}
        errorMessage={errors.symbol?.errorMessage}
        hasError={errors.symbol?.hasError}
        {...getOverrideProps(overrides, "symbol")}
      ></TextField>
      <TextField
        label="Last price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={lastPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              symbol,
              lastPrice: value,
              change,
            };
            const result = onChange(modelFields);
            value = result?.lastPrice ?? value;
          }
          if (errors.lastPrice?.hasError) {
            runValidationTasks("lastPrice", value);
          }
          setLastPrice(value);
        }}
        onBlur={() => runValidationTasks("lastPrice", lastPrice)}
        errorMessage={errors.lastPrice?.errorMessage}
        hasError={errors.lastPrice?.hasError}
        {...getOverrideProps(overrides, "lastPrice")}
      ></TextField>
      <TextField
        label="Change"
        isRequired={true}
        isReadOnly={false}
        value={change}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              symbol,
              lastPrice,
              change: value,
            };
            const result = onChange(modelFields);
            value = result?.change ?? value;
          }
          if (errors.change?.hasError) {
            runValidationTasks("change", value);
          }
          setChange(value);
        }}
        onBlur={() => runValidationTasks("change", change)}
        errorMessage={errors.change?.errorMessage}
        hasError={errors.change?.hasError}
        {...getOverrideProps(overrides, "change")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || watchStockModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || watchStockModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
