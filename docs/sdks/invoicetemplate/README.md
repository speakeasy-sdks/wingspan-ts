# invoiceTemplate

### Available Operations

* [create](#create) - Create invoice-template
* [delete](#delete) - Delete invoice-template
* [get](#get) - Get invoice-template
* [update](#update) - Update invoice-template

## create

Create invoice-template

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateInvoiceTemplateResponse } from "openapi/dist/sdk/models/operations";
import {
  CurrencyInvoiceCollaboratorCreateRequest,
  CurrencyInvoiceDataCreateRequest,
  IntervalFrequency,
  InvoiceDataCreateRequestAcceptedPaymentMethods,
  StatusInvoiceDataCreateRequest,
  StatusInvoiceTemplateCreateRequest,
  StatusScheduleDate,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.invoiceTemplate.create({
  dueInDays: 2940.76,
  frequency: "voluptate",
  invoiceData: {
    acceptedPaymentMethods: [
      InvoiceDataCreateRequestAcceptedPaymentMethods.Credit,
    ],
    attachments: "neque",
    collaborators: [
      {
        amount: 5354.68,
        currency: CurrencyInvoiceCollaboratorCreateRequest.Cad,
        description: "iure",
        memberClientId: "odit",
      },
    ],
    creditFeeHandling: {
      clientAbsolutePercentage: 4269.04,
      clientPays: 3008.24,
      memberPays: 8428.55,
    },
    currency: CurrencyInvoiceDataCreateRequest.Usd,
    dueDate: "facere",
    invoiceNotes: "libero",
    labels: "voluptatibus",
    lateFeeHandling: "porro",
    lineItems: [
      {
        costPerUnit: 3041.98,
        description: "velit",
        detail: "illo",
        discount: "vel",
        integration: "beatae",
        labels: {
          "excepturi": "eum",
        },
        quantity: 2465.57,
        reimbursableExpense: "perspiciatis",
        totalCost: 9353.02,
        unit: "dicta",
      },
    ],
    memberClientId: "impedit",
    notificationPreferences: {
      sendInvoice: false,
      sendReceipt: false,
      sendReminders: false,
    },
    status: StatusInvoiceDataCreateRequest.Draft,
  },
  isSchedulingOnly: "itaque",
  labels: "laborum",
  scheduleDates: [
    "dolor",
  ],
  sendEmails: "sit",
  status: StatusInvoiceTemplateCreateRequest.Active,
}).then((res: CreateInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.InvoiceTemplateCreateRequest](../../models/shared/invoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateInvoiceTemplateResponse](../../models/operations/createinvoicetemplateresponse.md)>**


## delete

Delete invoice-template

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeleteInvoiceTemplateResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.invoiceTemplate.delete({
  id: "0ae6b6bc-9b8f-4759-aac5-5a9741d31135",
}).then((res: DeleteInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeleteInvoiceTemplateRequest](../../models/operations/deleteinvoicetemplaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeleteInvoiceTemplateResponse](../../models/operations/deleteinvoicetemplateresponse.md)>**


## get

Get invoice-template

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetInvoiceTemplateResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.invoiceTemplate.get({
  id: "2965bb8a-7202-4611-835e-139dbc2259b1",
}).then((res: GetInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetInvoiceTemplateRequest](../../models/operations/getinvoicetemplaterequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetInvoiceTemplateResponse](../../models/operations/getinvoicetemplateresponse.md)>**


## update

Update invoice-template

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateInvoiceTemplateResponse } from "openapi/dist/sdk/models/operations";
import {
  IntervalFrequencyUpdate,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  StatusInvoiceTemplateUpdateRequest,
  StatusInvoiceUpdateRequest,
  StatusScheduleDateUpdate,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.invoiceTemplate.update({
  invoiceTemplateUpdateRequest: {
    accountId: "id",
    autoPaymentRequired: false,
    dueInDays: 8544.6,
    frequency: {
      daily: false,
      dayInInterval: 8119.39,
      endDate: "sit",
      every: 4793.85,
      interval: IntervalFrequencyUpdate.Week,
      startDate: "voluptates",
      twicePerMonth: "aperiam",
    },
    invoiceData: {
      acceptedPaymentMethods: [
        InvoiceUpdateRequestAcceptedPaymentMethods.Ach,
      ],
      attachments: {
        customAttachmentIds: [
          "distinctio",
        ],
      },
      chargedFees: "autem",
      client: "dolores",
      collaborators: [
        {
          amount: 1072.1,
          description: "est",
        },
      ],
      creditFeeHandling: {
        clientAbsolutePercentage: 5459.18,
        clientPays: 4731.43,
        memberPays: 5888.12,
      },
      dueDate: "accusamus",
      integration: {
        quickbooks: {
          expenseAccountId: "sint",
          itemId: "ea",
        },
      },
      invoiceNotes: "autem",
      labels: "rerum",
      lateFeeHandling: {
        frequency: "officiis",
        lateFeeAmount: 9729.12,
        lateFeePercentage: 7372.79,
      },
      lineItems: [
        {
          costPerUnit: 51.52,
          description: "quia",
          detail: "quidem",
          discount: {
            amount: 9195.08,
            description: "accusantium",
            percentage: 7104.56,
          },
          integration: {
            quickbooks: "quibusdam",
          },
          labels: "praesentium",
          quantity: 1403.16,
          reimbursableExpense: "corporis",
          totalCost: 6214.73,
          unit: "earum",
        },
      ],
      member: "recusandae",
      memberClientId: "similique",
      metadata: "quidem",
      notificationPreferences: "beatae",
      status: StatusInvoiceUpdateRequest.Pending,
    },
    isSchedulingOnly: "delectus",
    labels: {
      "fugit": "numquam",
    },
    paymentMethodId: "numquam",
    scheduleDates: [
      "at",
    ],
    sendEmails: false,
    status: StatusInvoiceTemplateUpdateRequest.Expired,
  },
  id: "ce52b895-c537-4c64-94ef-b0b34896c3ca",
}).then((res: UpdateInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateInvoiceTemplateRequest](../../models/operations/updateinvoicetemplaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateInvoiceTemplateResponse](../../models/operations/updateinvoicetemplateresponse.md)>**

