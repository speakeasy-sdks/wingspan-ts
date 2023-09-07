# payablesPayroll

### Available Operations

* [list](#list) - Get a list of payables connected to payroll run

## list

Get a list of payables connected to payroll run

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListPayablesPayrollResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payablesPayroll.list({
  payrollId: "consequuntur",
}).then((res: ListPayablesPayrollResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListPayablesPayrollRequest](../../models/operations/listpayablespayrollrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListPayablesPayrollResponse](../../models/operations/listpayablespayrollresponse.md)>**

