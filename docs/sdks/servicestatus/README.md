# serviceStatus

### Available Operations

* [get](#get) - Get Service Status

## get

Get Service Status

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetServiceStatusResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.serviceStatus.get().then((res: GetServiceStatusResponse) => {
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

**Promise<[operations.GetServiceStatusResponse](../../models/operations/getservicestatusresponse.md)>**

