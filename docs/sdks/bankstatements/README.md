# bankStatements

### Available Operations

* [list](#list) - List bank statements

## list

List bank statements

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBankStatementsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bankStatements.list().then((res: ListBankStatementsResponse) => {
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

**Promise<[operations.ListBankStatementsResponse](../../models/operations/listbankstatementsresponse.md)>**

