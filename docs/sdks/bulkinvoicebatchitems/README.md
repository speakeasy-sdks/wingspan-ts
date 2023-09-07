# bulkInvoiceBatchItems

### Available Operations

* [list](#list) - List bulk invoice batch items

## list

List bulk invoice batch items

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListBulkInvoiceBatchItemsRequest, ListBulkInvoiceBatchItemsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "molestiae";

sdk.bulkInvoiceBatchItems.list(batchId).then((res: ListBulkInvoiceBatchItemsResponse) => {
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

**Promise<[operations.ListBulkInvoiceBatchItemsResponse](../../models/operations/listbulkinvoicebatchitemsresponse.md)>**

