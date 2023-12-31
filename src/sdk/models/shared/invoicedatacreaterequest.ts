/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InvoiceLineItemsCreateRequest } from "./invoicelineitemscreaterequest";
import { Expose, Type } from "class-transformer";

export enum InvoiceDataCreateRequestAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
    LessThanNilGreaterThan = "<nil>",
}

export enum CurrencyInvoiceDataCreateRequest {
    Usd = "USD",
    Cad = "CAD",
    LessThanNilGreaterThan = "<nil>",
}

export enum StatusInvoiceDataCreateRequest {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
    LessThanNilGreaterThan = "<nil>",
}

export class InvoiceDataCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "acceptedPaymentMethods" })
    acceptedPaymentMethods?: InvoiceDataCreateRequestAcceptedPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "attachments" })
    attachments?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "collaborators" })
    collaborators?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    creditFeeHandling?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: CurrencyInvoiceDataCreateRequest;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNotes" })
    invoiceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "lateFeeHandling" })
    lateFeeHandling?: any;

    @SpeakeasyMetadata({ elemType: InvoiceLineItemsCreateRequest })
    @Expose({ name: "lineItems" })
    @Type(() => InvoiceLineItemsCreateRequest)
    lineItems: InvoiceLineItemsCreateRequest[];

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "notificationPreferences" })
    notificationPreferences?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusInvoiceDataCreateRequest;
}
