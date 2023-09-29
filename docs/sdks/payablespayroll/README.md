# PayablesPayroll
(*payablesPayroll*)

### Available Operations

* [list](#list) - Get a list of payables connected to payroll run

## list

Get a list of payables connected to payroll run

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListPayablesPayrollRequest, ListPayablesPayrollResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const payrollId: string = "Bicycle";

sdk.payablesPayroll.list(payrollId).then((res: ListPayablesPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `payrollId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | Unique identifier of a invoice with some constraints like invoice type |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.ListPayablesPayrollResponse](../../models/operations/listpayablespayrollresponse.md)>**

