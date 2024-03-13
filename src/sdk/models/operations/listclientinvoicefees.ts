/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class ListClientInvoiceFeesRequest extends SpeakeasyBase {
    /**
     * Unique identifier of an invoice
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
    invoiceId: string;
}

export class ListClientInvoiceFeesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Fees on Invoice
     */
    @SpeakeasyMetadata()
    invoiceFeeCalculation?: shared.InvoiceFeeCalculation;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
