# bulkInvoiceBatchItems

### Available Operations

* [list](#list) - List bulk invoice batch items

## list

List bulk invoice batch items

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBulkInvoiceBatchItemsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkInvoiceBatchItems.list({
  batchId: "quidem",
}).then((res: ListBulkInvoiceBatchItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListBulkInvoiceBatchItemsRequest](../../models/operations/listbulkinvoicebatchitemsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListBulkInvoiceBatchItemsResponse](../../models/operations/listbulkinvoicebatchitemsresponse.md)>**

