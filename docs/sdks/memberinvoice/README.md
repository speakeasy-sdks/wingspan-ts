# memberInvoice

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
  attachments: {
    customAttachmentIds: [
      "consequuntur",
    ],
  },
  client: "minus",
  collaborators: [
    "sapiente",
  ],
  creditFeeHandling: {
    clientAbsolutePercentage: 2328.65,
    clientPays: 4581.39,
    memberPays: 5034.27,
  },
  currency: CurrencyInvoiceCreateRequest.Cad,
  dueDate: "a",
  integration: {
    quickbooks: {
      expenseAccountId: "esse",
      itemId: "quasi",
    },
  },
  invoiceNotes: "a",
  labels: {
    "sint": "pariatur",
  },
  lateFeeHandling: {
    frequency: "eveniet",
    lateFeeAmount: 9924.3,
    lateFeePercentage: 8155.24,
  },
  lineItems: [
    {
      costPerUnit: 850.01,
      description: "consequuntur",
      detail: "quasi",
      discount: {
        amount: 6336.08,
        description: "aliquid",
        percentage: 9492.98,
      },
      integration: "earum",
      labels: "in",
      quantity: 2586.84,
      reimbursableExpense: false,
      totalCost: 8490.39,
      unit: "soluta",
    },
  ],
  member: "aliquam",
  memberClientId: "sapiente",
  metadata: "ullam",
  notificationPreferences: "ullam",
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
const id: string = "aut";

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
const id: string = "voluptatum";

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
const id: string = "qui";
const invoiceUpdateRequest: InvoiceUpdateRequest = {
  acceptedPaymentMethods: [
    InvoiceUpdateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  attachments: "deleniti",
  chargedFees: {
    lateFee: {
      amount: 996.15,
      calculatedAt: "omnis",
    },
    processingFee: {
      amount: 984.78,
      calculatedAt: "at",
    },
  },
  client: "voluptate",
  collaborators: [
    "minima",
  ],
  creditFeeHandling: "consectetur",
  dueDate: "adipisci",
  integration: {
    quickbooks: {
      expenseAccountId: "accusantium",
      itemId: "rem",
    },
  },
  invoiceNotes: "aut",
  labels: {
    "eum": "mollitia",
  },
  lateFeeHandling: "corrupti",
  lineItems: [
    "voluptatem",
  ],
  member: "occaecati",
  memberClientId: "numquam",
  metadata: {
    purchaseOrderNumber: "explicabo",
  },
  notificationPreferences: "aut",
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

