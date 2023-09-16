# ClientInvoices

### Available Operations

* [list](#list) - List invoices on client

## list

List invoices on client

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListClientInvoicesResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoices.list().then((res: ListClientInvoicesResponse) => {
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

**Promise<[operations.ListClientInvoicesResponse](../../models/operations/listclientinvoicesresponse.md)>**

