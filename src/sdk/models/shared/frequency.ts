/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum IntervalFrequency {
    Week = "Week",
    Month = "Month",
    LessThanNilGreaterThan = "<nil>",
}

export class Frequency extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "daily" })
    daily?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "dayInInterval" })
    dayInInterval?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "endDate" })
    endDate?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "every" })
    every?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "interval" })
    interval?: IntervalFrequency;

    @SpeakeasyMetadata()
    @Expose({ name: "startDate" })
    startDate: string;

    @SpeakeasyMetadata()
    @Expose({ name: "twicePerMonth" })
    twicePerMonth?: any;
}
