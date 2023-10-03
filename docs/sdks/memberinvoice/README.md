# MemberInvoice
(*memberInvoice*)

### Available Operations

* [create](#create) - Create invoice on member
* [delete](#delete) - Delete invoice on member by invoiceId
* [get](#get) - Get invoice on member by invoiceId
* [update](#update) - Update invoice on member by invoiceId

## create

Create invoice on member

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateMemberInvoiceResponse } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyInvoiceCollaboratorCreateRequest,
  CurrencyInvoiceCreateRequest,
  IntervalFrequencyUpdate,
  InvoiceCreateRequestAcceptedPaymentMethods,
  StatusInvoiceCreateRequest,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.memberInvoice.create({
  acceptedPaymentMethods: [
    InvoiceCreateRequestAcceptedPaymentMethods.Ach,
  ],
  attachments: "Configuration",
  client: "innovative",
  collaborators: [
    {
      amount: 690.25,
      currency: CurrencyInvoiceCollaboratorCreateRequest.Cad,
      description: "Secured exuding throughput",
      memberClientId: "East orange Northwest",
    },
  ],
  creditFeeHandling: {
    clientAbsolutePercentage: 7926.2,
    clientPays: 8559.52,
    memberPays: 8165.88,
  },
  currency: CurrencyInvoiceCreateRequest.Cad,
  dueDate: "Polestar mobile",
  integration: {
    quickbooks: "Durham",
  },
  invoiceNotes: "South Intelligent Fish",
  labels: "Fiat",
  lateFeeHandling: {
    frequency: "Account",
    lateFeeAmount: 1009.66,
    lateFeePercentage: 3577.62,
  },
  lineItems: [
    {
      costPerUnit: 6519.85,
      description: "Customer-focused encompassing standardization",
      detail: "Minivan",
      discount: {
        amount: 6502.37,
        description: "Cloned cohesive challenge",
        percentage: 155.52,
      },
      integration: {
        quickbooks: {
          expenseAccountId: "Edinburg Investor",
          itemId: "azure Dollar",
        },
      },
      labels: "Bicycle",
      quantity: 7823.67,
      reimbursableExpense: false,
      totalCost: 1373.24,
      unit: "radian",
    },
  ],
  member: {},
  memberClientId: "mmm lavender City",
  metadata: {
    purchaseOrderNumber: "incompatible overhang",
  },
  notificationPreferences: "South",
  status: StatusInvoiceCreateRequest.Cancelled,
}).then((res: CreateMemberInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.InvoiceCreateRequest](../../models/shared/invoicecreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateMemberInvoiceResponse](../../models/operations/creatememberinvoiceresponse.md)>**


## delete

Delete invoice on member by invoiceId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteMemberInvoiceRequest, DeleteMemberInvoiceResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "program";

sdk.memberInvoice.delete(id).then((res: DeleteMemberInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteMemberInvoiceResponse](../../models/operations/deletememberinvoiceresponse.md)>**


## get

Get invoice on member by invoiceId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetMemberInvoiceRequest, GetMemberInvoiceResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "female";

sdk.memberInvoice.get(id).then((res: GetMemberInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetMemberInvoiceResponse](../../models/operations/getmemberinvoiceresponse.md)>**


## update

Update invoice on member by invoiceId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateMemberInvoiceRequest, UpdateMemberInvoiceResponse } from "wingspan/dist/sdk/models/operations";
import {
  Facb8048736dba546c4c76242d9f8c7111011a7a7483528f37d80226698a1f2b,
  Fee,
  FeeHandlingConfig,
  Fees,
  FrequencyUpdate,
  IntervalFrequencyUpdate,
  InvoiceCollaboratorUpdateRequest,
  InvoiceLineItemsCreateRequest,
  InvoiceMetadata,
  InvoiceNotificationPreferences,
  InvoiceUpdateRequest,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  InvoiceUpdateRequestClient2,
  InvoiceUpdateRequestMember2,
  LateFeeConfigUpdate,
  Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d,
  StatusInvoiceUpdateRequest,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "Van";
const invoiceUpdateRequest: InvoiceUpdateRequest = {
  acceptedPaymentMethods: [
    InvoiceUpdateRequestAcceptedPaymentMethods.Credit,
  ],
  attachments: "male",
  chargedFees: "Quality",
  client: "invoice",
  collaborators: [
    "Islands",
  ],
  creditFeeHandling: "withdrawal",
  dueDate: "white",
  integration: "Carolina",
  invoiceNotes: "immediately implement JBOD",
  labels: {
    "similique": "Representative",
  },
  lateFeeHandling: "driver",
  lineItems: [
    "pascal",
  ],
  member: {},
  memberClientId: "Lev Wooden",
  metadata: "Jaguar",
  notificationPreferences: {
    sendInvoice: "brightly",
    sendReceipt: false,
    sendReminders: false,
  },
  status: StatusInvoiceUpdateRequest.Overdue,
};

sdk.memberInvoice.update(id, invoiceUpdateRequest).then((res: UpdateMemberInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier                                                          |
| `invoiceUpdateRequest`                                                     | [shared.InvoiceUpdateRequest](../../models/shared/invoiceupdaterequest.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdateMemberInvoiceResponse](../../models/operations/updatememberinvoiceresponse.md)>**

