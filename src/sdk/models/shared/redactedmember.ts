/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RedactedUser } from "./redacteduser";
import { Expose, Type } from "class-transformer";

export class RedactedMember extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "profile" })
    profile?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => RedactedUser)
    user: RedactedUser;
}
