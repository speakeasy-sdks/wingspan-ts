# PayableOnClient
(*payableOnClient*)

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
    PayableCreateRequestAcceptedPaymentMethods.Ach,
  ],
  attachments: "Configuration",
  client: "innovative",
  collaboratorId: "Cambridgeshire grey technology",
  creditFeeHandling: {
    clientAbsolutePercentage: 0.86,
    clientPays: 4552.22,
    memberPays: 1697.27,
  },
  currency: CurrencyPayableCreateRequest.Usd,
  dueDate: "male",
  integration: {
    quickbooks: {
      expenseAccountId: "Screen mobile",
      itemId: "Ameliorated Fresh",
    },
  },
  invoiceNotes: "overriding",
  labels: "Fish",
  lateFeeHandling: "Fiat",
  lineItems: [
    {
      costPerUnit: 8946.95,
      description: "Digitized fresh-thinking approach",
      detail: "Northwest Direct",
      discount: "animated",
      integration: {
        quickbooks: {
          expenseAccountId: "Senior Mouse West",
          itemId: "Towels likewise",
        },
      },
      labels: "Praseodymium",
      quantity: 7757.87,
      reimbursableExpense: "woman",
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
  status: StatusPayableCreateRequest.Cancelled,
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
const id: string = "Van";
const payableUpdateRequest: PayableUpdateRequest = {
  acceptedPaymentMethods: [
    PayableUpdateRequestAcceptedPaymentMethods.Credit,
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
  paymentMethods: [
    PayableUpdateRequestPaymentMethods.Ach,
  ],
  status: StatusPayableUpdateRequest.Pending,
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

