# Wingspan TS SDK

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>   
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/wingspan-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/wingspan-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


```typescript
import { Wingspan } from "wingspan";
import { Calculate1099Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.calculate({
  memberClientId: "corrupti",
  year: 5928.45,
}).then((res: Calculate1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [oneThousandAndNinetyNine](docs/sdks/onethousandandninetynine/README.md)

* [calculate](docs/sdks/onethousandandninetynine/README.md#calculate) - Calculate 1099 amounts for collaborator
* [mark](docs/sdks/onethousandandninetynine/README.md#mark) - Mark a 1099 submission as returned by mail for collaborator
* [remail](docs/sdks/onethousandandninetynine/README.md#remail) - Re-mail 1099 submission for collaborator

### [additionalData](docs/sdks/additionaldata/README.md)

* [create](docs/sdks/additionaldata/README.md#create) - Create additional data
* [delete](docs/sdks/additionaldata/README.md#delete) - Delete additional data
* [get](docs/sdks/additionaldata/README.md#get) - Get additional data

### [additionalSettings](docs/sdks/additionalsettings/README.md)

* [list](docs/sdks/additionalsettings/README.md#list) - List additional settings
* [update](docs/sdks/additionalsettings/README.md#update) - Update additional settings

### [appLink](docs/sdks/applink/README.md)

* [get](docs/sdks/applink/README.md#get) - Gets an application link for creating the clearing bank account

### [approvedPayables](docs/sdks/approvedpayables/README.md)

* [list](docs/sdks/approvedpayables/README.md#list) - List approved payables for payroll

### [bankStatements](docs/sdks/bankstatements/README.md)

* [list](docs/sdks/bankstatements/README.md#list) - List bank statements

### [bulkCalculation1099Batch](docs/sdks/bulkcalculation1099batch/README.md)

* [create](docs/sdks/bulkcalculation1099batch/README.md#create) - Create a bulk calculation1099 batch
* [get](docs/sdks/bulkcalculation1099batch/README.md#get) - Get a bulk calculation1099 batch
* [update](docs/sdks/bulkcalculation1099batch/README.md#update) - Update a bulk calculation1099 batch

### [bulkCalculation1099BatchItem](docs/sdks/bulkcalculation1099batchitem/README.md)

* [create](docs/sdks/bulkcalculation1099batchitem/README.md#create) - Create a bulk calculation1099 batch item
* [get](docs/sdks/bulkcalculation1099batchitem/README.md#get) - Get a bulk calculation1099 batch item
* [update](docs/sdks/bulkcalculation1099batchitem/README.md#update) - Update a bulk calculation1099 batch item

### [bulkCalculation1099BatchItems](docs/sdks/bulkcalculation1099batchitems/README.md)

* [list](docs/sdks/bulkcalculation1099batchitems/README.md#list) - List bulk calculation1099 batch items

### [bulkCalculation1099Batches](docs/sdks/bulkcalculation1099batches/README.md)

* [list](docs/sdks/bulkcalculation1099batches/README.md#list) - List bulk calculation1099 batches

### [bulkClientBatch](docs/sdks/bulkclientbatch/README.md)

* [create](docs/sdks/bulkclientbatch/README.md#create) - Create a bulk client batch
* [get](docs/sdks/bulkclientbatch/README.md#get) - Get a bulk client batch
* [update](docs/sdks/bulkclientbatch/README.md#update) - Update a bulk client batch

### [bulkClientBatchItem](docs/sdks/bulkclientbatchitem/README.md)

* [create](docs/sdks/bulkclientbatchitem/README.md#create) - Create a bulk client batch item
* [get](docs/sdks/bulkclientbatchitem/README.md#get) - Get a bulk client batch item
* [update](docs/sdks/bulkclientbatchitem/README.md#update) - Update a bulk client batch item

### [bulkClientBatchItems](docs/sdks/bulkclientbatchitems/README.md)

* [list](docs/sdks/bulkclientbatchitems/README.md#list) - List bulk client batch items

### [bulkClientBatches](docs/sdks/bulkclientbatches/README.md)

* [list](docs/sdks/bulkclientbatches/README.md#list) - List bulk client batches

### [bulkCollaboratorBatch](docs/sdks/bulkcollaboratorbatch/README.md)

* [create](docs/sdks/bulkcollaboratorbatch/README.md#create) - Create a bulk collaborator batch
* [get](docs/sdks/bulkcollaboratorbatch/README.md#get) - Get a bulk collaborator batch
* [update](docs/sdks/bulkcollaboratorbatch/README.md#update) - Update a bulk collaborator batch

### [bulkCollaboratorBatchItem](docs/sdks/bulkcollaboratorbatchitem/README.md)

* [create](docs/sdks/bulkcollaboratorbatchitem/README.md#create) - Create a bulk collaborator batch item
* [get](docs/sdks/bulkcollaboratorbatchitem/README.md#get) - Get a bulk collaborator batch item
* [update](docs/sdks/bulkcollaboratorbatchitem/README.md#update) - Update a bulk collaborator batch item

### [bulkCollaboratorBatchItems](docs/sdks/bulkcollaboratorbatchitems/README.md)

* [list](docs/sdks/bulkcollaboratorbatchitems/README.md#list) - List bulk collaborator batch items

### [bulkCollaboratorBatches](docs/sdks/bulkcollaboratorbatches/README.md)

* [list](docs/sdks/bulkcollaboratorbatches/README.md#list) - List bulk collaborator batches

### [bulkInvoiceBatch](docs/sdks/bulkinvoicebatch/README.md)

* [create](docs/sdks/bulkinvoicebatch/README.md#create) - Create a bulk invoice batch
* [get](docs/sdks/bulkinvoicebatch/README.md#get) - Get a bulk invoice batch
* [update](docs/sdks/bulkinvoicebatch/README.md#update) - Update a bulk invoice batch

### [bulkInvoiceBatchItem](docs/sdks/bulkinvoicebatchitem/README.md)

* [create](docs/sdks/bulkinvoicebatchitem/README.md#create) - Create a bulk invoice batch item
* [get](docs/sdks/bulkinvoicebatchitem/README.md#get) - Get a bulk invoice batch item
* [update](docs/sdks/bulkinvoicebatchitem/README.md#update) - Update a bulk invoice batch item

### [bulkInvoiceBatchItems](docs/sdks/bulkinvoicebatchitems/README.md)

* [list](docs/sdks/bulkinvoicebatchitems/README.md#list) - List bulk invoice batch items

### [bulkInvoiceBatches](docs/sdks/bulkinvoicebatches/README.md)

* [list](docs/sdks/bulkinvoicebatches/README.md#list) - List bulk invoice batches

### [bulkPayableBatch](docs/sdks/bulkpayablebatch/README.md)

* [create](docs/sdks/bulkpayablebatch/README.md#create) - Create a bulk payable batch
* [delete](docs/sdks/bulkpayablebatch/README.md#delete) - Delete a bulk payable batch
* [get](docs/sdks/bulkpayablebatch/README.md#get) - Get a bulk payable batch
* [update](docs/sdks/bulkpayablebatch/README.md#update) - Update a bulk payable batch

### [bulkPayableBatchItem](docs/sdks/bulkpayablebatchitem/README.md)

* [create](docs/sdks/bulkpayablebatchitem/README.md#create) - Create a bulk payable batch item
* [get](docs/sdks/bulkpayablebatchitem/README.md#get) - Get a bulk payable batch item
* [update](docs/sdks/bulkpayablebatchitem/README.md#update) - Update a bulk payable batch item

### [bulkPayableBatchItems](docs/sdks/bulkpayablebatchitems/README.md)

* [list](docs/sdks/bulkpayablebatchitems/README.md#list) - List bulk payable batch items

### [bulkPayableBatchSummary](docs/sdks/bulkpayablebatchsummary/README.md)

* [get](docs/sdks/bulkpayablebatchsummary/README.md#get) - Get Bulk Payable Batch Import Summary

### [bulkPayableBatches](docs/sdks/bulkpayablebatches/README.md)

* [list](docs/sdks/bulkpayablebatches/README.md#list) - List bulk payable batches

### [card](docs/sdks/card/README.md)

* [create](docs/sdks/card/README.md#create) - Create card
* [delete](docs/sdks/card/README.md#delete) - Delete a card by cardId
* [get](docs/sdks/card/README.md#get) - Get card by cardId
* [update](docs/sdks/card/README.md#update) - Update card by cardId

### [cards](docs/sdks/cards/README.md)

* [list](docs/sdks/cards/README.md#list) - List cards

### [clientCollaboratorV2](docs/sdks/clientcollaboratorv2/README.md)

* [get](docs/sdks/clientcollaboratorv2/README.md#get) - Get a single V2 Collaborator by clientId

### [clientCollaboratorsV2](docs/sdks/clientcollaboratorsv2/README.md)

* [list](docs/sdks/clientcollaboratorsv2/README.md#list) - Lists all collaborators in the V2 format

### [clientDeduction](docs/sdks/clientdeduction/README.md)

* [create](docs/sdks/clientdeduction/README.md#create) - Create deduction

### [clientDeductionID](docs/sdks/clientdeductionid/README.md)

* [delete](docs/sdks/clientdeductionid/README.md#delete) - Delete deduction
* [get](docs/sdks/clientdeductionid/README.md#get) - Get deduction
* [update](docs/sdks/clientdeductionid/README.md#update) - Update deduction

### [clientDeductions](docs/sdks/clientdeductions/README.md)

* [list](docs/sdks/clientdeductions/README.md#list) - List deductions

### [clientInvoice](docs/sdks/clientinvoice/README.md)

* [get](docs/sdks/clientinvoice/README.md#get) - Get client-invoice by invoiceId
* [update](docs/sdks/clientinvoice/README.md#update) - Update client-invoice by invoiceId

### [clientInvoiceFees](docs/sdks/clientinvoicefees/README.md)

* [create](docs/sdks/clientinvoicefees/README.md#create) - Create client-invoice fees
* [list](docs/sdks/clientinvoicefees/README.md#list) - List client-invoice fees

### [clientInvoiceTemplate](docs/sdks/clientinvoicetemplate/README.md)

* [create](docs/sdks/clientinvoicetemplate/README.md#create) - Create client-invoice-template
* [get](docs/sdks/clientinvoicetemplate/README.md#get) - Get client-invoice-template
* [update](docs/sdks/clientinvoicetemplate/README.md#update) - Update client-invoice-template

### [clientInvoiceTemplates](docs/sdks/clientinvoicetemplates/README.md)

* [list](docs/sdks/clientinvoicetemplates/README.md#list) - List client-invoice-templates

### [clientInvoices](docs/sdks/clientinvoices/README.md)

* [list](docs/sdks/clientinvoices/README.md#list) - List invoices on client

### [codeToToken](docs/sdks/codetotoken/README.md)

* [exchange](docs/sdks/codetotoken/README.md#exchange) - Exchange the code for a token

### [collaborator](docs/sdks/collaborator/README.md)

* [create](docs/sdks/collaborator/README.md#create) - Create new collaborator
* [delete](docs/sdks/collaborator/README.md#delete) - Delete collaborator by Id
* [get](docs/sdks/collaborator/README.md#get) - Get collaborator by Id
* [update](docs/sdks/collaborator/README.md#update) - Update a collaborator by Id

### [collaboratorDeduction](docs/sdks/collaboratordeduction/README.md)

* [create](docs/sdks/collaboratordeduction/README.md#create) - Create deduction
* [delete](docs/sdks/collaboratordeduction/README.md#delete) - Delete deduction
* [get](docs/sdks/collaboratordeduction/README.md#get) - Get deduction
* [update](docs/sdks/collaboratordeduction/README.md#update) - Update deduction

### [collaboratorDeductions](docs/sdks/collaboratordeductions/README.md)

* [list](docs/sdks/collaboratordeductions/README.md#list) - List deductions

### [collaboratorEvents](docs/sdks/collaboratorevents/README.md)

* [get](docs/sdks/collaboratorevents/README.md#get) - Get collaborator events by collaboratorId

### [collaboratorGroup](docs/sdks/collaboratorgroup/README.md)

* [create](docs/sdks/collaboratorgroup/README.md#create) - Create Collaborator Group
* [get](docs/sdks/collaboratorgroup/README.md#get) - Get Collaborator Group
* [update](docs/sdks/collaboratorgroup/README.md#update) - Update Collaborator Group

### [collaboratorGroupEligibilityRequirement](docs/sdks/collaboratorgroupeligibilityrequirement/README.md)

* [delete](docs/sdks/collaboratorgroupeligibilityrequirement/README.md#delete) - Delete Eligibility Requirement
* [replace](docs/sdks/collaboratorgroupeligibilityrequirement/README.md#replace) - Replace Eligibility Requirement

### [collaboratorGroups](docs/sdks/collaboratorgroups/README.md)

* [list](docs/sdks/collaboratorgroups/README.md#list) - List Collaborator Groups

### [collaboratorToGroup](docs/sdks/collaboratortogroup/README.md)

* [add](docs/sdks/collaboratortogroup/README.md#add) - Add collaborator to collaborators group
* [remove](docs/sdks/collaboratortogroup/README.md#remove) - Remove collaborator from collaborators group

### [collaboratorV2](docs/sdks/collaboratorv2/README.md)

* [get](docs/sdks/collaboratorv2/README.md#get) - Get a single V2 Collaborator by memberId

### [collaborators](docs/sdks/collaborators/README.md)

* [list](docs/sdks/collaborators/README.md#list) - List all collaborators

### [collaboratorsDetailsV2](docs/sdks/collaboratorsdetailsv2/README.md)

* [get](docs/sdks/collaboratorsdetailsv2/README.md#get) - Get a list of collaborators and their details

### [collaboratorsV2](docs/sdks/collaboratorsv2/README.md)

* [list](docs/sdks/collaboratorsv2/README.md#list) - Lists all collaborators in the V2 format

### [createdInvoicesByClient](docs/sdks/createdinvoicesbyclient/README.md)

* [list](docs/sdks/createdinvoicesbyclient/README.md#list) - List invoices created by client

### [eligibilityRequirement](docs/sdks/eligibilityrequirement/README.md)

* [create](docs/sdks/eligibilityrequirement/README.md#create) - Create Eligibility Requirement
* [delete](docs/sdks/eligibilityrequirement/README.md#delete) - Delete Eligibility Requirement
* [get](docs/sdks/eligibilityrequirement/README.md#get) - Get Eligibility Requirement
* [update](docs/sdks/eligibilityrequirement/README.md#update) - Update Eligibility Requirement

### [eligibilityRequirements](docs/sdks/eligibilityrequirements/README.md)

* [list](docs/sdks/eligibilityrequirements/README.md#list) - List Eligibility Requirements

### [form1099](docs/sdks/form1099/README.md)

* [download](docs/sdks/form1099/README.md#download) - Downloads a form 1099 PDF for a collaborator

### [formW9](docs/sdks/formw9/README.md)

* [download](docs/sdks/formw9/README.md#download) - Downloads a form W9 PDF for a collaborator

### [instantPayout](docs/sdks/instantpayout/README.md)

* [create](docs/sdks/instantpayout/README.md#create) - Create instant payout details
* [delete](docs/sdks/instantpayout/README.md#delete) - Delete instant payout
* [fetch](docs/sdks/instantpayout/README.md#fetch) - Fetch instant payout details

### [institution](docs/sdks/institution/README.md)

* [get](docs/sdks/institution/README.md#get) - Get Institution By Routing Number

### [invoice](docs/sdks/invoice/README.md)

* [generate](docs/sdks/invoice/README.md#generate) - Generate invoice
* [send](docs/sdks/invoice/README.md#send) - Send invoice

### [invoiceAsClient](docs/sdks/invoiceasclient/README.md)

* [create](docs/sdks/invoiceasclient/README.md#create) - Create invoice as client

### [invoicePayableOnMember](docs/sdks/invoicepayableonmember/README.md)

* [get](docs/sdks/invoicepayableonmember/README.md#get) - Get invoice on member by payableId

### [invoiceTemplate](docs/sdks/invoicetemplate/README.md)

* [create](docs/sdks/invoicetemplate/README.md#create) - Create invoice-template
* [delete](docs/sdks/invoicetemplate/README.md#delete) - Delete invoice-template
* [get](docs/sdks/invoicetemplate/README.md#get) - Get invoice-template
* [update](docs/sdks/invoicetemplate/README.md#update) - Update invoice-template

### [invoiceTemplates](docs/sdks/invoicetemplates/README.md)

* [list](docs/sdks/invoicetemplates/README.md#list) - List invoiceTemplates

### [lineItemsAgingGroup](docs/sdks/lineitemsaginggroup/README.md)

* [get](docs/sdks/lineitemsaginggroup/README.md#get) - Get a list of line items with respective aging group

### [mcc](docs/sdks/mcc/README.md)

* [list](docs/sdks/mcc/README.md#list) - List mcc codes

### [memberClient](docs/sdks/memberclient/README.md)

* [create](docs/sdks/memberclient/README.md#create) - Create memberClient
* [delete](docs/sdks/memberclient/README.md#delete) - Delete memberClient
* [get](docs/sdks/memberclient/README.md#get) - Get Member Client
* [update](docs/sdks/memberclient/README.md#update) - Update memberClient

### [memberClients](docs/sdks/memberclients/README.md)

* [list](docs/sdks/memberclients/README.md#list) - List memberClients

### [memberInvoice](docs/sdks/memberinvoice/README.md)

* [create](docs/sdks/memberinvoice/README.md#create) - Create invoice on member
* [delete](docs/sdks/memberinvoice/README.md#delete) - Delete invoice on member by invoiceId
* [get](docs/sdks/memberinvoice/README.md#get) - Get invoice on member by invoiceId
* [update](docs/sdks/memberinvoice/README.md#update) - Update invoice on member by invoiceId

### [memberInvoices](docs/sdks/memberinvoices/README.md)

* [list](docs/sdks/memberinvoices/README.md#list) - List invoices on member

### [paPayableOnClientyable](docs/sdks/papayableonclientyable/README.md)

* [delete](docs/sdks/papayableonclientyable/README.md#delete) - Delete payable on client by payableId

### [payClientInvoice](docs/sdks/payclientinvoice/README.md)

* [post](docs/sdks/payclientinvoice/README.md#post) - Pay client-invoice

### [payableOnClient](docs/sdks/payableonclient/README.md)

* [create](docs/sdks/payableonclient/README.md#create) - Create payable on client for member
* [update](docs/sdks/payableonclient/README.md#update) - Update payable on client by payableId

### [payables](docs/sdks/payables/README.md)

* [get](docs/sdks/payables/README.md#get) - Get payables summary

### [payablesAgingGroup](docs/sdks/payablesaginggroup/README.md)

* [get](docs/sdks/payablesaginggroup/README.md#get) - Get a list of payables with respective aging group

### [payablesPayroll](docs/sdks/payablespayroll/README.md)

* [list](docs/sdks/payablespayroll/README.md#list) - Get a list of payables connected to payroll run

### [paymentEligibilityRequirement](docs/sdks/paymenteligibilityrequirement/README.md)

* [create](docs/sdks/paymenteligibilityrequirement/README.md#create) - Create Payment Eligibility Requirement
* [delete](docs/sdks/paymenteligibilityrequirement/README.md#delete) - Delete Payment Eligibility Requirement
* [get](docs/sdks/paymenteligibilityrequirement/README.md#get) - Get Payment Eligibility Requirement
* [update](docs/sdks/paymenteligibilityrequirement/README.md#update) - Update Payment Eligibility Requirement

### [paymentEligibilityRequirements](docs/sdks/paymenteligibilityrequirements/README.md)

* [list](docs/sdks/paymenteligibilityrequirements/README.md#list) - List Payment Eligigbility Requirements

### [payoutDebitCard](docs/sdks/payoutdebitcard/README.md)

* [create](docs/sdks/payoutdebitcard/README.md#create) - Create a payout debit card
* [delete](docs/sdks/payoutdebitcard/README.md#delete) - Delete the payout debit card
* [get](docs/sdks/payoutdebitcard/README.md#get) - Get the payout debit card

### [payoutDebitCards](docs/sdks/payoutdebitcards/README.md)

* [list](docs/sdks/payoutdebitcards/README.md#list) - List the payout debit cards

### [payoutSettings](docs/sdks/payoutsettings/README.md)

* [get](docs/sdks/payoutsettings/README.md#get) - Get the payout settings
* [update](docs/sdks/payoutsettings/README.md#update) - Update the payout settings

### [payroll](docs/sdks/payroll/README.md)

* [execute](docs/sdks/payroll/README.md#execute) - Execute payroll

### [payrollSettings](docs/sdks/payrollsettings/README.md)

* [get](docs/sdks/payrollsettings/README.md#get) - Get payroll settings
* [update](docs/sdks/payrollsettings/README.md#update) - Update payroll settings

### [serviceStatus](docs/sdks/servicestatus/README.md)

* [get](docs/sdks/servicestatus/README.md#get) - Get Service Status

### [statement](docs/sdks/statement/README.md)

* [download](docs/sdks/statement/README.md#download) - Download bank statement pdf
* [get](docs/sdks/statement/README.md#get) - Get bank statement

### [verification](docs/sdks/verification/README.md)

* [send](docs/sdks/verification/README.md#send) - Sends a verification code
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
