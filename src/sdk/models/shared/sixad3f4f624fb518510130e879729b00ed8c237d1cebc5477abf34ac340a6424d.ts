/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "expenseAccountId" })
    expenseAccountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "itemId" })
    itemId?: string;
}