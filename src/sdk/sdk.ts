/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AdditionalData } from "./additionaldata";
import { AdditionalSettings } from "./additionalsettings";
import { AppLink } from "./applink";
import { ApprovedPayables } from "./approvedpayables";
import { BankStatements } from "./bankstatements";
import { BulkCalculation1099Batch } from "./bulkcalculation1099batch";
import { BulkCalculation1099Batches } from "./bulkcalculation1099batches";
import { BulkCalculation1099BatchItem } from "./bulkcalculation1099batchitem";
import { BulkCalculation1099BatchItems } from "./bulkcalculation1099batchitems";
import { BulkClientBatch } from "./bulkclientbatch";
import { BulkClientBatches } from "./bulkclientbatches";
import { BulkClientBatchItem } from "./bulkclientbatchitem";
import { BulkClientBatchItems } from "./bulkclientbatchitems";
import { BulkCollaboratorBatch } from "./bulkcollaboratorbatch";
import { BulkCollaboratorBatches } from "./bulkcollaboratorbatches";
import { BulkCollaboratorBatchItem } from "./bulkcollaboratorbatchitem";
import { BulkCollaboratorBatchItems } from "./bulkcollaboratorbatchitems";
import { BulkInvoiceBatch } from "./bulkinvoicebatch";
import { BulkInvoiceBatches } from "./bulkinvoicebatches";
import { BulkInvoiceBatchItem } from "./bulkinvoicebatchitem";
import { BulkInvoiceBatchItems } from "./bulkinvoicebatchitems";
import { BulkPayableBatch } from "./bulkpayablebatch";
import { BulkPayableBatches } from "./bulkpayablebatches";
import { BulkPayableBatchItem } from "./bulkpayablebatchitem";
import { BulkPayableBatchItems } from "./bulkpayablebatchitems";
import { BulkPayableBatchSummary } from "./bulkpayablebatchsummary";
import { Card } from "./card";
import { Cards } from "./cards";
import { ClientCollaboratorsV2 } from "./clientcollaboratorsv2";
import { ClientCollaboratorV2 } from "./clientcollaboratorv2";
import { ClientDeduction } from "./clientdeduction";
import { ClientDeductionID } from "./clientdeductionid";
import { ClientDeductions } from "./clientdeductions";
import { ClientInvoice } from "./clientinvoice";
import { ClientInvoiceFees } from "./clientinvoicefees";
import { ClientInvoices } from "./clientinvoices";
import { ClientInvoiceTemplate } from "./clientinvoicetemplate";
import { ClientInvoiceTemplates } from "./clientinvoicetemplates";
import { CodeToToken } from "./codetotoken";
import { Collaborator } from "./collaborator";
import { CollaboratorDeduction } from "./collaboratordeduction";
import { CollaboratorDeductions } from "./collaboratordeductions";
import { CollaboratorEvents } from "./collaboratorevents";
import { CollaboratorGroup } from "./collaboratorgroup";
import { CollaboratorGroupEligibilityRequirement } from "./collaboratorgroupeligibilityrequirement";
import { CollaboratorGroups } from "./collaboratorgroups";
import { Collaborators } from "./collaborators";
import { CollaboratorsDetailsV2 } from "./collaboratorsdetailsv2";
import { CollaboratorsV2 } from "./collaboratorsv2";
import { CollaboratorToGroup } from "./collaboratortogroup";
import { CollaboratorV2 } from "./collaboratorv2";
import { CreatedInvoicesByClient } from "./createdinvoicesbyclient";
import { EligibilityRequirement } from "./eligibilityrequirement";
import { EligibilityRequirements } from "./eligibilityrequirements";
import { Form1099 } from "./form1099";
import { FormW9 } from "./formw9";
import { InstantPayout } from "./instantpayout";
import { Institution } from "./institution";
import { Invoice } from "./invoice";
import { InvoiceAsClient } from "./invoiceasclient";
import { InvoicePayableOnMember } from "./invoicepayableonmember";
import { InvoiceTemplate } from "./invoicetemplate";
import { InvoiceTemplates } from "./invoicetemplates";
import { LineItemsAgingGroup } from "./lineitemsaginggroup";
import { Mcc } from "./mcc";
import { MemberClient } from "./memberclient";
import { MemberClients } from "./memberclients";
import { MemberInvoice } from "./memberinvoice";
import { MemberInvoices } from "./memberinvoices";
import { OneThousandAndNinetyNine } from "./onethousandandninetynine";
import { PaPayableOnClientyable } from "./papayableonclientyable";
import { PayableOnClient } from "./payableonclient";
import { Payables } from "./payables";
import { PayablesAgingGroup } from "./payablesaginggroup";
import { PayablesPayroll } from "./payablespayroll";
import { PayClientInvoice } from "./payclientinvoice";
import { PaymentEligibilityRequirement } from "./paymenteligibilityrequirement";
import { PaymentEligibilityRequirements } from "./paymenteligibilityrequirements";
import { PayoutDebitCard } from "./payoutdebitcard";
import { PayoutDebitCards } from "./payoutdebitcards";
import { PayoutSettings } from "./payoutsettings";
import { Payroll } from "./payroll";
import { PayrollSettings } from "./payrollsettings";
import { ServiceStatus } from "./servicestatus";
import { Statement } from "./statement";
import { Verification } from "./verification";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Wingspan's Payments API in Production
     */
    "https://api.wingspan.app",
    /**
     * Wingspan's Payments API in Staging
     */
    "https://stagingapi.wingspan.app",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "0.2.0";
    genVersion = "2.101.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Wingspan Payments API: Payments
 */
export class Wingspan {
    public oneThousandAndNinetyNine: OneThousandAndNinetyNine;
    public additionalData: AdditionalData;
    public additionalSettings: AdditionalSettings;
    public appLink: AppLink;
    public approvedPayables: ApprovedPayables;
    public bankStatements: BankStatements;
    public bulkCalculation1099Batch: BulkCalculation1099Batch;
    public bulkCalculation1099BatchItem: BulkCalculation1099BatchItem;
    public bulkCalculation1099BatchItems: BulkCalculation1099BatchItems;
    public bulkCalculation1099Batches: BulkCalculation1099Batches;
    public bulkClientBatch: BulkClientBatch;
    public bulkClientBatchItem: BulkClientBatchItem;
    public bulkClientBatchItems: BulkClientBatchItems;
    public bulkClientBatches: BulkClientBatches;
    public bulkCollaboratorBatch: BulkCollaboratorBatch;
    public bulkCollaboratorBatchItem: BulkCollaboratorBatchItem;
    public bulkCollaboratorBatchItems: BulkCollaboratorBatchItems;
    public bulkCollaboratorBatches: BulkCollaboratorBatches;
    public bulkInvoiceBatch: BulkInvoiceBatch;
    public bulkInvoiceBatchItem: BulkInvoiceBatchItem;
    public bulkInvoiceBatchItems: BulkInvoiceBatchItems;
    public bulkInvoiceBatches: BulkInvoiceBatches;
    public bulkPayableBatch: BulkPayableBatch;
    public bulkPayableBatchItem: BulkPayableBatchItem;
    public bulkPayableBatchItems: BulkPayableBatchItems;
    public bulkPayableBatchSummary: BulkPayableBatchSummary;
    public bulkPayableBatches: BulkPayableBatches;
    public card: Card;
    public cards: Cards;
    public clientCollaboratorV2: ClientCollaboratorV2;
    public clientCollaboratorsV2: ClientCollaboratorsV2;
    public clientDeduction: ClientDeduction;
    public clientDeductionID: ClientDeductionID;
    public clientDeductions: ClientDeductions;
    public clientInvoice: ClientInvoice;
    public clientInvoiceFees: ClientInvoiceFees;
    public clientInvoiceTemplate: ClientInvoiceTemplate;
    public clientInvoiceTemplates: ClientInvoiceTemplates;
    public clientInvoices: ClientInvoices;
    public codeToToken: CodeToToken;
    public collaborator: Collaborator;
    public collaboratorDeduction: CollaboratorDeduction;
    public collaboratorDeductions: CollaboratorDeductions;
    public collaboratorEvents: CollaboratorEvents;
    public collaboratorGroup: CollaboratorGroup;
    public collaboratorGroupEligibilityRequirement: CollaboratorGroupEligibilityRequirement;
    public collaboratorGroups: CollaboratorGroups;
    public collaboratorToGroup: CollaboratorToGroup;
    public collaboratorV2: CollaboratorV2;
    public collaborators: Collaborators;
    public collaboratorsDetailsV2: CollaboratorsDetailsV2;
    public collaboratorsV2: CollaboratorsV2;
    public createdInvoicesByClient: CreatedInvoicesByClient;
    public eligibilityRequirement: EligibilityRequirement;
    public eligibilityRequirements: EligibilityRequirements;
    public form1099: Form1099;
    public formW9: FormW9;
    public instantPayout: InstantPayout;
    public institution: Institution;
    public invoice: Invoice;
    public invoiceAsClient: InvoiceAsClient;
    public invoicePayableOnMember: InvoicePayableOnMember;
    public invoiceTemplate: InvoiceTemplate;
    public invoiceTemplates: InvoiceTemplates;
    public lineItemsAgingGroup: LineItemsAgingGroup;
    public mcc: Mcc;
    public memberClient: MemberClient;
    public memberClients: MemberClients;
    public memberInvoice: MemberInvoice;
    public memberInvoices: MemberInvoices;
    public paPayableOnClientyable: PaPayableOnClientyable;
    public payClientInvoice: PayClientInvoice;
    public payableOnClient: PayableOnClient;
    public payables: Payables;
    public payablesAgingGroup: PayablesAgingGroup;
    public payablesPayroll: PayablesPayroll;
    public paymentEligibilityRequirement: PaymentEligibilityRequirement;
    public paymentEligibilityRequirements: PaymentEligibilityRequirements;
    public payoutDebitCard: PayoutDebitCard;
    public payoutDebitCards: PayoutDebitCards;
    public payoutSettings: PayoutSettings;
    public payroll: Payroll;
    public payrollSettings: PayrollSettings;
    public serviceStatus: ServiceStatus;
    public statement: Statement;
    public verification: Verification;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            serverURL: serverURL,
        });

        this.oneThousandAndNinetyNine = new OneThousandAndNinetyNine(this.sdkConfiguration);
        this.additionalData = new AdditionalData(this.sdkConfiguration);
        this.additionalSettings = new AdditionalSettings(this.sdkConfiguration);
        this.appLink = new AppLink(this.sdkConfiguration);
        this.approvedPayables = new ApprovedPayables(this.sdkConfiguration);
        this.bankStatements = new BankStatements(this.sdkConfiguration);
        this.bulkCalculation1099Batch = new BulkCalculation1099Batch(this.sdkConfiguration);
        this.bulkCalculation1099BatchItem = new BulkCalculation1099BatchItem(this.sdkConfiguration);
        this.bulkCalculation1099BatchItems = new BulkCalculation1099BatchItems(
            this.sdkConfiguration
        );
        this.bulkCalculation1099Batches = new BulkCalculation1099Batches(this.sdkConfiguration);
        this.bulkClientBatch = new BulkClientBatch(this.sdkConfiguration);
        this.bulkClientBatchItem = new BulkClientBatchItem(this.sdkConfiguration);
        this.bulkClientBatchItems = new BulkClientBatchItems(this.sdkConfiguration);
        this.bulkClientBatches = new BulkClientBatches(this.sdkConfiguration);
        this.bulkCollaboratorBatch = new BulkCollaboratorBatch(this.sdkConfiguration);
        this.bulkCollaboratorBatchItem = new BulkCollaboratorBatchItem(this.sdkConfiguration);
        this.bulkCollaboratorBatchItems = new BulkCollaboratorBatchItems(this.sdkConfiguration);
        this.bulkCollaboratorBatches = new BulkCollaboratorBatches(this.sdkConfiguration);
        this.bulkInvoiceBatch = new BulkInvoiceBatch(this.sdkConfiguration);
        this.bulkInvoiceBatchItem = new BulkInvoiceBatchItem(this.sdkConfiguration);
        this.bulkInvoiceBatchItems = new BulkInvoiceBatchItems(this.sdkConfiguration);
        this.bulkInvoiceBatches = new BulkInvoiceBatches(this.sdkConfiguration);
        this.bulkPayableBatch = new BulkPayableBatch(this.sdkConfiguration);
        this.bulkPayableBatchItem = new BulkPayableBatchItem(this.sdkConfiguration);
        this.bulkPayableBatchItems = new BulkPayableBatchItems(this.sdkConfiguration);
        this.bulkPayableBatchSummary = new BulkPayableBatchSummary(this.sdkConfiguration);
        this.bulkPayableBatches = new BulkPayableBatches(this.sdkConfiguration);
        this.card = new Card(this.sdkConfiguration);
        this.cards = new Cards(this.sdkConfiguration);
        this.clientCollaboratorV2 = new ClientCollaboratorV2(this.sdkConfiguration);
        this.clientCollaboratorsV2 = new ClientCollaboratorsV2(this.sdkConfiguration);
        this.clientDeduction = new ClientDeduction(this.sdkConfiguration);
        this.clientDeductionID = new ClientDeductionID(this.sdkConfiguration);
        this.clientDeductions = new ClientDeductions(this.sdkConfiguration);
        this.clientInvoice = new ClientInvoice(this.sdkConfiguration);
        this.clientInvoiceFees = new ClientInvoiceFees(this.sdkConfiguration);
        this.clientInvoiceTemplate = new ClientInvoiceTemplate(this.sdkConfiguration);
        this.clientInvoiceTemplates = new ClientInvoiceTemplates(this.sdkConfiguration);
        this.clientInvoices = new ClientInvoices(this.sdkConfiguration);
        this.codeToToken = new CodeToToken(this.sdkConfiguration);
        this.collaborator = new Collaborator(this.sdkConfiguration);
        this.collaboratorDeduction = new CollaboratorDeduction(this.sdkConfiguration);
        this.collaboratorDeductions = new CollaboratorDeductions(this.sdkConfiguration);
        this.collaboratorEvents = new CollaboratorEvents(this.sdkConfiguration);
        this.collaboratorGroup = new CollaboratorGroup(this.sdkConfiguration);
        this.collaboratorGroupEligibilityRequirement = new CollaboratorGroupEligibilityRequirement(
            this.sdkConfiguration
        );
        this.collaboratorGroups = new CollaboratorGroups(this.sdkConfiguration);
        this.collaboratorToGroup = new CollaboratorToGroup(this.sdkConfiguration);
        this.collaboratorV2 = new CollaboratorV2(this.sdkConfiguration);
        this.collaborators = new Collaborators(this.sdkConfiguration);
        this.collaboratorsDetailsV2 = new CollaboratorsDetailsV2(this.sdkConfiguration);
        this.collaboratorsV2 = new CollaboratorsV2(this.sdkConfiguration);
        this.createdInvoicesByClient = new CreatedInvoicesByClient(this.sdkConfiguration);
        this.eligibilityRequirement = new EligibilityRequirement(this.sdkConfiguration);
        this.eligibilityRequirements = new EligibilityRequirements(this.sdkConfiguration);
        this.form1099 = new Form1099(this.sdkConfiguration);
        this.formW9 = new FormW9(this.sdkConfiguration);
        this.instantPayout = new InstantPayout(this.sdkConfiguration);
        this.institution = new Institution(this.sdkConfiguration);
        this.invoice = new Invoice(this.sdkConfiguration);
        this.invoiceAsClient = new InvoiceAsClient(this.sdkConfiguration);
        this.invoicePayableOnMember = new InvoicePayableOnMember(this.sdkConfiguration);
        this.invoiceTemplate = new InvoiceTemplate(this.sdkConfiguration);
        this.invoiceTemplates = new InvoiceTemplates(this.sdkConfiguration);
        this.lineItemsAgingGroup = new LineItemsAgingGroup(this.sdkConfiguration);
        this.mcc = new Mcc(this.sdkConfiguration);
        this.memberClient = new MemberClient(this.sdkConfiguration);
        this.memberClients = new MemberClients(this.sdkConfiguration);
        this.memberInvoice = new MemberInvoice(this.sdkConfiguration);
        this.memberInvoices = new MemberInvoices(this.sdkConfiguration);
        this.paPayableOnClientyable = new PaPayableOnClientyable(this.sdkConfiguration);
        this.payClientInvoice = new PayClientInvoice(this.sdkConfiguration);
        this.payableOnClient = new PayableOnClient(this.sdkConfiguration);
        this.payables = new Payables(this.sdkConfiguration);
        this.payablesAgingGroup = new PayablesAgingGroup(this.sdkConfiguration);
        this.payablesPayroll = new PayablesPayroll(this.sdkConfiguration);
        this.paymentEligibilityRequirement = new PaymentEligibilityRequirement(
            this.sdkConfiguration
        );
        this.paymentEligibilityRequirements = new PaymentEligibilityRequirements(
            this.sdkConfiguration
        );
        this.payoutDebitCard = new PayoutDebitCard(this.sdkConfiguration);
        this.payoutDebitCards = new PayoutDebitCards(this.sdkConfiguration);
        this.payoutSettings = new PayoutSettings(this.sdkConfiguration);
        this.payroll = new Payroll(this.sdkConfiguration);
        this.payrollSettings = new PayrollSettings(this.sdkConfiguration);
        this.serviceStatus = new ServiceStatus(this.sdkConfiguration);
        this.statement = new Statement(this.sdkConfiguration);
        this.verification = new Verification(this.sdkConfiguration);
    }
}
