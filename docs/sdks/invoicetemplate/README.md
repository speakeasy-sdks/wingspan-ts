# InvoiceTemplate
(*invoiceTemplate*)

### Available Operations

* [create](#create) - Create invoice-template
* [delete](#delete) - Delete invoice-template
* [get](#get) - Get invoice-template
* [update](#update) - Update invoice-template

## create

Create invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import {
  CurrencyInvoiceCollaboratorCreateRequest,
  CurrencyInvoiceDataCreateRequest,
  IntervalFrequency,
  InvoiceDataCreateRequestAcceptedPaymentMethods,
  StatusInvoiceDataCreateRequest,
  StatusInvoiceTemplateCreateRequest,
  StatusScheduleDate,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.invoiceTemplate.create({
    frequency: {
      startDate: "string",
    },
    invoiceData: {
      acceptedPaymentMethods: [
        InvoiceDataCreateRequestAcceptedPaymentMethods.Ach,
      ],
      attachments: {
        customAttachmentIds: [
          "string",
        ],
      },
      collaborators: [
        {
          amount: 4893.82,
          currency: CurrencyInvoiceCollaboratorCreateRequest.Cad,
          description: "Synchronised full-range emulation",
          memberClientId: "string",
        },
      ],
      creditFeeHandling: {},
      labels: {
        "key": "string",
      },
      lateFeeHandling: {
        frequency: {
          startDate: "string",
        },
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
      memberClientId: "string",
      notificationPreferences: {
        sendReminders: false,
      },
    },
    labels: {
      "key": "string",
    },
    scheduleDates: [
      {
        date: "string",
        status: StatusScheduleDate.Pending,
      },
    ],
    status: StatusInvoiceTemplateCreateRequest.Cancelled,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.InvoiceTemplateCreateRequest](../../sdk/models/shared/invoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateInvoiceTemplateResponse](../../sdk/models/operations/createinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Delete invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteInvoiceTemplateRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.invoiceTemplate.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteInvoiceTemplateResponse](../../sdk/models/operations/deleteinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetInvoiceTemplateRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.invoiceTemplate.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInvoiceTemplateResponse](../../sdk/models/operations/getinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateInvoiceTemplateRequest } from "wingspan/dist/sdk/models/operations";
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
  InvoiceTemplateUpdateRequest,
  InvoiceUpdateRequest,
  InvoiceUpdateRequestAcceptedPaymentMethods,
  InvoiceUpdateRequestClient,
  InvoiceUpdateRequestMember,
  LateFeeConfigUpdate,
  ScheduleDateUpdate,
  Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d,
  StatusInvoiceTemplateUpdateRequest,
  StatusInvoiceUpdateRequest,
  StatusScheduleDateUpdate,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";
const invoiceTemplateUpdateRequest: InvoiceTemplateUpdateRequest = {
  frequency: {},
  invoiceData: {
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
  },
  labels: {
    "key": "string",
  },
  scheduleDates: [
    {},
  ],
};

  const res = await sdk.invoiceTemplate.update(id, invoiceTemplateUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier                                                                              |
| `invoiceTemplateUpdateRequest`                                                                 | [shared.InvoiceTemplateUpdateRequest](../../sdk/models/shared/invoicetemplateupdaterequest.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateInvoiceTemplateResponse](../../sdk/models/operations/updateinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
