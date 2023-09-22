# PayableOnClient

### Available Operations

* [create](#create) - Create payable on client for member
* [update](#update) - Update payable on client by payableId

## create

Create payable on client for member

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreatePayableOnClientResponse } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyPayableCreateRequest,
  IntervalFrequencyUpdate,
  PayableCreateRequestAcceptedPaymentMethods,
  StatusPayableCreateRequest,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.payableOnClient.create({
  acceptedPaymentMethods: [
    PayableCreateRequestAcceptedPaymentMethods.Credit,
  ],
  attachments: "sapiente",
  client: "ullam",
  collaboratorId: "reprehenderit",
  creditFeeHandling: {
    clientAbsolutePercentage: 3567.07,
    clientPays: 3917.74,
    memberPays: 163.28,
  },
  currency: CurrencyPayableCreateRequest.Cad,
  dueDate: "qui",
  integration: {
    quickbooks: "deleniti",
  },
  invoiceNotes: "itaque",
  labels: {
    "architecto": "omnis",
  },
  lateFeeHandling: {
    frequency: "at",
    lateFeeAmount: 920.27,
    lateFeePercentage: 4541.62,
  },
  lineItems: [
    {
      costPerUnit: 559.65,
      description: "minima",
      detail: "veritatis",
      discount: "adipisci",
      integration: {
        quickbooks: {
          expenseAccountId: "accusantium",
          itemId: "rem",
        },
      },
      labels: "laudantium",
      quantity: 4287.96,
      reimbursableExpense: false,
      totalCost: 680.74,
      unit: "corrupti",
    },
  ],
  member: "voluptatem",
  memberClientId: "dolor",
  metadata: {
    purchaseOrderNumber: "numquam",
  },
  notificationPreferences: {
    sendInvoice: "voluptas",
    sendReceipt: "dignissimos",
    sendReminders: false,
  },
  status: StatusPayableCreateRequest.Draft,
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
import { Wingspan } from "wingspan";
import { UpdatePayableOnClientRequest, UpdatePayableOnClientResponse } from "wingspan/dist/sdk/models/operations";
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
  LateFeeConfigUpdate,
  PayableUpdateRequest,
  PayableUpdateRequestAcceptedPaymentMethods,
  PayableUpdateRequestClient2,
  PayableUpdateRequestMember2,
  PayableUpdateRequestPaymentMethods,
  Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d,
  StatusPayableUpdateRequest,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "maiores";
const payableUpdateRequest: PayableUpdateRequest = {
  acceptedPaymentMethods: [
    PayableUpdateRequestAcceptedPaymentMethods.Manual,
  ],
  attachments: "voluptatibus",
  chargedFees: "asperiores",
  client: "ea",
  collaborators: [
    "consequuntur",
  ],
  creditFeeHandling: {
    clientAbsolutePercentage: 6387.62,
    clientPays: 8070.23,
    memberPays: 4903.05,
  },
  dueDate: "officia",
  integration: {
    quickbooks: "quae",
  },
  invoiceNotes: "quaerat",
  labels: {
    "quod": "labore",
  },
  lateFeeHandling: "adipisci",
  lineItems: [
    {
      costPerUnit: 6625.05,
      description: "suscipit",
      detail: "velit",
      discount: {
        amount: 6658.59,
        description: "recusandae",
        percentage: 5173.09,
      },
      integration: {
        quickbooks: "ducimus",
      },
      labels: {
        "vel": "labore",
      },
      quantity: 8225.6,
      reimbursableExpense: false,
      totalCost: 7382.27,
      unit: "commodi",
    },
  ],
  member: "corporis",
  memberClientId: "reiciendis",
  metadata: {
    purchaseOrderNumber: "nemo",
  },
  notificationPreferences: {
    sendInvoice: "aperiam",
    sendReceipt: false,
    sendReminders: false,
  },
  paymentMethods: [
    PayableUpdateRequestPaymentMethods.Credit,
  ],
  status: StatusPayableUpdateRequest.Cancelled,
};

sdk.payableOnClient.update(id, payableUpdateRequest).then((res: UpdatePayableOnClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier                                                          |
| `payableUpdateRequest`                                                     | [shared.PayableUpdateRequest](../../models/shared/payableupdaterequest.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdatePayableOnClientResponse](../../models/operations/updatepayableonclientresponse.md)>**

