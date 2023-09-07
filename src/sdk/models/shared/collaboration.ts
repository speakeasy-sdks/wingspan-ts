/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum StatusCollaboration {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export class Collaboration extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientData" })
    clientData?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupIds" })
    collaboratorGroupIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorId" })
    collaboratorId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eligibilityRequirements" })
    eligibilityRequirements?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    integration?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusCollaboration;
}
