# MemberInvoice

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
    InvoiceCreateRequestAcceptedPaymentMethods.Credit,
  ],
  attachments: "totam",
  client: {},
  collaborators: [
    "odio",
  ],
  creditFeeHandling: {
    clientAbsolutePercentage: 5775.43,
    clientPays: 4145.67,
    memberPays: 9594.34,
  },
  currency: CurrencyInvoiceCreateRequest.Usd,
  dueDate: "deserunt",
  integration: "accusantium",
  invoiceNotes: "porro",
  labels: "quas",
  lateFeeHandling: {
    frequency: "deleniti",
    lateFeeAmount: 1438.29,
    lateFeePercentage: 6813.93,
  },
  lineItems: [
    {
      costPerUnit: 6494.63,
      description: "incidunt",
      detail: "atque",
      discount: "minima",
      integration: "fugit",
      labels: {
        "consequuntur": "ratione",
      },
      quantity: 1294.12,
      reimbursableExpense: false,
      totalCost: 5789.22,
      unit: "atque",
    },
  ],
  member: "esse",
  memberClientId: "eveniet",
  metadata: {
    purchaseOrderNumber: "veritatis",
  },
  notificationPreferences: "quod",
  status: StatusInvoiceCreateRequest.PaymentInTransit,
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
const id: string = "vero";

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
const id: string = "aliquid";

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
const id: string = "quasi";
const invoiceUpdateRequest: InvoiceUpdateRequest = {
  acceptedPaymentMethods: [
    InvoiceUpdateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  attachments: "harum",
  chargedFees: "rerum",
  client: {},
  collaborators: [
    "distinctio",
  ],
  creditFeeHandling: {
    clientAbsolutePercentage: 270.69,
    clientPays: 6360.61,
    memberPays: 7313.98,
  },
  dueDate: "adipisci",
  integration: {
    quickbooks: "consequatur",
  },
  invoiceNotes: "minus",
  labels: "sapiente",
  lateFeeHandling: "esse",
  lineItems: [
    {
      costPerUnit: 5909.84,
      description: "a",
      detail: "nulla",
      discount: {
        amount: 4572.23,
        description: "quasi",
        percentage: 9518.75,
      },
      integration: {
        quickbooks: {
          expenseAccountId: "pariatur",
          itemId: "possimus",
        },
      },
      labels: "eveniet",
      quantity: 9924.3,
      reimbursableExpense: false,
      totalCost: 850.01,
      unit: "consequuntur",
    },
  ],
  member: "similique",
  memberClientId: "culpa",
  metadata: "tenetur",
  notificationPreferences: "earum",
  status: StatusInvoiceUpdateRequest.Cancelled,
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

