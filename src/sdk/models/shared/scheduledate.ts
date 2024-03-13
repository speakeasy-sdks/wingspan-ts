/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum StatusScheduleDate {
    Pending = "Pending",
    Completed = "Completed",
    Skipped = "Skipped",
    Modified = "Modified",
}

export class ScheduleDate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "cutOffDate" })
    cutOffDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceId" })
    invoiceId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "invoiceTemplateId" })
    invoiceTemplateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusScheduleDate;
}
