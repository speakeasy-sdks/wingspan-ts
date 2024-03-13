/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class InvoiceAmountDetails extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientPaid" })
    clientPaid: number;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorPayments" })
    collaboratorPayments: number;

    @SpeakeasyMetadata()
    @Expose({ name: "deductions" })
    deductions: number;

    @SpeakeasyMetadata()
    @Expose({ name: "memberGross" })
    memberGross: number;

    @SpeakeasyMetadata()
    @Expose({ name: "memberNet" })
    memberNet: number;

    @SpeakeasyMetadata()
    @Expose({ name: "memberTaxWithheld" })
    memberTaxWithheld: number;

    @SpeakeasyMetadata()
    @Expose({ name: "processingFee" })
    processingFee: number;

    @SpeakeasyMetadata()
    @Expose({ name: "wingspanTopUp" })
    wingspanTopUp: number;
}
