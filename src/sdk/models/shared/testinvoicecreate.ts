/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class TestInvoiceCreate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "contactName" })
    contactName: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;
}
