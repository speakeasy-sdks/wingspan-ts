/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetBulkInvoiceBatchItemRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a batch
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchId" })
    batchId: string;

    /**
     * Unique identifier for an item in a batch
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchItemId" })
    batchItemId: string;
}

export class GetBulkInvoiceBatchItemResponse extends SpeakeasyBase {
    /**
     * An item that will be converted into a invoice
     */
    @SpeakeasyMetadata()
    bulkInvoiceItem?: shared.BulkInvoiceItem;

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
