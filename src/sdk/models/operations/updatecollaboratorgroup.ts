/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateCollaboratorGroupRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    collaboratorGroupUpdateRequest?: shared.CollaboratorGroupUpdateRequest;

    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class UpdateCollaboratorGroupResponse extends SpeakeasyBase {
    /**
     * Collaborator Configuration Per Group
     */
    @SpeakeasyMetadata()
    collaboratorGroupResponse?: shared.CollaboratorGroupResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}