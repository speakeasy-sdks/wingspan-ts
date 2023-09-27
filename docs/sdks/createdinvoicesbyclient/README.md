# CreatedInvoicesByClient
(*createdInvoicesByClient*)

### Available Operations

* [list](#list) - List invoices created by client

## list

List invoices created by client

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListCreatedInvoicesByClientResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.createdInvoicesByClient.list().then((res: ListCreatedInvoicesByClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCreatedInvoicesByClientResponse](../../models/operations/listcreatedinvoicesbyclientresponse.md)>**

