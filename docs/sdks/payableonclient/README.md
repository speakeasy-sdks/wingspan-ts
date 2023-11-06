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
import {
  CurrencyPayableCreateRequest,
  IntervalFrequencyUpdate,
  PayableCreateRequestAcceptedPaymentMethods,
  StatusPayableCreateRequest,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.payableOnClient.create({
    acceptedPaymentMethods: [
      PayableCreateRequestAcceptedPaymentMethods.Ach,
    ],
    attachments: {
      customAttachmentIds: [
        "string",
      ],
    },
    client: {},
    collaboratorId: "string",
    creditFeeHandling: {},
    dueDate: "string",
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
    lateFeeHandling: {
      frequency: {},
    },
    lineItems: [
      {
        discount: {},
        integration: {
          quickbooks: {},
        },
        labels: {
          "key": "string",
        },
      },
    ],
    member: {},
    metadata: {},
    notificationPreferences: {
      sendReminders: false,
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UpdatePayableOnClientRequest } from "wingspan/dist/sdk/models/operations";
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
  PayableUpdateRequestClient,
  PayableUpdateRequestMember,
  PayableUpdateRequestPaymentMethods,
  Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d,
  StatusPayableUpdateRequest,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const payableUpdateRequest: PayableUpdateRequest = {
  acceptedPaymentMethods: [
    PayableUpdateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  attachments: {
    customAttachmentIds: [
      "string",
    ],
  },
  chargedFees: {
    lateFee: {
      amount: 245.55,
    },
    processingFee: {
      amount: 5971.29,
    },
  },
  client: {},
  collaborators: [
    {},
  ],
  creditFeeHandling: {},
  integration: {
    quickbooks: {},
  },
  labels: {
    "key": "string",
  },
  lateFeeHandling: {
    frequency: {},
  },
  lineItems: [
    {
      discount: {},
      integration: {
        quickbooks: {},
      },
      labels: {
        "key": "string",
      },
    },
  ],
  member: {},
  metadata: {},
  notificationPreferences: {
    sendReminders: false,
  },
  paymentMethods: [
    PayableUpdateRequestPaymentMethods.Credit,
  ],
};

  const res = await sdk.payableOnClient.update(id, payableUpdateRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier                                                          |
| `payableUpdateRequest`                                                     | [shared.PayableUpdateRequest](../../models/shared/payableupdaterequest.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdatePayableOnClientResponse](../../models/operations/updatepayableonclientresponse.md)>**

