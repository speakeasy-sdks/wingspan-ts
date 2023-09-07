# bulkPayableBatchItems

### Available Operations

* [list](#list) - List bulk payable batch items

## list

List bulk payable batch items

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBulkPayableBatchItemsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkPayableBatchItems.list({
  batchId: "provident",
}).then((res: ListBulkPayableBatchItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListBulkPayableBatchItemsRequest](../../models/operations/listbulkpayablebatchitemsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListBulkPayableBatchItemsResponse](../../models/operations/listbulkpayablebatchitemsresponse.md)>**

