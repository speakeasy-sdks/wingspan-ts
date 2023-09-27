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
import { CreateInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyInvoiceCollaboratorCreateRequest,
  CurrencyInvoiceDataCreateRequest,
  IntervalFrequency,
  InvoiceDataCreateRequestAcceptedPaymentMethods,
  StatusInvoiceDataCreateRequest,
  StatusInvoiceTemplateCreateRequest,
  StatusScheduleDate,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.invoiceTemplate.create({
  dueInDays: 8623.1,
  frequency: "porro",
  invoiceData: {
    acceptedPaymentMethods: [
      InvoiceDataCreateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
    ],
    attachments: {
      customAttachmentIds: [
        "iusto",
      ],
    },
    collaborators: [
      {
        amount: 4973.91,
        currency: CurrencyInvoiceCollaboratorCreateRequest.Usd,
        description: "officia",
        memberClientId: "tempora",
      },
    ],
    creditFeeHandling: "ea",
    currency: CurrencyInvoiceDataCreateRequest.Usd,
    dueDate: "vel",
    invoiceNotes: "possimus",
    labels: "ratione",
    lateFeeHandling: "laudantium",
    lineItems: [
      {
        costPerUnit: 1206.57,
        description: "dolor",
        detail: "maiores",
        discount: "ex",
        integration: {
          quickbooks: {
            expenseAccountId: "voluptatibus",
            itemId: "nostrum",
          },
        },
        labels: {
          "quisquam": "saepe",
        },
        quantity: 4113.72,
        reimbursableExpense: false,
        totalCost: 3592.71,
        unit: "veniam",
      },
    ],
    memberClientId: "aliquid",
    notificationPreferences: "magnam",
    status: StatusInvoiceDataCreateRequest.Cancelled,
  },
  isSchedulingOnly: false,
  labels: "recusandae",
  scheduleDates: [
    "minima",
  ],
  sendEmails: "a",
  status: StatusInvoiceTemplateCreateRequest.Expired,
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
import { Wingspan } from "wingspan";
import { DeleteInvoiceTemplateRequest, DeleteInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "aut";

sdk.invoiceTemplate.delete(id).then((res: DeleteInvoiceTemplateResponse) => {
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

**Promise<[operations.DeleteInvoiceTemplateResponse](../../models/operations/deleteinvoicetemplateresponse.md)>**


## get

Get invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetInvoiceTemplateRequest, GetInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "aut";

sdk.invoiceTemplate.get(id).then((res: GetInvoiceTemplateResponse) => {
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

**Promise<[operations.GetInvoiceTemplateResponse](../../models/operations/getinvoicetemplateresponse.md)>**


## update

Update invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateInvoiceTemplateRequest, UpdateInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";
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
  InvoiceUpdateRequestClient2,
  InvoiceUpdateRequestMember2,
  LateFeeConfigUpdate,
  ScheduleDateUpdate,
  Sixad3f4f624fb518510130e879729b00ed8c237d1cebc5477abf34ac340a6424d,
  StatusInvoiceTemplateUpdateRequest,
  StatusInvoiceUpdateRequest,
  StatusScheduleDateUpdate,
  ThirtySixb041d426951ffff76360faf03ef8ae938bed9739e6ad9f51acb982782296a2,
  ThreeBillionOneHundredAndNinetyMillionSixHundredAndEightyFiveThousandEightHundredAndThirtyTwoa4970525ea5b0803efff0b36a0202062e1fd8a0bc187acbe156461,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "deleniti";
const invoiceTemplateUpdateRequest: InvoiceTemplateUpdateRequest = {
  accountId: "impedit",
  autoPaymentRequired: "fugit",
  dueInDays: 8828.6,
  frequency: "non",
  invoiceData: "dolorum",
  isSchedulingOnly: false,
  labels: {
    "velit": "eum",
  },
  paymentMethodId: "autem",
  scheduleDates: [
    {
      date: "quas",
      invoiceTemplateId: "assumenda",
      status: StatusScheduleDateUpdate.LessThanNilGreaterThan,
    },
  ],
  sendEmails: "libero",
  status: StatusInvoiceTemplateUpdateRequest.Active,
};

sdk.invoiceTemplate.update(id, invoiceTemplateUpdateRequest).then((res: UpdateInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier                                                                          |
| `invoiceTemplateUpdateRequest`                                                             | [shared.InvoiceTemplateUpdateRequest](../../models/shared/invoicetemplateupdaterequest.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateInvoiceTemplateResponse](../../models/operations/updateinvoicetemplateresponse.md)>**

