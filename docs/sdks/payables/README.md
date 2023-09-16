# Payables

### Available Operations

* [get](#get) - Get payables summary

## get

Get payables summary

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPayablesResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payables.get().then((res: GetPayablesResponse) => {
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

**Promise<[operations.GetPayablesResponse](../../models/operations/getpayablesresponse.md)>**

