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
  dueInDays: 4865.89,
  frequency: "Configuration",
  invoiceData: {
    acceptedPaymentMethods: [
      InvoiceDataCreateRequestAcceptedPaymentMethods.Ach,
    ],
    attachments: "South",
    collaborators: [
      {
        amount: 7964.74,
        currency: CurrencyInvoiceCollaboratorCreateRequest.Usd,
        description: "User-friendly tertiary ability",
        memberClientId: "orange Northwest",
      },
    ],
    creditFeeHandling: {
      clientAbsolutePercentage: 8559.52,
      clientPays: 8165.88,
      memberPays: 5519.29,
    },
    currency: CurrencyInvoiceDataCreateRequest.Cad,
    dueDate: "volt physical Ameliorated",
    invoiceNotes: "after",
    labels: {
      "amet": "Bike",
    },
    lateFeeHandling: {
      frequency: {
        daily: "Fiat",
        dayInInterval: 8946.95,
        endDate: "Account",
        every: 1009.66,
        interval: IntervalFrequency.Month,
        startDate: "Kentucky animated",
        twicePerMonth: false,
      },
      lateFeeAmount: 6216.36,
      lateFeePercentage: 9142.44,
    },
    lineItems: [
      {
        costPerUnit: 6502.37,
        description: "Cloned cohesive challenge",
        detail: "or",
        discount: "Edinburg",
        integration: {
          quickbooks: {
            expenseAccountId: "azure Dollar",
            itemId: "Bicycle silver",
          },
        },
        labels: "Sausages",
        quantity: 7804.86,
        reimbursableExpense: false,
        totalCost: 7602.59,
        unit: "kelvin",
      },
    ],
    memberClientId: "meanwhile",
    notificationPreferences: {
      sendInvoice: "overhang",
      sendReceipt: "South",
      sendReminders: false,
    },
    status: StatusInvoiceDataCreateRequest.Cancelled,
  },
  isSchedulingOnly: "digital",
  labels: "Southwest",
  scheduleDates: [
    {
      cutOffDate: "Pop",
      date: "sexy Country",
      invoiceId: "Garden Electric",
      invoiceTemplateId: "Southeast Toys Electric",
      status: StatusScheduleDate.Modified,
    },
  ],
  sendEmails: false,
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
const id: string = "program";

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
const id: string = "female";

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
const id: string = "Van";
const invoiceTemplateUpdateRequest: InvoiceTemplateUpdateRequest = {
  accountId: "Reactive",
  autoPaymentRequired: false,
  dueInDays: 2703.24,
  frequency: {
    daily: false,
    dayInInterval: 4888.52,
    endDate: "cheater Islands",
    every: 4995.57,
    interval: IntervalFrequencyUpdate.Month,
    startDate: "extend Plastic",
    twicePerMonth: "Forward",
  },
  invoiceData: {
    acceptedPaymentMethods: [
      InvoiceUpdateRequestAcceptedPaymentMethods.LessThanNilGreaterThan,
    ],
    attachments: "implement",
    chargedFees: "Baht",
    client: {},
    collaborators: [
      {
        amount: 9574.81,
        description: "Intuitive intangible algorithm",
      },
    ],
    creditFeeHandling: "pascal",
    dueDate: "Division Northeast Wooden",
    integration: "Jaguar",
    invoiceNotes: "visionary Buckinghamshire frictionless",
    labels: "parse",
    lateFeeHandling: {
      frequency: {
        daily: false,
        dayInInterval: 4270.89,
        endDate: "Movies Greens Global",
        every: 1190.53,
        interval: IntervalFrequencyUpdate.Week,
        startDate: "absolve West",
        twicePerMonth: "Southeast",
      },
      lateFeeAmount: 7874.73,
      lateFeePercentage: 8523.4,
    },
    lineItems: [
      "pascal",
    ],
    member: "Money",
    memberClientId: "Group wank Latvian",
    metadata: {
      purchaseOrderNumber: "global",
    },
    notificationPreferences: {
      sendInvoice: false,
      sendReceipt: false,
      sendReminders: false,
    },
    status: StatusInvoiceUpdateRequest.PaymentInTransit,
  },
  isSchedulingOnly: false,
  labels: {
    "delectus": "Specialist",
  },
  paymentMethodId: "Benz",
  scheduleDates: [
    "port",
  ],
  sendEmails: "Tools",
  status: StatusInvoiceTemplateUpdateRequest.Draft,
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

