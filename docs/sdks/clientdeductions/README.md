# clientDeductions

### Available Operations

* [list](#list) - List deductions

## list

List deductions

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListClientDeductionsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientDeductions.list().then((res: ListClientDeductionsResponse) => {
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

**Promise<[operations.ListClientDeductionsResponse](../../models/operations/listclientdeductionsresponse.md)>**

