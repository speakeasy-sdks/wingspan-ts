/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Invoice } from "./invoice";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum StatusInvoiceTemplate {
    Active = "Active",
    Draft = "Draft",
    Expired = "Expired",
    Cancelled = "Cancelled",
}

export class InvoiceTemplate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "autoPaymentRequired" })
    autoPaymentRequired?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdInvoiceId" })
    createdInvoiceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "dueInDays" })
    dueInDays?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    frequency?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceData" })
    @Type(() => Invoice)
    invoiceData: Invoice;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceTemplateId" })
    invoiceTemplateId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isSchedulingOnly" })
    isSchedulingOnly?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "lastInvoiceDate" })
    lastInvoiceDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "nextInvoiceDate" })
    nextInvoiceDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethodId" })
    paymentMethodId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "scheduleDates" })
    scheduleDates?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusInvoiceTemplate;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
