/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ListCollaboratorsV2Response extends SpeakeasyBase {
    /**
     * List of V2 Collaborators
     */
    @SpeakeasyMetadata({ elemType: shared.CollaboratorV2 })
    collaboratorV2s?: shared.CollaboratorV2[];

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}