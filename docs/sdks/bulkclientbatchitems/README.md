# bulkClientBatchItems

### Available Operations

* [list](#list) - List bulk client batch items

## list

List bulk client batch items

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBulkClientBatchItemsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkClientBatchItems.list({
  batchId: "eligendi",
}).then((res: ListBulkClientBatchItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListBulkClientBatchItemsRequest](../../models/operations/listbulkclientbatchitemsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListBulkClientBatchItemsResponse](../../models/operations/listbulkclientbatchitemsresponse.md)>**

