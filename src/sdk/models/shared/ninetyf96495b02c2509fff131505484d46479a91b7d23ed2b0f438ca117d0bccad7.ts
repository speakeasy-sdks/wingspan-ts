/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CollaboratorForm1099BalancesUpdateRequest } from "./collaboratorform1099balancesupdaterequest";
import { Expose, Type } from "class-transformer";

export class Ninetyf96495b02c2509fff131505484d46479a91b7d23ed2b0f438ca117d0bccad7 extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "2021" })
    @Type(() => CollaboratorForm1099BalancesUpdateRequest)
    twoThousandAndTwentyOne?: CollaboratorForm1099BalancesUpdateRequest;

    @SpeakeasyMetadata()
    @Expose({ name: "2022" })
    @Type(() => CollaboratorForm1099BalancesUpdateRequest)
    twoThousandAndTwentyTwo?: CollaboratorForm1099BalancesUpdateRequest;
}
