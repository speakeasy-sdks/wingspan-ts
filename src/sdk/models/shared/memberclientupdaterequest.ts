/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class MemberClientUpdateRequestFormW9Data2 extends SpeakeasyBase {}

export enum StatusMemberClientUpdateRequest {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
    LessThanNilGreaterThan = "<nil>",
}

export class MemberClientUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "clientData" })
    clientData?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "emailCC" })
    emailCC?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "emailTo" })
    emailTo?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "form1099Balances" })
    form1099Balances?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "formW9Data" })
    formW9Data?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    integration?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "memberData" })
    memberData?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: StatusMemberClientUpdateRequest;
}