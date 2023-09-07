/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum StatusPayrollSettingsUpdate {
    Active = "Active",
    Draft = "Draft",
    Expired = "Expired",
    Cancelled = "Cancelled",
    LessThanNilGreaterThan = "<nil>",
}

export enum WorkflowPayrollSettingsUpdate {
    SingleStage = "SingleStage",
    DualStage = "DualStage",
    LessThanNilGreaterThan = "<nil>",
}

export class PayrollSettingsUpdate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "calculationSettings1099" })
    calculationSettings1099?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "enablePlannedPayroll" })
    enablePlannedPayroll?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "enableProcessDaysBeforeDue" })
    enableProcessDaysBeforeDue?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "frequency" })
    frequency?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "fundingSource" })
    fundingSource?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "issue1099s" })
    issue1099s?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "processDaysBeforeDue" })
    processDaysBeforeDue?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "scheduleDates" })
    scheduleDates?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusPayrollSettingsUpdate;

    @SpeakeasyMetadata()
    @Expose({ name: "workflow" })
    workflow?: WorkflowPayrollSettingsUpdate;
}