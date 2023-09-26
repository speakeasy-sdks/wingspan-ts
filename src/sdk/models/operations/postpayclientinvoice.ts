/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PostPayClientInvoiceRequest extends SpeakeasyBase {
    /**
     * Unique identifier of an invoice
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoice_id" })
    invoiceId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    payRequest?: shared.PayRequest;
}

export class PostPayClientInvoiceResponse extends SpeakeasyBase {
    /**
     * A client created invoice
     */
    @SpeakeasyMetadata()
    clientInvoice?: shared.ClientInvoice;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
