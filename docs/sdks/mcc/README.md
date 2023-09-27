# Mcc
(*mcc*)

### Available Operations

* [list](#list) - List mcc codes

## list

List mcc codes

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListMCCResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.mcc.list().then((res: ListMCCResponse) => {
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

**Promise<[operations.ListMCCResponse](../../models/operations/listmccresponse.md)>**

