# bulkCollaboratorBatchItems

### Available Operations

* [list](#list) - List bulk collaborator batch items

## list

List bulk collaborator batch items

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBulkCollaboratorBatchItemsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatchItems.list({
  batchId: "natus",
}).then((res: ListBulkCollaboratorBatchItemsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.ListBulkCollaboratorBatchItemsRequest](../../models/operations/listbulkcollaboratorbatchitemsrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.ListBulkCollaboratorBatchItemsResponse](../../models/operations/listbulkcollaboratorbatchitemsresponse.md)>**

