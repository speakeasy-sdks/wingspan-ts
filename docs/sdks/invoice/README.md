# Invoice
(*invoice*)

### Available Operations

* [generate](#generate) - Generate invoice
* [send](#send) - Send invoice

## generate

Generate invoice

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GenerateInvoiceRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const invoiceId: string = "string";

  const res = await sdk.invoice.generate(invoiceId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of an invoice                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GenerateInvoiceResponse](../../models/operations/generateinvoiceresponse.md)>**


## send

Send invoice

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { SendInvoiceRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const invoiceId: string = "string";

  const res = await sdk.invoice.send(invoiceId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of an invoice                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SendInvoiceResponse](../../models/operations/sendinvoiceresponse.md)>**

