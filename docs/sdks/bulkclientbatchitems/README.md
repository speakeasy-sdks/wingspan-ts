# BulkClientBatchItems
(*bulkClientBatchItems*)

### Available Operations

* [list](#list) - List bulk client batch items

## list

List bulk client batch items

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListBulkClientBatchItemsRequest, ListBulkClientBatchItemsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "Bicycle";

sdk.bulkClientBatchItems.list(batchId).then((res: ListBulkClientBatchItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListBulkClientBatchItemsResponse](../../models/operations/listbulkclientbatchitemsresponse.md)>**

