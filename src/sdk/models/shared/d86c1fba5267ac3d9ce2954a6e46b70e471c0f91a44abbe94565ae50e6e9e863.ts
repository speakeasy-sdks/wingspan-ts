/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class D86c1fba5267ac3d9ce2954a6e46b70e471c0f91a44abbe94565ae50e6e9e863 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "customerId" })
    customerId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expenseAccountId" })
    expenseAccountId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "itemId" })
    itemId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "vendorId" })
    vendorId?: string;
}
