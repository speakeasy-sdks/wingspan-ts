# InvoiceTemplate

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
  dueInDays: 4856.28,
  frequency: {
    daily: false,
    dayInInterval: 7875.42,
    endDate: "vero",
    every: 6064.76,
    interval: IntervalFrequency.Month,
    startDate: "ipsum",
    twicePerMonth: false,
  },
  invoiceData: {
    acceptedPaymentMethods: [
      InvoiceDataCreateRequestAcceptedPaymentMethods.Ach,
    ],
    attachments: "vero",
    collaborators: [
      {
        amount: 4922.68,
        currency: CurrencyInvoiceCollaboratorCreateRequest.Cad,
        description: "distinctio",
        memberClientId: "quod",
      },
    ],
    creditFeeHandling: "similique",
    currency: CurrencyInvoiceDataCreateRequest.LessThanNilGreaterThan,
    dueDate: "vero",
    invoiceNotes: "ducimus",
    labels: "quibusdam",
    lateFeeHandling: {
      frequency: {
        daily: "natus",
        dayInInterval: 7733.26,
        endDate: "aut",
        every: 9742.59,
        interval: IntervalFrequency.Month,
        startDate: "nulla",
        twicePerMonth: "porro",
      },
      lateFeeAmount: 9818.3,
      lateFeePercentage: 9850.33,
    },
    lineItems: [
      {
        costPerUnit: 4783.7,
        description: "eligendi",
        detail: "ducimus",
        discount: "officia",
        integration: "ipsam",
        labels: "aspernatur",
        quantity: 4282.24,
        reimbursableExpense: false,
        totalCost: 2978.42,
        unit: "ratione",
      },
    ],
    memberClientId: "ex",
    notificationPreferences: {
      sendInvoice: "dolor",
      sendReceipt: false,
      sendReminders: false,
    },
    status: StatusInvoiceDataCreateRequest.Draft,
  },
  isSchedulingOnly: "nulla",
  labels: {
    "voluptatibus": "nostrum",
  },
  scheduleDates: [
    {
      cutOffDate: "quisquam",
      date: "saepe",
      invoiceId: "ea",
      invoiceTemplateId: "impedit",
      status: StatusScheduleDate.Completed,
    },
  ],
  sendEmails: "aliquid",
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
import { Wingspan } from "wingspan";
import { DeleteInvoiceTemplateRequest, DeleteInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "magnam";

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
const id: string = "ea";

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
const id: string = "quo";
const invoiceTemplateUpdateRequest: InvoiceTemplateUpdateRequest = {
  accountId: "consectetur",
  autoPaymentRequired: false,
  dueInDays: 1324.87,
  frequency: "eaque",
  invoiceData: {
    acceptedPaymentMethods: [
      InvoiceUpdateRequestAcceptedPaymentMethods.Manual,
    ],
    attachments: "aut",
    chargedFees: {
      lateFee: {
        amount: 3045.82,
        calculatedAt: "fugit",
      },
      processingFee: {
        amount: 795.22,
        calculatedAt: "non",
      },
    },
    client: "dolorum",
    collaborators: [
      {
        amount: 8104.24,
        description: "velit",
      },
    ],
    creditFeeHandling: "autem",
    dueDate: "nobis",
    integration: {
      quickbooks: {
        expenseAccountId: "nulla",
        itemId: "voluptas",
      },
    },
    invoiceNotes: "libero",
    labels: "tempora",
    lateFeeHandling: "explicabo",
    lineItems: [
      {
        costPerUnit: 553.74,
        description: "molestiae",
        detail: "magnam",
        discount: "eius",
        integration: "esse",
        labels: {
          "fuga": "reprehenderit",
        },
        quantity: 6956.26,
        reimbursableExpense: false,
        totalCost: 2835.19,
        unit: "eum",
      },
    ],
    member: "assumenda",
    memberClientId: "eos",
    metadata: {
      purchaseOrderNumber: "quisquam",
    },
    notificationPreferences: "ipsa",
    status: StatusInvoiceUpdateRequest.PaymentInTransit,
  },
  isSchedulingOnly: false,
  labels: "quo",
  paymentMethodId: "illum",
  scheduleDates: [
    {
      date: "fuga",
      invoiceTemplateId: "eius",
      status: StatusScheduleDateUpdate.Pending,
    },
  ],
  sendEmails: "ab",
  status: StatusInvoiceTemplateUpdateRequest.Expired,
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

