/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListPayoutDebitCardsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of a member
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
    memberId: string;
}

export class ListPayoutDebitCardsResponse extends SpeakeasyBase {
    /**
     * A list of payout debit cards
     */
    @SpeakeasyMetadata({ elemType: shared.CheckbookCard })
    checkbookCards?: shared.CheckbookCard[];

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
