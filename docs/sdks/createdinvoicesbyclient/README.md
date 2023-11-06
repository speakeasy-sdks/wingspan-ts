# CreatedInvoicesByClient
(*createdInvoicesByClient*)

### Available Operations

* [list](#list) - List invoices created by client

## list

List invoices created by client

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.createdInvoicesByClient.list();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCreatedInvoicesByClientResponse](../../models/operations/listcreatedinvoicesbyclientresponse.md)>**

