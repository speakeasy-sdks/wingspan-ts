/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Sixa889960fef25bc170d22a40a86ac4d6889f536685dd9369ec52d3df36732601 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "billClassId" })
    billClassId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "billCustomerId" })
    billCustomerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expenseAccountId" })
    expenseAccountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "itemId" })
    itemId?: string;
}
