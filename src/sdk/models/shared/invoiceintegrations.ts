/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Sixa889960fef25bc170d22a40a86ac4d6889f536685dd9369ec52d3df36732601 } from "./sixa889960fef25bc170d22a40a86ac4d6889f536685dd9369ec52d3df36732601";
import { Expose, Type } from "class-transformer";

export class InvoiceIntegrations extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "quickbooks" })
    @Type(() => Sixa889960fef25bc170d22a40a86ac4d6889f536685dd9369ec52d3df36732601)
    quickbooks?: Sixa889960fef25bc170d22a40a86ac4d6889f536685dd9369ec52d3df36732601;
}
