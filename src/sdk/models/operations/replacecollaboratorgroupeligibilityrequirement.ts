/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ReplaceCollaboratorGroupEligibilityRequirementRequest extends SpeakeasyBase {
    /**
     * Unique eligibility Requirement Id
     */
    @SpeakeasyMetadata({
        data: "pathParam, style=simple;explode=false;name=eligibilityRequirementId",
    })
    eligibilityRequirementId: string;

    /**
     * Unique identifier
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    collaboratorGroupRequirementUpdate?: shared.CollaboratorGroupRequirementUpdate;
}

export class ReplaceCollaboratorGroupEligibilityRequirementResponse extends SpeakeasyBase {
    /**
     * Collaborator Configuration Per Group
     */
    @SpeakeasyMetadata()
    collaboratorGroupResponse?: shared.CollaboratorGroupResponse;

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
