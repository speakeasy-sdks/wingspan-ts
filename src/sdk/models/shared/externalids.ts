/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ExternalIds extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulk" })
    bulk?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "quickbooks" })
    quickbooks?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "stripe" })
    stripe?: string;
}