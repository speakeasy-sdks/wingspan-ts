/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CardTokenRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "verificationCode" })
    verificationCode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationToken" })
    verificationToken: string;
}
