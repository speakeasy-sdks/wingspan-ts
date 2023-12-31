/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c } from "./b9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c";
import { ClientData } from "./clientdata";
import { ExternalIds } from "./externalids";
import { FiftyFoura6b24a57d15569713a0fc2cbf4d7b60e5b00c0035643d120b72001060ebd30 } from "./fiftyfoura6b24a57d15569713a0fc2cbf4d7b60e5b00c0035643d120b72001060ebd30";
import { MemberClientFormW9Info } from "./memberclientformw9info";
import { MemberClientWireAccount } from "./memberclientwireaccount";
import { MemberData } from "./memberdata";
import { RedactedMember } from "./redactedmember";
import { UserRoles } from "./userroles";
import { Expose, Type } from "class-transformer";

export enum StatusMemberClient {
    Active = "Active",
    Inactive = "Inactive",
    Pending = "Pending",
}

export enum TaxStatusMemberClient {
    Complete = "Complete",
    Failed = "Failed",
    Pending = "Pending",
    Incomplete = "Incomplete",
}

export class MemberClient extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "achCreditAccount" })
    @Type(() => MemberClientWireAccount)
    achCreditAccount: MemberClientWireAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "client" })
    @Type(() => RedactedMember)
    client: RedactedMember;

    @SpeakeasyMetadata()
    @Expose({ name: "clientData" })
    @Type(() => ClientData)
    clientData: ClientData;

    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupId" })
    collaboratorGroupId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "collaboratorGroupIds" })
    collaboratorGroupIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "company" })
    company?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "eligibilityRequirements" })
    eligibilityRequirements?: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "emailCC" })
    emailCC?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "emailTo" })
    emailTo: string;

    @SpeakeasyMetadata()
    @Expose({ name: "externalIds" })
    @Type(() => ExternalIds)
    externalIds: ExternalIds;

    @SpeakeasyMetadata()
    @Expose({ name: "form1099Balances" })
    @Type(() => B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c)
    form1099Balances: B9789f45f8c8070ff38a64d80c2e4a8732ddaf329e46546474400d26f84c0f1c;

    @SpeakeasyMetadata()
    @Expose({ name: "formW9Data" })
    @Type(() => MemberClientFormW9Info)
    formW9Data: MemberClientFormW9Info;

    @SpeakeasyMetadata()
    @Expose({ name: "integration" })
    integration?: any;

    @SpeakeasyMetadata()
    @Expose({ name: "internal" })
    @Type(() => FiftyFoura6b24a57d15569713a0fc2cbf4d7b60e5b00c0035643d120b72001060ebd30)
    internal: FiftyFoura6b24a57d15569713a0fc2cbf4d7b60e5b00c0035643d120b72001060ebd30;

    @SpeakeasyMetadata()
    @Expose({ name: "internationalWireAccount" })
    @Type(() => MemberClientWireAccount)
    internationalWireAccount: MemberClientWireAccount;

    @SpeakeasyMetadata()
    @Expose({ name: "labels" })
    labels: Record<string, string>;

    @SpeakeasyMetadata()
    @Expose({ name: "member" })
    @Type(() => RedactedMember)
    member: RedactedMember;

    @SpeakeasyMetadata()
    @Expose({ name: "memberClientId" })
    memberClientId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "memberData" })
    @Type(() => MemberData)
    memberData: MemberData;

    @SpeakeasyMetadata()
    @Expose({ name: "memberId" })
    memberId: string;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: StatusMemberClient;

    @SpeakeasyMetadata()
    @Expose({ name: "taxStatus" })
    taxStatus: TaxStatusMemberClient;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    updatedAt: string;

    @SpeakeasyMetadata()
    @Expose({ name: "userRoles" })
    @Type(() => UserRoles)
    userRoles: UserRoles;
}
