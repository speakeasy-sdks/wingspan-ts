/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class Remail1099Response extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Remail 1099 response
     */
    @SpeakeasyMetadata()
    remail1099Response?: shared.Remail1099Response;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}