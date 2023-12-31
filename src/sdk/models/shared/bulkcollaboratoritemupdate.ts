/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CollaboratorStatusBulkCollaboratorItemUpdate {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
    LessThanNilGreaterThan = "<nil>",
}

export class BulkCollaboratorItemUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupId" })
    collaboratorGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorId" })
    collaboratorId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorStatus" })
    collaboratorStatus?: CollaboratorStatusBulkCollaboratorItemUpdate;

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "externalId" })
    externalId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "firstLastName" })
    firstLastName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "formW9Data" })
    formW9Data?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: any;
}
