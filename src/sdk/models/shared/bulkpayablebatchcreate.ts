/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum BulkPayableBatchCreateProcessingStrategy {
    Merge = "Merge",
    Single = "Single",
}

export class BulkPayableBatchCreate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "processingStrategy" })
    processingStrategy: BulkPayableBatchCreateProcessingStrategy;
}
