/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum CollaboratorStatusBulkCollaboratorItem {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export enum StatusBulkCollaboratorItem {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

/**
 * An item that will be converted into a collaborator
 */
export class BulkCollaboratorItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulkCollaboratorBatchId" })
    bulkCollaboratorBatchId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkCollaboratorItemId" })
    bulkCollaboratorItemId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupId" })
    collaboratorGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorId" })
    collaboratorId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorStatus" })
    collaboratorStatus: CollaboratorStatusBulkCollaboratorItem;

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

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
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusBulkCollaboratorItem;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}