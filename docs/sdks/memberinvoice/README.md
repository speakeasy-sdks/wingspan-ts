# MemberInvoice
(*.memberInvoice*)

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
import {
  CurrencyInvoiceCollaboratorCreateRequest,
  CurrencyInvoiceCreateRequest,
  IntervalFrequencyUpdate,
  InvoiceCreateRequestAcceptedPaymentMethods,
  StatusInvoiceCreateRequest,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.memberInvoice.create({
    acceptedPaymentMethods: [
      InvoiceCreateRequestAcceptedPaymentMethods.Ach,
    ],
    attachments: {
      customAttachmentIds: [
        "string",
      ],
    },
    client: {},
    collaborators: [
      {
        amount: 4893.82,
        currency: CurrencyInvoiceCollaboratorCreateRequest.Cad,
        description: "Synchronised full-range emulation",
        memberClientId: "string",
      },
    ],
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
    memberClientId: "string",
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
| `request`                                                                  | [shared.InvoiceCreateRequest](../../models/shared/invoicecreaterequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateMemberInvoiceResponse](../../models/operations/creatememberinvoiceresponse.md)>**


## delete

Delete invoice on member by invoiceId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteMemberInvoiceRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.memberInvoice.delete(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetMemberInvoiceRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.memberInvoice.get(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UpdateMemberInvoiceRequest } from "wingspan/dist/sdk/models/operations";
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
  InvoiceUpdateRequestClient,
  InvoiceUpdateRequestMember,
  LateFeeConfigUpdate,
  Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d,
  StatusInvoiceUpdateRequest,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const invoiceUpdateRequest: InvoiceUpdateRequest = {
  acceptedPaymentMethods: [
    InvoiceUpdateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
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
};

  const res = await sdk.memberInvoice.update(id, invoiceUpdateRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `id`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier                                                          |
| `invoiceUpdateRequest`                                                     | [shared.InvoiceUpdateRequest](../../models/shared/invoiceupdaterequest.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdateMemberInvoiceResponse](../../models/operations/updatememberinvoiceresponse.md)>**

