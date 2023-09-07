# bulkCalculation1099Batches

### Available Operations

* [list](#list) - List bulk calculation1099 batches

## list

List bulk calculation1099 batches

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBulkCalculation1099BatchesResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCalculation1099Batches.list().then((res: ListBulkCalculation1099BatchesResponse) => {
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

**Promise<[operations.ListBulkCalculation1099BatchesResponse](../../models/operations/listbulkcalculation1099batchesresponse.md)>**

