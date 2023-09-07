/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AddCollaboratorToGroupRequest extends SpeakeasyBase {
    /**
     * Unique group Id
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
    groupId: string;

    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class AddCollaboratorToGroupResponse extends SpeakeasyBase {
    /**
     * A collaborator is a contractor that can receive payments
     */
    @SpeakeasyMetadata()
    collaboratorSchema?: shared.CollaboratorSchema;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
