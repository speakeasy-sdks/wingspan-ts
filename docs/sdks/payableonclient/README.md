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
    PayableCreateRequestAcceptedPaymentMethods.Ach,
  ],
  attachments: {
    customAttachmentIds: [
      "aperiam",
    ],
  },
  client: "quaerat",
  collaboratorId: "consequuntur",
  creditFeeHandling: {
    clientAbsolutePercentage: 8315.2,
    clientPays: 6387.62,
    memberPays: 8070.23,
  },
  currency: CurrencyPayableCreateRequest.Cad,
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
      costPerUnit: 6835.73,
      description: "id",
      detail: "suscipit",
      discount: "culpa",
      integration: {
        quickbooks: {
          expenseAccountId: "totam",
          itemId: "fugiat",
        },
      },
      labels: "ducimus",
      quantity: 5546.88,
      reimbursableExpense: "labore",
      totalCost: 8225.6,
      unit: "facilis",
    },
  ],
  member: {},
  memberClientId: "commodi",
  metadata: "corporis",
  notificationPreferences: {
    sendInvoice: false,
    sendReceipt: "recusandae",
    sendReminders: false,
  },
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
const id: string = "aperiam";
const payableUpdateRequest: PayableUpdateRequest = {
  acceptedPaymentMethods: [
    PayableUpdateRequestAcceptedPaymentMethods.Manual,
  ],
  attachments: "in",
  chargedFees: "earum",
  client: {},
  collaborators: [
    "doloribus",
  ],
  creditFeeHandling: "reiciendis",
  dueDate: "quidem",
  integration: {
    quickbooks: {
      expenseAccountId: "dolore",
      itemId: "sunt",
    },
  },
  invoiceNotes: "asperiores",
  labels: "non",
  lateFeeHandling: "beatae",
  lineItems: [
    "a",
  ],
  member: {},
  memberClientId: "consectetur",
  metadata: "harum",
  notificationPreferences: "ipsa",
  paymentMethods: [
    PayableUpdateRequestPaymentMethods.LessThanNilGreaterThan,
  ],
  status: StatusPayableUpdateRequest.PaymentInTransit,
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

