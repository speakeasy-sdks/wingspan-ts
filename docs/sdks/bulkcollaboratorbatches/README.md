# bulkCollaboratorBatches

### Available Operations

* [list](#list) - List bulk collaborator batches

## list

List bulk collaborator batches

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListBulkCollaboratorBatchesResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatches.list().then((res: ListBulkCollaboratorBatchesResponse) => {
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

**Promise<[operations.ListBulkCollaboratorBatchesResponse](../../models/operations/listbulkcollaboratorbatchesresponse.md)>**

