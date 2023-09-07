/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateBulkInvoiceBatchItemRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    bulkInvoiceItemUpdate?: shared.BulkInvoiceItemUpdate;

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

export class UpdateBulkInvoiceBatchItemResponse extends SpeakeasyBase {
    /**
     * An item that will be converted into a invoice
     */
    @SpeakeasyMetadata()
    bulkInvoiceItem?: shared.BulkInvoiceItem;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}