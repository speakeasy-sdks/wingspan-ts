/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum StatusBulkInvoiceBatchUpdate {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
    LessThanNilGreaterThan = "<nil>",
}

export class BulkInvoiceBatchUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusBulkInvoiceBatchUpdate;
}
