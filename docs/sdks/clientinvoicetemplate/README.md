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
import {
  CurrencyClientInvoiceDataCreateRequest,
  IntervalFrequency,
  StatusClientInvoiceTemplateCreateRequest,
  StatusScheduleDate,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.clientInvoiceTemplate.create({
    clientEmail: "string",
    clientEmailCC: [
      "string",
    ],
    frequency: {
      startDate: "string",
    },
    invoiceData: {
      creditFeeHandling: {},
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
    },
    memberId: "string",
    scheduleDates: [
      {
        date: "string",
        status: StatusScheduleDate.Completed,
      },
    ],
    status: StatusClientInvoiceTemplateCreateRequest.Draft,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetClientInvoiceTemplateRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.clientInvoiceTemplate.get(id);


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

**Promise<[operations.GetClientInvoiceTemplateResponse](../../models/operations/getclientinvoicetemplateresponse.md)>**


## update

Update client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateClientInvoiceTemplateRequest } from "wingspan/dist/sdk/models/operations";
import { ClientInvoiceTemplateUpdateRequest } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const clientInvoiceTemplateUpdateRequest: ClientInvoiceTemplateUpdateRequest = {
  clientId: "string",
};

  const res = await sdk.clientInvoiceTemplate.update(id, clientInvoiceTemplateUpdateRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier                                                                                      |
| `clientInvoiceTemplateUpdateRequest`                                                                   | [shared.ClientInvoiceTemplateUpdateRequest](../../models/shared/clientinvoicetemplateupdaterequest.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateClientInvoiceTemplateResponse](../../models/operations/updateclientinvoicetemplateresponse.md)>**

