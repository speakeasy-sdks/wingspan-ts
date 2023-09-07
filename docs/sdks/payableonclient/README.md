# payableOnClient

### Available Operations

* [create](#create) - Create payable on client for member
* [update](#update) - Update payable on client by payableId

## create

Create payable on client for member

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreatePayableOnClientResponse } from "openapi/dist/sdk/models/operations";
import {
  CurrencyPayableCreateRequest,
  IntervalFrequencyUpdate,
  PayableCreateRequestAcceptedPaymentMethods,
  StatusPayableCreateRequest,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.payableOnClient.create({
  acceptedPaymentMethods: [
    PayableCreateRequestAcceptedPaymentMethods.Credit,
  ],
  attachments: {
    customAttachmentIds: [
      "hic",
    ],
  },
  client: "incidunt",
  collaboratorId: "qui",
  creditFeeHandling: {
    clientAbsolutePercentage: 1858.97,
    clientPays: 8959.12,
    memberPays: 6915.08,
  },
  currency: CurrencyPayableCreateRequest.Usd,
  dueDate: "beatae",
  integration: "modi",
  invoiceNotes: "optio",
  labels: {
    "molestias": "officia",
  },
  lateFeeHandling: {
    frequency: {
      daily: "aliquid",
      dayInInterval: 4120.52,
      endDate: "impedit",
      every: 4983.88,
      interval: IntervalFrequencyUpdate.Week,
      startDate: "velit",
      twicePerMonth: false,
    },
    lateFeeAmount: 9979.18,
    lateFeePercentage: 8611.23,
  },
  lineItems: [
    {
      costPerUnit: 6711.16,
      description: "natus",
      detail: "accusamus",
      discount: "nisi",
      integration: {
        quickbooks: {
          expenseAccountId: "voluptates",
          itemId: "non",
        },
      },
      labels: {
        "quia": "ullam",
      },
      quantity: 7868.6,
      reimbursableExpense: "voluptatibus",
      totalCost: 7549.01,
      unit: "quae",
    },
  ],
  member: {},
  memberClientId: "architecto",
  metadata: "enim",
  notificationPreferences: {
    sendInvoice: false,
    sendReceipt: "facilis",
    sendReminders: false,
  },
  status: StatusPayableCreateRequest.LessThanNilGreaterThan,
}).then((res: CreatePayableOnClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.PayableCreateRequest](../../models/shared/payablecreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreatePayableOnClientResponse](../../models/operations/createpayableonclientresponse.md)>**


## update

Update payable on client by payableId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdatePayableOnClientResponse } from "openapi/dist/sdk/models/operations";
import {
  IntervalFrequencyUpdate,
  PayableUpdateRequestAcceptedPaymentMethods,
  PayableUpdateRequestPaymentMethods,
  StatusPayableUpdateRequest,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.payableOnClient.update({
  payableUpdateRequest: {
    acceptedPaymentMethods: [
      PayableUpdateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
    ],
    attachments: {
      customAttachmentIds: [
        "dicta",
      ],
    },
    chargedFees: {
      lateFee: "dolore",
      processingFee: "itaque",
    },
    client: {},
    collaborators: [
      "consequuntur",
    ],
    creditFeeHandling: {
      clientAbsolutePercentage: 8768.4,
      clientPays: 9851.09,
      memberPays: 7737.11,
    },
    dueDate: "porro",
    integration: {
      quickbooks: {
        expenseAccountId: "reiciendis",
        itemId: "ab",
      },
    },
    invoiceNotes: "sint",
    labels: "esse",
    lateFeeHandling: "odio",
    lineItems: [
      "debitis",
    ],
    member: "neque",
    memberClientId: "corporis",
    metadata: "consequuntur",
    notificationPreferences: {
      sendInvoice: "distinctio",
      sendReceipt: "ipsa",
      sendReminders: false,
    },
    paymentMethods: [
      PayableUpdateRequestPaymentMethods.Manual,
    ],
    status: StatusPayableUpdateRequest.LessThanNilGreaterThan,
  },
  id: "05e3d48f-daf3-413a-9f5f-d94259c0b36f",
}).then((res: UpdatePayableOnClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdatePayableOnClientRequest](../../models/operations/updatepayableonclientrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdatePayableOnClientResponse](../../models/operations/updatepayableonclientresponse.md)>**

