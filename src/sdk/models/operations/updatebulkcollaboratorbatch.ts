/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateBulkCollaboratorBatchRequest extends SpeakeasyBase {
    /**
     * Unique identifier for a batch
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchId" })
    batchId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    bulkBatchUpdate?: shared.BulkBatchUpdate;
}

export class UpdateBulkCollaboratorBatchResponse extends SpeakeasyBase {
    /**
     * A batch of items for importing as collaborators
     */
    @SpeakeasyMetadata()
    bulkCollaboratorBatch?: shared.BulkCollaboratorBatch;

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
