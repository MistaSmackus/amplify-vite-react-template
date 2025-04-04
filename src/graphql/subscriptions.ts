/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePurchasedStock = /* GraphQL */ `subscription OnCreatePurchasedStock(
  $filter: ModelSubscriptionPurchasedStockFilterInput
) {
  onCreatePurchasedStock(filter: $filter) {
    id
    symbol
    quantity
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePurchasedStockSubscriptionVariables,
  APITypes.OnCreatePurchasedStockSubscription
>;
export const onUpdatePurchasedStock = /* GraphQL */ `subscription OnUpdatePurchasedStock(
  $filter: ModelSubscriptionPurchasedStockFilterInput
) {
  onUpdatePurchasedStock(filter: $filter) {
    id
    symbol
    quantity
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePurchasedStockSubscriptionVariables,
  APITypes.OnUpdatePurchasedStockSubscription
>;
export const onDeletePurchasedStock = /* GraphQL */ `subscription OnDeletePurchasedStock(
  $filter: ModelSubscriptionPurchasedStockFilterInput
) {
  onDeletePurchasedStock(filter: $filter) {
    id
    symbol
    quantity
    price
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePurchasedStockSubscriptionVariables,
  APITypes.OnDeletePurchasedStockSubscription
>;
export const onCreateWatchStock = /* GraphQL */ `subscription OnCreateWatchStock(
  $filter: ModelSubscriptionWatchStockFilterInput
) {
  onCreateWatchStock(filter: $filter) {
    id
    symbol
    lastPrice
    change
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWatchStockSubscriptionVariables,
  APITypes.OnCreateWatchStockSubscription
>;
export const onUpdateWatchStock = /* GraphQL */ `subscription OnUpdateWatchStock(
  $filter: ModelSubscriptionWatchStockFilterInput
) {
  onUpdateWatchStock(filter: $filter) {
    id
    symbol
    lastPrice
    change
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWatchStockSubscriptionVariables,
  APITypes.OnUpdateWatchStockSubscription
>;
export const onDeleteWatchStock = /* GraphQL */ `subscription OnDeleteWatchStock(
  $filter: ModelSubscriptionWatchStockFilterInput
) {
  onDeleteWatchStock(filter: $filter) {
    id
    symbol
    lastPrice
    change
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWatchStockSubscriptionVariables,
  APITypes.OnDeleteWatchStockSubscription
>;
