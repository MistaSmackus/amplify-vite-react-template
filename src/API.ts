/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePurchasedStockInput = {
  id?: string | null,
  symbol: string,
  quantity: number,
  price: number,
};

export type ModelPurchasedStockConditionInput = {
  symbol?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  and?: Array< ModelPurchasedStockConditionInput | null > | null,
  or?: Array< ModelPurchasedStockConditionInput | null > | null,
  not?: ModelPurchasedStockConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type PurchasedStock = {
  __typename: "PurchasedStock",
  id: string,
  symbol: string,
  quantity: number,
  price: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePurchasedStockInput = {
  id: string,
  symbol?: string | null,
  quantity?: number | null,
  price?: number | null,
};

export type DeletePurchasedStockInput = {
  id: string,
};

export type CreateWatchStockInput = {
  id?: string | null,
  symbol: string,
  lastPrice: number,
  change: string,
};

export type ModelWatchStockConditionInput = {
  symbol?: ModelStringInput | null,
  lastPrice?: ModelFloatInput | null,
  change?: ModelStringInput | null,
  and?: Array< ModelWatchStockConditionInput | null > | null,
  or?: Array< ModelWatchStockConditionInput | null > | null,
  not?: ModelWatchStockConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type WatchStock = {
  __typename: "WatchStock",
  id: string,
  symbol: string,
  lastPrice: number,
  change: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWatchStockInput = {
  id: string,
  symbol?: string | null,
  lastPrice?: number | null,
  change?: string | null,
};

export type DeleteWatchStockInput = {
  id: string,
};

export type ModelPurchasedStockFilterInput = {
  id?: ModelIDInput | null,
  symbol?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPurchasedStockFilterInput | null > | null,
  or?: Array< ModelPurchasedStockFilterInput | null > | null,
  not?: ModelPurchasedStockFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelPurchasedStockConnection = {
  __typename: "ModelPurchasedStockConnection",
  items:  Array<PurchasedStock | null >,
  nextToken?: string | null,
};

export type ModelWatchStockFilterInput = {
  id?: ModelIDInput | null,
  symbol?: ModelStringInput | null,
  lastPrice?: ModelFloatInput | null,
  change?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWatchStockFilterInput | null > | null,
  or?: Array< ModelWatchStockFilterInput | null > | null,
  not?: ModelWatchStockFilterInput | null,
};

export type ModelWatchStockConnection = {
  __typename: "ModelWatchStockConnection",
  items:  Array<WatchStock | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionPurchasedStockFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  symbol?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  price?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPurchasedStockFilterInput | null > | null,
  or?: Array< ModelSubscriptionPurchasedStockFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionWatchStockFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  symbol?: ModelSubscriptionStringInput | null,
  lastPrice?: ModelSubscriptionFloatInput | null,
  change?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWatchStockFilterInput | null > | null,
  or?: Array< ModelSubscriptionWatchStockFilterInput | null > | null,
};

export type CreatePurchasedStockMutationVariables = {
  input: CreatePurchasedStockInput,
  condition?: ModelPurchasedStockConditionInput | null,
};

export type CreatePurchasedStockMutation = {
  createPurchasedStock?:  {
    __typename: "PurchasedStock",
    id: string,
    symbol: string,
    quantity: number,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePurchasedStockMutationVariables = {
  input: UpdatePurchasedStockInput,
  condition?: ModelPurchasedStockConditionInput | null,
};

export type UpdatePurchasedStockMutation = {
  updatePurchasedStock?:  {
    __typename: "PurchasedStock",
    id: string,
    symbol: string,
    quantity: number,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePurchasedStockMutationVariables = {
  input: DeletePurchasedStockInput,
  condition?: ModelPurchasedStockConditionInput | null,
};

export type DeletePurchasedStockMutation = {
  deletePurchasedStock?:  {
    __typename: "PurchasedStock",
    id: string,
    symbol: string,
    quantity: number,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWatchStockMutationVariables = {
  input: CreateWatchStockInput,
  condition?: ModelWatchStockConditionInput | null,
};

export type CreateWatchStockMutation = {
  createWatchStock?:  {
    __typename: "WatchStock",
    id: string,
    symbol: string,
    lastPrice: number,
    change: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWatchStockMutationVariables = {
  input: UpdateWatchStockInput,
  condition?: ModelWatchStockConditionInput | null,
};

export type UpdateWatchStockMutation = {
  updateWatchStock?:  {
    __typename: "WatchStock",
    id: string,
    symbol: string,
    lastPrice: number,
    change: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWatchStockMutationVariables = {
  input: DeleteWatchStockInput,
  condition?: ModelWatchStockConditionInput | null,
};

export type DeleteWatchStockMutation = {
  deleteWatchStock?:  {
    __typename: "WatchStock",
    id: string,
    symbol: string,
    lastPrice: number,
    change: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPurchasedStockQueryVariables = {
  id: string,
};

export type GetPurchasedStockQuery = {
  getPurchasedStock?:  {
    __typename: "PurchasedStock",
    id: string,
    symbol: string,
    quantity: number,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPurchasedStocksQueryVariables = {
  filter?: ModelPurchasedStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchasedStocksQuery = {
  listPurchasedStocks?:  {
    __typename: "ModelPurchasedStockConnection",
    items:  Array< {
      __typename: "PurchasedStock",
      id: string,
      symbol: string,
      quantity: number,
      price: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWatchStockQueryVariables = {
  id: string,
};

export type GetWatchStockQuery = {
  getWatchStock?:  {
    __typename: "WatchStock",
    id: string,
    symbol: string,
    lastPrice: number,
    change: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWatchStocksQueryVariables = {
  filter?: ModelWatchStockFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWatchStocksQuery = {
  listWatchStocks?:  {
    __typename: "ModelWatchStockConnection",
    items:  Array< {
      __typename: "WatchStock",
      id: string,
      symbol: string,
      lastPrice: number,
      change: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePurchasedStockSubscriptionVariables = {
  filter?: ModelSubscriptionPurchasedStockFilterInput | null,
};

export type OnCreatePurchasedStockSubscription = {
  onCreatePurchasedStock?:  {
    __typename: "PurchasedStock",
    id: string,
    symbol: string,
    quantity: number,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePurchasedStockSubscriptionVariables = {
  filter?: ModelSubscriptionPurchasedStockFilterInput | null,
};

export type OnUpdatePurchasedStockSubscription = {
  onUpdatePurchasedStock?:  {
    __typename: "PurchasedStock",
    id: string,
    symbol: string,
    quantity: number,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePurchasedStockSubscriptionVariables = {
  filter?: ModelSubscriptionPurchasedStockFilterInput | null,
};

export type OnDeletePurchasedStockSubscription = {
  onDeletePurchasedStock?:  {
    __typename: "PurchasedStock",
    id: string,
    symbol: string,
    quantity: number,
    price: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWatchStockSubscriptionVariables = {
  filter?: ModelSubscriptionWatchStockFilterInput | null,
};

export type OnCreateWatchStockSubscription = {
  onCreateWatchStock?:  {
    __typename: "WatchStock",
    id: string,
    symbol: string,
    lastPrice: number,
    change: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWatchStockSubscriptionVariables = {
  filter?: ModelSubscriptionWatchStockFilterInput | null,
};

export type OnUpdateWatchStockSubscription = {
  onUpdateWatchStock?:  {
    __typename: "WatchStock",
    id: string,
    symbol: string,
    lastPrice: number,
    change: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWatchStockSubscriptionVariables = {
  filter?: ModelSubscriptionWatchStockFilterInput | null,
};

export type OnDeleteWatchStockSubscription = {
  onDeleteWatchStock?:  {
    __typename: "WatchStock",
    id: string,
    symbol: string,
    lastPrice: number,
    change: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
