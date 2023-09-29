# ClientInvoiceTemplate
(*clientInvoiceTemplate*)

### Available Operations

* [create](#create) - Create client-invoice-template
* [get](#get) - Get client-invoice-template
* [update](#update) - Update client-invoice-template

## create

Create client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateClientInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyClientInvoiceDataCreateRequest,
  IntervalFrequency,
  StatusClientInvoiceTemplateCreateRequest,
  StatusScheduleDate,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.clientInvoiceTemplate.create({
  accountId: "bluetooth Extended",
  clientCompany: "blue",
  clientEmail: "grey technology East",
  clientEmailCC: [
    "orange",
  ],
  clientFirstName: "male",
  clientLastName: "Gasoline Screen mobile",
  dueInDays: 6562.56,
  frequency: "Durham",
  invoiceData: {
    creditFeeHandling: {
      clientAbsolutePercentage: 177.59,
      clientPays: 5190.28,
      memberPays: 2303.13,
    },
    currency: CurrencyClientInvoiceDataCreateRequest.Usd,
    dueDate: "female",
    lineItems: [
      {
        costPerUnit: 8291.42,
        description: "Function-based tertiary collaboration",
        detail: "Borders Northwest",
        discount: {
          amount: 1325.85,
          description: "Fundamental systemic algorithm",
          percentage: 8424.64,
        },
        integration: {
          quickbooks: {
            expenseAccountId: "East red",
            itemId: "array Edinburg Investor",
          },
        },
        labels: {
          "quisquam": "likewise",
        },
        quantity: 4522.24,
        reimbursableExpense: false,
        totalCost: 4963.23,
        unit: "steradian",
      },
    ],
  },
  memberId: "woman",
  paymentMethodId: "Sausages",
  scheduleDates: [
    {
      cutOffDate: "City meanwhile incompatible",
      date: "Folk South digital",
      invoiceId: "Southwest",
      invoiceTemplateId: "Mongolia Maine sexy",
      status: StatusScheduleDate.Skipped,
    },
  ],
  status: StatusClientInvoiceTemplateCreateRequest.Draft,
}).then((res: CreateClientInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [shared.ClientInvoiceTemplateCreateRequest](../../models/shared/clientinvoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateClientInvoiceTemplateResponse](../../models/operations/createclientinvoicetemplateresponse.md)>**


## get

Get client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetClientInvoiceTemplateRequest, GetClientInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "female";

sdk.clientInvoiceTemplate.get(id).then((res: GetClientInvoiceTemplateResponse) => {
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

**Promise<[operations.GetClientInvoiceTemplateResponse](../../models/operations/getclientinvoicetemplateresponse.md)>**


## update

Update client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateClientInvoiceTemplateRequest, UpdateClientInvoiceTemplateResponse } from "wingspan/dist/sdk/models/operations";
import { ClientInvoiceTemplateUpdateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "Van";
const clientInvoiceTemplateUpdateRequest: ClientInvoiceTemplateUpdateRequest = {
  accountId: "Reactive",
  clientId: "Metal cheater Islands",
  paymentMethodId: "withdrawal extend",
};

sdk.clientInvoiceTemplate.update(id, clientInvoiceTemplateUpdateRequest).then((res: UpdateClientInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier                                                                                      |
| `clientInvoiceTemplateUpdateRequest`                                                                   | [shared.ClientInvoiceTemplateUpdateRequest](../../models/shared/clientinvoicetemplateupdaterequest.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateClientInvoiceTemplateResponse](../../models/operations/updateclientinvoicetemplateresponse.md)>**

