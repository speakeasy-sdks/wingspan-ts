/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GenerateInvoiceRequest extends SpeakeasyBase {
    /**
     * Unique identifier of an invoice
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
    invoiceId: string;
}

export class GenerateInvoiceResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Response from generation of invoice pdf
     */
    @SpeakeasyMetadata()
    invoicePdfGenerationResponse?: shared.InvoicePdfGenerationResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}