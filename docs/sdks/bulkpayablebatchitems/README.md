# BulkPayableBatchItems

### Available Operations

* [list](#list) - List bulk payable batch items

## list

List bulk payable batch items

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListBulkPayableBatchItemsRequest, ListBulkPayableBatchItemsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "illum";

sdk.bulkPayableBatchItems.list(batchId).then((res: ListBulkPayableBatchItemsResponse) => {
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

**Promise<[operations.ListBulkPayableBatchItemsResponse](../../models/operations/listbulkpayablebatchitemsresponse.md)>**

