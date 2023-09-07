/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum StatusBulkClientBatch {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

/**
 * A batch of items for importing as clients
 */
export class BulkClientBatch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulkClientBatchId" })
    bulkClientBatchId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    statistics?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusBulkClientBatch;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}