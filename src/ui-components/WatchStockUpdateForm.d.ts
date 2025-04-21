/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { WatchStock } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WatchStockUpdateFormInputValues = {
    symbol?: string;
    lastPrice?: number;
    change?: string;
};
export declare type WatchStockUpdateFormValidationValues = {
    symbol?: ValidationFunction<string>;
    lastPrice?: ValidationFunction<number>;
    change?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WatchStockUpdateFormOverridesProps = {
    WatchStockUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    symbol?: PrimitiveOverrideProps<TextFieldProps>;
    lastPrice?: PrimitiveOverrideProps<TextFieldProps>;
    change?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WatchStockUpdateFormProps = React.PropsWithChildren<{
    overrides?: WatchStockUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    watchStock?: WatchStock;
    onSubmit?: (fields: WatchStockUpdateFormInputValues) => WatchStockUpdateFormInputValues;
    onSuccess?: (fields: WatchStockUpdateFormInputValues) => void;
    onError?: (fields: WatchStockUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WatchStockUpdateFormInputValues) => WatchStockUpdateFormInputValues;
    onValidate?: WatchStockUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WatchStockUpdateForm(props: WatchStockUpdateFormProps): React.ReactElement;
