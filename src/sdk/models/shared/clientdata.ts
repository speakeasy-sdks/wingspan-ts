/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum AutoPayStrategyClientData {
    All = "All",
    None = "None",
}

export enum VerificationStratgyClientData {
    None = "None",
    All = "All",
}

export class ClientData extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "autoPayStrategy" })
    autoPayStrategy?: AutoPayStrategyClientData;

    @SpeakeasyMetadata()
    @Expose({ name: "externalId" })
    externalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "verificationStratgy" })
    verificationStratgy?: VerificationStratgyClientData;
}
