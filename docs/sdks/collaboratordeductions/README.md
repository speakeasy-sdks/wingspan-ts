# collaboratorDeductions

### Available Operations

* [list](#list) - List deductions

## list

List deductions

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListCollaboratorDeductionsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorDeductions.list().then((res: ListCollaboratorDeductionsResponse) => {
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

**Promise<[operations.ListCollaboratorDeductionsResponse](../../models/operations/listcollaboratordeductionsresponse.md)>**

