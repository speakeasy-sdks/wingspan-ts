/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum MeansTypePaymentInfo {
    Card = "Card",
    Account = "Account",
}

export class PaymentInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "brandImageUrl" })
    brandImageUrl?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "cardBrand" })
    cardBrand?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "meansDescription" })
    meansDescription?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "meansLast4" })
    meansLast4?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "meansType" })
    meansType: MeansTypePaymentInfo;
}
