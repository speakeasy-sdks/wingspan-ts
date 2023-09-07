# approvedPayables

### Available Operations

* [list](#list) - List approved payables for payroll

## list

List approved payables for payroll

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListApprovedPayablesResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.approvedPayables.list().then((res: ListApprovedPayablesResponse) => {
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

**Promise<[operations.ListApprovedPayablesResponse](../../models/operations/listapprovedpayablesresponse.md)>**

