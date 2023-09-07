# clientInvoiceTemplate

### Available Operations

* [create](#create) - Create client-invoice-template
* [get](#get) - Get client-invoice-template
* [update](#update) - Update client-invoice-template

## create

Create client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateClientInvoiceTemplateResponse } from "openapi/dist/sdk/models/operations";
import {
  CurrencyClientInvoiceDataCreateRequest,
  IntervalFrequency,
  StatusClientInvoiceTemplateCreateRequest,
  StatusScheduleDate,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.clientInvoiceTemplate.create({
  accountId: "consequatur",
  clientCompany: "tempora",
  clientEmail: "debitis",
  clientEmailCC: [
    "ipsam",
  ],
  clientFirstName: "aspernatur",
  clientLastName: "sequi",
  dueInDays: 7791.92,
  frequency: "recusandae",
  invoiceData: {
    creditFeeHandling: "distinctio",
    currency: CurrencyClientInvoiceDataCreateRequest.LessThanNilGreaterThan,
    dueDate: "dignissimos",
    lineItems: [
      {
        costPerUnit: 769.56,
        description: "nihil",
        detail: "totam",
        discount: {
          amount: 3068.1,
          description: "odio",
          percentage: 5775.43,
        },
        integration: "sapiente",
        labels: "deserunt",
        quantity: 4752.89,
        reimbursableExpense: "porro",
        totalCost: 4304.02,
        unit: "quas",
      },
    ],
  },
  memberId: "praesentium",
  paymentMethodId: "consequuntur",
  scheduleDates: [
    {
      cutOffDate: "fugit",
      date: "fuga",
      invoiceId: "mollitia",
      invoiceTemplateId: "incidunt",
      status: StatusScheduleDate.Skipped,
    },
  ],
  status: StatusClientInvoiceTemplateCreateRequest.Active,
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
import { Wingspan } from "openapi";
import { GetClientInvoiceTemplateResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoiceTemplate.get({
  id: "562f222e-9817-4ee1-bcbe-61e6b7b95bc0",
}).then((res: GetClientInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetClientInvoiceTemplateRequest](../../models/operations/getclientinvoicetemplaterequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetClientInvoiceTemplateResponse](../../models/operations/getclientinvoicetemplateresponse.md)>**


## update

Update client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateClientInvoiceTemplateResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoiceTemplate.update({
  clientInvoiceTemplateUpdateRequest: {
    accountId: "culpa",
    clientId: "tempore",
    paymentMethodId: "adipisci",
  },
  id: "c20c4f37-89fd-4871-b99d-d2efd121aa6f",
}).then((res: UpdateClientInvoiceTemplateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateClientInvoiceTemplateRequest](../../models/operations/updateclientinvoicetemplaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateClientInvoiceTemplateResponse](../../models/operations/updateclientinvoicetemplateresponse.md)>**

