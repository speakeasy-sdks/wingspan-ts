# bulkClientBatches

### Available Operations

* [list](#list) - List bulk client batches

## list

List bulk client batches

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBulkClientBatchesResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkClientBatches.list().then((res: ListBulkClientBatchesResponse) => {
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

**Promise<[operations.ListBulkClientBatchesResponse](../../models/operations/listbulkclientbatchesresponse.md)>**

