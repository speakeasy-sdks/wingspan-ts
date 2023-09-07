/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DeductionApplication } from "./deductionapplication";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum CurrencyDeductionResponse {
    Usd = "USD",
    Cad = "CAD",
}

export enum DeductionResponseStatus {
    Pending = "Pending",
    PartiallyApplied = "PartiallyApplied",
    Complete = "Complete",
}

export enum TypeDeductionResponse {
    PrePayment = "PrePayment",
    PostPayment = "PostPayment",
}

/**
 * A deduction
 */
export class DeductionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata({ elemType: DeductionApplication })
    @Expose({ name: "application" })
    @Type(() => DeductionApplication)
    application: DeductionApplication[];

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: CurrencyDeductionResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "deductionId" })
    deductionId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "deductionTemplateId" })
    deductionTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "disbursement" })
    disbursement?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "priority" })
    priority: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceInvoiceId" })
    sourceInvoiceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "startDate" })
    startDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: DeductionResponseStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: TypeDeductionResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
