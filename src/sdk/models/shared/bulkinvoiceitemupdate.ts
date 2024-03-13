/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FeeHandlingConfig } from "./feehandlingconfig";
import { Expose, Type } from "class-transformer";

export enum BulkInvoiceItemUpdateAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export enum InvoiceStatusBulkInvoiceItemUpdate {
    Draft = "Draft",
    Open = "Open",
    Approved = "Approved",
    Paid = "Paid",
    Cancelled = "Cancelled",
}

export class BulkInvoiceItemUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "acceptedPaymentMethods" })
    acceptedPaymentMethods?: BulkInvoiceItemUpdateAcceptedPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkInvoiceBatchId" })
    bulkInvoiceBatchId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkInvoiceItemMergeKey" })
    bulkInvoiceItemMergeKey?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkInvoiceItemReference" })
    bulkInvoiceItemReference?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientEmail" })
    clientEmail?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientExternalId" })
    clientExternalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    @Type(() => FeeHandlingConfig)
    creditFeeHandling?: FeeHandlingConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNotes" })
    invoiceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceStatus" })
    invoiceStatus?: InvoiceStatusBulkInvoiceItemUpdate;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "lineItemDescription" })
    lineItemDescription?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lineItemDetail" })
    lineItemDetail?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "paidDate" })
    paidDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "projectName" })
    projectName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reimbursableExpense" })
    reimbursableExpense?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sendDate" })
    sendDate?: string;
}
