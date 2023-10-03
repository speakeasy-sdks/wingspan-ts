# Payroll
(*payroll*)

### Available Operations

* [execute](#execute) - Execute payroll

## execute

Execute payroll

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ExecutePayrollResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payroll.execute().then((res: ExecutePayrollResponse) => {
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

**Promise<[operations.ExecutePayrollResponse](../../models/operations/executepayrollresponse.md)>**

