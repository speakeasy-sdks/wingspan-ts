/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DocumentResponse } from "./documentresponse";
import { Expose, Type } from "class-transformer";

export enum MemberClientRequirementResponseRequirementType {
    Signature = "Signature",
}

export enum StatusMemberClientRequirementResponse {
    New = "New",
    Sent = "Sent",
    Pending = "Pending",
    Complete = "Complete",
}

export class MemberClientRequirementResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupId" })
    collaboratorGroupId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "document" })
    @Type(() => DocumentResponse)
    document?: DocumentResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "documentId" })
    documentId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eligibilityRequirementId" })
    eligibilityRequirementId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "requirementType" })
    requirementType: MemberClientRequirementResponseRequirementType;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusMemberClientRequirementResponse;

    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "validFor" })
    validFor?: number;
}
