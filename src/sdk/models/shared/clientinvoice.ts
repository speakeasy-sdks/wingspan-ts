/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { ClientOptions } from "./clientoptions";
import { FeeHandlingConfig } from "./feehandlingconfig";
import { Fees } from "./fees";
import { InvoiceAttachments } from "./invoiceattachments";
import { InvoiceEvents } from "./invoiceevents";
import { InvoiceIntegrations } from "./invoiceintegrations";
import { InvoiceLineItem } from "./invoicelineitem";
import { InvoiceMetadata } from "./invoicemetadata";
import { LateFeeConfig } from "./latefeeconfig";
import { MemberClient } from "./memberclient";
import { MemberOptions } from "./memberoptions";
import { PaymentInfo } from "./paymentinfo";
import { ProcessingFees } from "./processingfees";
import { Expose, Type } from "class-transformer";

export enum ClientInvoiceAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
    LessThanNilGreaterThan = "<nil>",
}

export enum ClientInvoiceCurrency {
    Usd = "USD",
    Cad = "CAD",
}

export enum StatusClientInvoice {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export class ClientInvoice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "acceptedPaymentMethods" })
    acceptedPaymentMethods?: ClientInvoiceAcceptedPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "accountId" })
    accountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "additionalRecipientEmails" })
    additionalRecipientEmails: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "amount" })
    amount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "attachments" })
    @Type(() => InvoiceAttachments)
    attachments?: InvoiceAttachments;

    @SpeakeasyMetadata()
    @Expose({ name: "bankTransferInfo" })
    @Type(() => BankAccount)
    bankTransferInfo?: BankAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "chargedFees" })
    @Type(() => Fees)
    chargedFees?: Fees;

    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => ClientOptions)
    client: ClientOptions;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    @Type(() => FeeHandlingConfig)
    creditFeeHandling?: FeeHandlingConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency: ClientInvoiceCurrency;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "events" })
    @Type(() => InvoiceEvents)
    events: InvoiceEvents;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(() => InvoiceIntegrations)
    integration?: InvoiceIntegrations;

    @SpeakeasyMetadata()
    @Expose({ name: "internationalBankTransferInfo" })
    @Type(() => BankAccount)
    internationalBankTransferInfo?: BankAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceId" })
    invoiceId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNotes" })
    invoiceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNumber" })
    invoiceNumber: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceTemplateId" })
    invoiceTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lateFeeHandling" })
    @Type(() => LateFeeConfig)
    lateFeeHandling?: LateFeeConfig;

    @SpeakeasyMetadata({ elemType: InvoiceLineItem })
    @Expose({ name: "lineItems" })
    @Type(() => InvoiceLineItem)
    lineItems: InvoiceLineItem[];

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    @Type(() => MemberOptions)
    member: MemberOptions;

    @SpeakeasyMetadata()
    @Expose({ name: "memberAcceptsPayments" })
    memberAcceptsPayments: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "memberAddress" })
    @Type(() => Address)
    memberAddress: Address;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClient" })
    @Type(() => MemberClient)
    memberClient: MemberClient;

    @SpeakeasyMetadata()
    @Expose({ name: "memberCompany" })
    memberCompany: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberEmail" })
    memberEmail: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberFormattedAddressLines" })
    memberFormattedAddressLines?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "memberLogoUrl" })
    memberLogoUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberName" })
    memberName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberPaymentsVersion" })
    memberPaymentsVersion: number;

    @SpeakeasyMetadata()
    @Expose({ name: "memberStripeAccountId" })
    memberStripeAccountId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => InvoiceMetadata)
    metadata?: InvoiceMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentInfo" })
    @Type(() => PaymentInfo)
    paymentInfo?: PaymentInfo;

    @SpeakeasyMetadata()
    @Expose({ name: "paymentMethodId" })
    paymentMethodId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "processingFees" })
    @Type(() => ProcessingFees)
    processingFees?: ProcessingFees;

    @SpeakeasyMetadata()
    @Expose({ name: "projectName" })
    projectName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "sourceId" })
    sourceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusClientInvoice;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;
}
