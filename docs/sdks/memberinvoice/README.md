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
import { Wingspan } from "openapi";
import { CreateMemberInvoiceResponse } from "openapi/dist/sdk/models/operations";
import {
  CurrencyInvoiceCollaboratorCreateRequest,
  CurrencyInvoiceCreateRequest,
  IntervalFrequencyUpdate,
  InvoiceCreateRequestAcceptedPaymentMethods,
  StatusInvoiceCreateRequest,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.memberInvoice.create({
  acceptedPaymentMethods: [
    InvoiceCreateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  attachments: {
    customAttachmentIds: [
      "unde",
    ],
  },
  client: {},
  collaborators: [
    "dolor",
  ],
  creditFeeHandling: {
    clientAbsolutePercentage: 1180.41,
    clientPays: 6228.94,
    memberPays: 7847.31,
  },
  currency: CurrencyInvoiceCreateRequest.Usd,
  dueDate: "dignissimos",
  integration: "fugiat",
  invoiceNotes: "ad",
  labels: "enim",
  lateFeeHandling: {
    frequency: "dignissimos",
    lateFeeAmount: 7298.28,
    lateFeePercentage: 723.5,
  },
  lineItems: [
    {
      costPerUnit: 691.82,
      description: "incidunt",
      detail: "accusamus",
      discount: {
        amount: 7348.14,
        description: "veniam",
        percentage: 1764.99,
      },
      integration: {
        quickbooks: {
          expenseAccountId: "reprehenderit",
          itemId: "praesentium",
        },
      },
      labels: "repellat",
      quantity: 7897.7,
      reimbursableExpense: "nihil",
      totalCost: 5349.08,
      unit: "illo",
    },
  ],
  member: "assumenda",
  memberClientId: "aliquam",
  metadata: {
    purchaseOrderNumber: "provident",
  },
  notificationPreferences: {
    sendInvoice: false,
    sendReceipt: "maxime",
    sendReminders: false,
  },
  status: StatusInvoiceCreateRequest.Open,
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
import { Wingspan } from "openapi";
import { DeleteMemberInvoiceResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.memberInvoice.delete({
  id: "bb89eb75-dad6-436c-a005-03d8bb31180f",
}).then((res: DeleteMemberInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.DeleteMemberInvoiceRequest](../../models/operations/deletememberinvoicerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.DeleteMemberInvoiceResponse](../../models/operations/deletememberinvoiceresponse.md)>**


## get

Get invoice on member by invoiceId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetMemberInvoiceResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.memberInvoice.get({
  id: "739ae9e0-57eb-4809-a281-0331f3981d4c",
}).then((res: GetMemberInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetMemberInvoiceRequest](../../models/operations/getmemberinvoicerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetMemberInvoiceResponse](../../models/operations/getmemberinvoiceresponse.md)>**


## update

Update invoice on member by invoiceId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateMemberInvoiceResponse } from "openapi/dist/sdk/models/operations";
import {
  IntervalFrequencyUpdate,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  StatusInvoiceUpdateRequest,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.memberInvoice.update({
  invoiceUpdateRequest: {
    acceptedPaymentMethods: [
      InvoiceUpdateRequestAcceptedPaymentMethods.Ach,
    ],
    attachments: "perferendis",
    chargedFees: {
      lateFee: "aperiam",
      processingFee: "repellat",
    },
    client: "porro",
    collaborators: [
      {
        amount: 2313.82,
        description: "eligendi",
      },
    ],
    creditFeeHandling: "consectetur",
    dueDate: "soluta",
    integration: {
      quickbooks: {
        expenseAccountId: "officia",
        itemId: "amet",
      },
    },
    invoiceNotes: "tenetur",
    labels: "quo",
    lateFeeHandling: {
      frequency: {
        daily: false,
        dayInInterval: 4904.2,
        endDate: "vero",
        every: 1853.48,
        interval: IntervalFrequencyUpdate.Week,
        startDate: "repellat",
        twicePerMonth: "explicabo",
      },
      lateFeeAmount: 3503.25,
      lateFeePercentage: 4714.57,
    },
    lineItems: [
      "ab",
    ],
    member: "hic",
    memberClientId: "deserunt",
    metadata: {
      purchaseOrderNumber: "non",
    },
    notificationPreferences: {
      sendInvoice: "exercitationem",
      sendReceipt: "numquam",
      sendReminders: false,
    },
    status: StatusInvoiceUpdateRequest.LessThanNilGreaterThan,
  },
  id: "472e8028-57a5-4b40-863a-7d575f1400e7",
}).then((res: UpdateMemberInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateMemberInvoiceRequest](../../models/operations/updatememberinvoicerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateMemberInvoiceResponse](../../models/operations/updatememberinvoiceresponse.md)>**

