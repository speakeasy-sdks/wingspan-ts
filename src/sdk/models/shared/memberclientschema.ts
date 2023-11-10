/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c } from "./b9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c";
import { MemberClientRequirementResponse } from "./memberclientrequirementresponse";
import { MemberClientWireAccount } from "./memberclientwireaccount";
import { RedactedMember } from "./redactedmember";
import { Threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f } from "./threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum StatusMemberClientSchema {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export class MemberClientSchema extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "achCreditAccount" })
    @Type(() => MemberClientWireAccount)
    achCreditAccount: MemberClientWireAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => RedactedMember)
    client: RedactedMember;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupIds" })
    collaboratorGroupIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata({ elemType: MemberClientRequirementResponse })
    @Expose({ name: "eligibilityRequirements" })
    @Type(() => MemberClientRequirementResponse)
    eligibilityRequirements?: MemberClientRequirementResponse[];

    @SpeakeasyMetadata()
    @Expose({ name: "emailCC" })
    emailCC?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "emailTo" })
    emailTo: string;

    @SpeakeasyMetadata()
    @Expose({ name: "form1099Balances" })
    @Type(() => B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c)
    form1099Balances: B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    @Type(() => Threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f)
    integration?: Threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f;

    @SpeakeasyMetadata()
    @Expose({ name: "internationalWireAccount" })
    @Type(() => MemberClientWireAccount)
    internationalWireAccount: MemberClientWireAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusMemberClientSchema;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
