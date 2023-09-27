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
  accountId: "consequuntur",
  clientCompany: "blanditiis",
  clientEmail: "error",
  clientEmailCC: [
    "eaque",
  ],
  clientFirstName: "occaecati",
  clientLastName: "rerum",
  dueInDays: 2378.93,
  frequency: {
    daily: false,
    dayInInterval: 2672.62,
    endDate: "iste",
    every: 6790.91,
    interval: IntervalFrequency.Month,
    startDate: "pariatur",
    twicePerMonth: false,
  },
  invoiceData: {
    creditFeeHandling: {
      clientAbsolutePercentage: 7301.22,
      clientPays: 9644.9,
      memberPays: 3119.45,
    },
    currency: CurrencyClientInvoiceDataCreateRequest.Cad,
    dueDate: "aliquid",
    lineItems: [
      {
        costPerUnit: 2123.9,
        description: "dolorem",
        detail: "dolor",
        discount: "ipsum",
        integration: {
          quickbooks: {
            expenseAccountId: "cum",
            itemId: "voluptate",
          },
        },
        labels: "reiciendis",
        quantity: 2274.14,
        reimbursableExpense: false,
        totalCost: 2543.56,
        unit: "veritatis",
      },
    ],
  },
  memberId: "ipsa",
  paymentMethodId: "ipsa",
  scheduleDates: [
    "odio",
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
const id: string = "accusamus";

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
const id: string = "quidem";
const clientInvoiceTemplateUpdateRequest: ClientInvoiceTemplateUpdateRequest = {
  accountId: "voluptatibus",
  clientId: "voluptas",
  paymentMethodId: "natus",
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

