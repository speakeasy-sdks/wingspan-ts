/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetPayoutDebitCardRequest extends SpeakeasyBase {
    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    /**
     * Unique identifier of a member
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberId" })
    memberId: string;
}

export class GetPayoutDebitCardResponse extends SpeakeasyBase {
    /**
     * A payout debit card
     */
    @SpeakeasyMetadata()
    checkbookCard?: shared.CheckbookCard;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
