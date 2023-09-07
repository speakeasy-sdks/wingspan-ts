/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AdditionalDataType {
    Boolean = "Boolean",
    String = "String",
}

/**
 * Custom fields that are set on memberClient object to describe collaborator-member
 */
export class AdditionalData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "required" })
    required: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: AdditionalDataType;
}