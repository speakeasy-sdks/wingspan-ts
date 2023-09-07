/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListPayablesPayrollRequest extends SpeakeasyBase {
    /**
     * Unique identifier of a invoice with some constraints like invoice type
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payrollId" })
    payrollId: string;
}

export class ListPayablesPayrollResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Payroll report with line items and payroll summary
     */
    @SpeakeasyMetadata()
    payrollReportResponse?: shared.PayrollReportResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}