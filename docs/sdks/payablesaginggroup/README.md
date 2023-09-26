# PayablesAgingGroup

### Available Operations

* [get](#get) - Get a list of payables with respective aging group

## get

Get a list of payables with respective aging group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPayablesAgingGroupResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payablesAgingGroup.get().then((res: GetPayablesAgingGroupResponse) => {
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

**Promise<[operations.GetPayablesAgingGroupResponse](../../models/operations/getpayablesaginggroupresponse.md)>**

