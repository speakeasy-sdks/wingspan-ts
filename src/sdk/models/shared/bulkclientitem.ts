/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum ClientStatusBulkClientItem {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export enum StatusBulkClientItem {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

/**
 * An item that will be converted into a client
 */
export class BulkClientItem extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulkClientBatchId" })
    bulkClientBatchId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "bulkClientItemId" })
    bulkClientItemId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "clientStatus" })
    clientStatus: ClientStatusBulkClientItem;

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
    @Expose({ name: "integration" })
    integration?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberData" })
    memberData?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    metadata?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusBulkClientItem;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
