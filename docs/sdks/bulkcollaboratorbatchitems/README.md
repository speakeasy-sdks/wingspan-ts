# BulkCollaboratorBatchItems
(*.bulkCollaboratorBatchItems*)

### Available Operations

* [list](#list) - List bulk collaborator batch items

## list

List bulk collaborator batch items

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListBulkCollaboratorBatchItemsRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkCollaboratorBatchItems.list(batchId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListBulkCollaboratorBatchItemsResponse](../../models/operations/listbulkcollaboratorbatchitemsresponse.md)>**

