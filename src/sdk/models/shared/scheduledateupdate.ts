/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum StatusScheduleDateUpdate {
    Pending = "Pending",
    Completed = "Completed",
    Skipped = "Skipped",
    Modified = "Modified",
    LessThanNilGreaterThan = "<nil>",
}

export class ScheduleDateUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceTemplateId" })
    invoiceTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusScheduleDateUpdate;
}
