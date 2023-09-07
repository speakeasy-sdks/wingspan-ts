/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetInstitutionRequest extends SpeakeasyBase {
    /**
     * Bank Routing Number
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=routingNumber" })
    routingNumber: string;
}

export class GetInstitutionResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Institution Response
     */
    @SpeakeasyMetadata()
    institutionResponse?: shared.InstitutionResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}