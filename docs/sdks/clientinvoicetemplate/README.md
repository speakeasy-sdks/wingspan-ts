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

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.clientInvoiceTemplate.create({
    clientEmail: "<value>",
    clientEmailCC: [
      "<value>",
    ],
    frequency: {
      startDate: "<value>",
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
            "key": "<value>",
          },
        },
      ],
    },
    memberId: "<value>",
    scheduleDates: [
      {
        date: "<value>",
        status: StatusScheduleDate.Completed,
      },
    ],
    status: StatusClientInvoiceTemplateCreateRequest.Draft,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [shared.ClientInvoiceTemplateCreateRequest](../../sdk/models/shared/clientinvoicetemplatecreaterequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateClientInvoiceTemplateResponse](../../sdk/models/operations/createclientinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetClientInvoiceTemplateRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "<value>";

  const res = await sdk.clientInvoiceTemplate.get(id);

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

**Promise<[operations.GetClientInvoiceTemplateResponse](../../sdk/models/operations/getclientinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update client-invoice-template

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateClientInvoiceTemplateRequest } from "wingspan/dist/sdk/models/operations";
import { ClientInvoiceTemplateUpdateRequest } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const id: string = "<value>";
const clientInvoiceTemplateUpdateRequest: ClientInvoiceTemplateUpdateRequest = {
  clientId: "<value>",
};

  const res = await sdk.clientInvoiceTemplate.update(id, clientInvoiceTemplateUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier                                                                                          |
| `clientInvoiceTemplateUpdateRequest`                                                                       | [shared.ClientInvoiceTemplateUpdateRequest](../../sdk/models/shared/clientinvoicetemplateupdaterequest.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateClientInvoiceTemplateResponse](../../sdk/models/operations/updateclientinvoicetemplateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
