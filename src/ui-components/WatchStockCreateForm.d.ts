/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type WatchStockCreateFormInputValues = {
    symbol?: string;
    lastPrice?: number;
    change?: string;
};
export declare type WatchStockCreateFormValidationValues = {
    symbol?: ValidationFunction<string>;
    lastPrice?: ValidationFunction<number>;
    change?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WatchStockCreateFormOverridesProps = {
    WatchStockCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    symbol?: PrimitiveOverrideProps<TextFieldProps>;
    lastPrice?: PrimitiveOverrideProps<TextFieldProps>;
    change?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WatchStockCreateFormProps = React.PropsWithChildren<{
    overrides?: WatchStockCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WatchStockCreateFormInputValues) => WatchStockCreateFormInputValues;
    onSuccess?: (fields: WatchStockCreateFormInputValues) => void;
    onError?: (fields: WatchStockCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WatchStockCreateFormInputValues) => WatchStockCreateFormInputValues;
    onValidate?: WatchStockCreateFormValidationValues;
} & React.CSSProperties>;
export default function WatchStockCreateForm(props: WatchStockCreateFormProps): React.ReactElement;
