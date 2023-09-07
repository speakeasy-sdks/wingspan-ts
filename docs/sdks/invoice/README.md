# invoice

### Available Operations

* [generate](#generate) - Generate invoice
* [send](#send) - Send invoice

## generate

Generate invoice

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GenerateInvoiceRequest, GenerateInvoiceResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const invoiceId: string = "soluta";

sdk.invoice.generate(invoiceId).then((res: GenerateInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { SendInvoiceRequest, SendInvoiceResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const invoiceId: string = "nobis";

sdk.invoice.send(invoiceId).then((res: SendInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of an invoice                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SendInvoiceResponse](../../models/operations/sendinvoiceresponse.md)>**

