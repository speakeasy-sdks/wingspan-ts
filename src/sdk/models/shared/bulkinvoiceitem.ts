/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a } from "./c1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a";
import { FeeHandlingConfig } from "./feehandlingconfig";
import { InvoiceIntegrations } from "./invoiceintegrations";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum BulkInvoiceItemAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
    LessThanNilGreaterThan = "<nil>",
}

export enum InvoiceStatusBulkInvoiceItem {
    Draft = "Draft",
    Open = "Open",
    Approved = "Approved",
    Paid = "Paid",
    Cancelled = "Cancelled",
}

export enum StatusBulkInvoiceItem {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

export class BulkInvoiceItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "acceptedPaymentMethods" })
    acceptedPaymentMethods?: BulkInvoiceItemAcceptedPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkInvoiceBatchId" })
    bulkInvoiceBatchId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkInvoiceItemId" })
    bulkInvoiceItemId: string;

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
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    @Type(() => FeeHandlingConfig)
    creditFeeHandling?: FeeHandlingConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(() => InvoiceIntegrations)
    integration?: InvoiceIntegrations;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNotes" })
    invoiceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceStatus" })
    invoiceStatus: InvoiceStatusBulkInvoiceItem;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "lineItemDescription" })
    lineItemDescription: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lineItemDetail" })
    lineItemDetail?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a)
    metadata?: C1b9877fd1d35a4292006c3c09941c1c5c21bbe2e0e87488661804eebf2a3e4a;

    @SpeakeasyMetadata()
    @Expose({ name: "paidDate" })
    paidDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "projectName" })
    projectName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reimbursableExpense" })
    reimbursableExpense?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sendDate" })
    sendDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusBulkInvoiceItem;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
