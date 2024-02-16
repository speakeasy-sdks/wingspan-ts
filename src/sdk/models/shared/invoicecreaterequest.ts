/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FeeHandlingConfig } from "./feehandlingconfig";
import { InvoiceCollaboratorCreateRequest } from "./invoicecollaboratorcreaterequest";
import { InvoiceLineItemsCreateRequest } from "./invoicelineitemscreaterequest";
import { InvoiceMetadata } from "./invoicemetadata";
import { InvoiceNotificationPreferences } from "./invoicenotificationpreferences";
import { LateFeeConfigUpdate } from "./latefeeconfigupdate";
import { ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2 } from "./thirtysixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2";
import { ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461 } from "./threebilliononehundredandninetymillionsixhundredandeightyfivethousandeighthundredandthirtytwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461";
import { Expose, Type } from "class-transformer";

export enum InvoiceCreateRequestAcceptedPaymentMethods {
    Credit = "Credit",
    Ach = "ACH",
    Manual = "Manual",
}

export class Client extends SpeakeasyBase {}

export enum CurrencyInvoiceCreateRequest {
    Usd = "USD",
    Cad = "CAD",
}

export class Member extends SpeakeasyBase {}

export enum StatusInvoiceCreateRequest {
    Draft = "Draft",
    Open = "Open",
    Overdue = "Overdue",
    Cancelled = "Cancelled",
    Pending = "Pending",
    PaymentInTransit = "PaymentInTransit",
    Paid = "Paid",
}

export class InvoiceCreateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "acceptedPaymentMethods" })
    acceptedPaymentMethods?: InvoiceCreateRequestAcceptedPaymentMethods[];

    @SpeakeasyMetadata()
    @Expose({ name: "attachments" })
    @Type(() => ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2)
    attachments?: ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2;

    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => Client)
    client?: Client;

    @SpeakeasyMetadata({ elemType: InvoiceCollaboratorCreateRequest })
    @Expose({ name: "collaborators" })
    @Type(() => InvoiceCollaboratorCreateRequest)
    collaborators?: InvoiceCollaboratorCreateRequest[];

    @SpeakeasyMetadata()
    @Expose({ name: "creditFeeHandling" })
    @Type(() => FeeHandlingConfig)
    creditFeeHandling: FeeHandlingConfig;

    @SpeakeasyMetadata()
    @Expose({ name: "currency" })
    currency?: CurrencyInvoiceCreateRequest;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    dueDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(
        () =>
            ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461
    )
    integration?: ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceNotes" })
    invoiceNotes?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "lateFeeHandling" })
    @Type(() => LateFeeConfigUpdate)
    lateFeeHandling?: LateFeeConfigUpdate;

    @SpeakeasyMetadata({ elemType: InvoiceLineItemsCreateRequest })
    @Expose({ name: "lineItems" })
    @Type(() => InvoiceLineItemsCreateRequest)
    lineItems: InvoiceLineItemsCreateRequest[];

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    @Type(() => Member)
    member?: Member;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => InvoiceMetadata)
    metadata?: InvoiceMetadata;

    @SpeakeasyMetadata()
    @Expose({ name: "notificationPreferences" })
    @Type(() => InvoiceNotificationPreferences)
    notificationPreferences?: InvoiceNotificationPreferences;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusInvoiceCreateRequest;
}
