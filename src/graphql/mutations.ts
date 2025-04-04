/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPurchasedStock = /* GraphQL */ `mutation CreatePurchasedStock(
  $input: CreatePurchasedStockInput!
  $condition: ModelPurchasedStockConditionInput
) {
  createPurchasedStock(input: $input, condition: $condition) {
    id
    symbol
    quantity
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePurchasedStockMutationVariables,
  APITypes.CreatePurchasedStockMutation
>;
export const updatePurchasedStock = /* GraphQL */ `mutation UpdatePurchasedStock(
  $input: UpdatePurchasedStockInput!
  $condition: ModelPurchasedStockConditionInput
) {
  updatePurchasedStock(input: $input, condition: $condition) {
    id
    symbol
    quantity
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePurchasedStockMutationVariables,
  APITypes.UpdatePurchasedStockMutation
>;
export const deletePurchasedStock = /* GraphQL */ `mutation DeletePurchasedStock(
  $input: DeletePurchasedStockInput!
  $condition: ModelPurchasedStockConditionInput
) {
  deletePurchasedStock(input: $input, condition: $condition) {
    id
    symbol
    quantity
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePurchasedStockMutationVariables,
  APITypes.DeletePurchasedStockMutation
>;
export const createWatchStock = /* GraphQL */ `mutation CreateWatchStock(
  $input: CreateWatchStockInput!
  $condition: ModelWatchStockConditionInput
) {
  createWatchStock(input: $input, condition: $condition) {
    id
    symbol
    lastPrice
    change
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWatchStockMutationVariables,
  APITypes.CreateWatchStockMutation
>;
export const updateWatchStock = /* GraphQL */ `mutation UpdateWatchStock(
  $input: UpdateWatchStockInput!
  $condition: ModelWatchStockConditionInput
) {
  updateWatchStock(input: $input, condition: $condition) {
    id
    symbol
    lastPrice
    change
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWatchStockMutationVariables,
  APITypes.UpdateWatchStockMutation
>;
export const deleteWatchStock = /* GraphQL */ `mutation DeleteWatchStock(
  $input: DeleteWatchStockInput!
  $condition: ModelWatchStockConditionInput
) {
  deleteWatchStock(input: $input, condition: $condition) {
    id
    symbol
    lastPrice
    change
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWatchStockMutationVariables,
  APITypes.DeleteWatchStockMutation
>;
