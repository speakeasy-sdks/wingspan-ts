/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class Mark1099Response extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Mark 1099 as undelivered response
     */
    @SpeakeasyMetadata()
    mark1099AsUndeliveredResponse?: shared.Mark1099AsUndeliveredResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
