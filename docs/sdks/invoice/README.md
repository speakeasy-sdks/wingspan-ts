# invoice

### Available Operations

* [generate](#generate) - Generate invoice
* [send](#send) - Send invoice

## generate

Generate invoice

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GenerateInvoiceResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.invoice.generate({
  invoiceId: "inventore",
}).then((res: GenerateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GenerateInvoiceRequest](../../models/operations/generateinvoicerequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GenerateInvoiceResponse](../../models/operations/generateinvoiceresponse.md)>**


## send

Send invoice

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { SendInvoiceResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.invoice.send({
  invoiceId: "fuga",
}).then((res: SendInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.SendInvoiceRequest](../../models/operations/sendinvoicerequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.SendInvoiceResponse](../../models/operations/sendinvoiceresponse.md)>**

