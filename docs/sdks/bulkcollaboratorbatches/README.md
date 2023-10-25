# BulkCollaboratorBatches
(*bulkCollaboratorBatches*)

### Available Operations

* [list](#list) - List bulk collaborator batches

## list

List bulk collaborator batches

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.bulkCollaboratorBatches.list();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListBulkCollaboratorBatchesResponse](../../models/operations/listbulkcollaboratorbatchesresponse.md)>**

