/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CompanyLinks } from "./companylinks";
import { CompanyPerson } from "./companyperson";
import { Expose, Type } from "class-transformer";

export enum StructureCompany {
    None = "None",
    SoleProprietorship = "SoleProprietorship",
    LlcSingleMember = "LlcSingleMember",
    LlcMultiMember = "LlcMultiMember",
    CorporationS = "CorporationS",
    LLCCorporationS = "LLCCorporationS",
    LLCCorporationC = "LLCCorporationC",
    LLCPartnership = "LLCPartnership",
    CorporationC = "CorporationC",
    Partnership = "Partnership",
    LessThanNilGreaterThan = "<nil>",
}

export class Company extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "banking" })
    banking?: boolean;

    @SpeakeasyMetadata({ elemType: CompanyPerson })
    @Expose({ name: "companyOwners" })
    @Type(() => CompanyPerson)
    companyOwners?: CompanyPerson[];

    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "legalBusinessName" })
    legalBusinessName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "links" })
    @Type(() => CompanyLinks)
    links?: CompanyLinks;

    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "stateOfIncorporation" })
    stateOfIncorporation?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "structure" })
    structure?: StructureCompany;

    @SpeakeasyMetadata()
    @Expose({ name: "taxId" })
    taxId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "website" })
    website?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "yearOfIncorporation" })
    yearOfIncorporation?: string;
}
