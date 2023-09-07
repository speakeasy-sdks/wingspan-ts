# memberInvoices

### Available Operations

* [list](#list) - List invoices on member

## list

List invoices on member

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListMemberInvoicesResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.memberInvoices.list().then((res: ListMemberInvoicesResponse) => {
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

**Promise<[operations.ListMemberInvoicesResponse](../../models/operations/listmemberinvoicesresponse.md)>**

