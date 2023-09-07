/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetClientCollaboratorV2Request extends SpeakeasyBase {
    /**
     * Unique identifier of a client
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
    clientId: string;
}

export class GetClientCollaboratorV2Response extends SpeakeasyBase {
    /**
     * A single V2 Collaborator
     */
    @SpeakeasyMetadata()
    collaboratorV2?: shared.CollaboratorV2;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
