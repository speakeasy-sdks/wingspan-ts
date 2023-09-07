/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum BulkInvoiceBatchProcessingStrategy {
    Merge = "Merge",
    Single = "Single",
}

export enum StatusBulkInvoiceBatch {
    Open = "Open",
    Pending = "Pending",
    Processing = "Processing",
    Complete = "Complete",
    Failed = "Failed",
}

/**
 * A batch of items for importing as invoices
 */
export class BulkInvoiceBatch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bulkInvoiceBatchId" })
    bulkInvoiceBatchId: string;

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
    @Expose({ name: "processingStrategy" })
    processingStrategy: BulkInvoiceBatchProcessingStrategy;

    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    statistics?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusBulkInvoiceBatch;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
