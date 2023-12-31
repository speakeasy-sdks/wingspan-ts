/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CollaboratorGroupResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupId" })
    collaboratorGroupId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorSettings" })
    collaboratorSettings?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "defaultGroup" })
    defaultGroup: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eligibilityRequirements" })
    eligibilityRequirements?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
