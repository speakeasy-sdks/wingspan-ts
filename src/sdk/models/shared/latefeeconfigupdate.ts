/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LateFeeConfigUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    frequency?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "lateFeeAmount" })
    lateFeeAmount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "lateFeePercentage" })
    lateFeePercentage?: number;
}
