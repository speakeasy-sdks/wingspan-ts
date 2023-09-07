# bulkCollaboratorBatch

### Available Operations

* [create](#create) - Create a bulk collaborator batch
* [get](#get) - Get a bulk collaborator batch
* [update](#update) - Update a bulk collaborator batch

## create

Create a bulk collaborator batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkCollaboratorBatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatch.create({
  labels: "error",
}).then((res: CreateBulkCollaboratorBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.BulkBatchCreate](../../models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateBulkCollaboratorBatchResponse](../../models/operations/createbulkcollaboratorbatchresponse.md)>**


## get

Get a bulk collaborator batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkCollaboratorBatchRequest, GetBulkCollaboratorBatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "quia";

sdk.bulkCollaboratorBatch.get(batchId).then((res: GetBulkCollaboratorBatchResponse) => {
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

**Promise<[operations.GetBulkCollaboratorBatchResponse](../../models/operations/getbulkcollaboratorbatchresponse.md)>**


## update

Update a bulk collaborator batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkCollaboratorBatchRequest, UpdateBulkCollaboratorBatchResponse } from "wingspan/dist/sdk/models/operations";
import { BulkBatchUpdate, StatusBulkBatchUpdate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "quis";
const bulkBatchUpdate: BulkBatchUpdate = {
  labels: "laborum",
  status: StatusBulkBatchUpdate.Complete,
};

sdk.bulkCollaboratorBatch.update(batchId, bulkBatchUpdate).then((res: UpdateBulkCollaboratorBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `batchId`                                                        | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for a batch                                    |
| `bulkBatchUpdate`                                                | [shared.BulkBatchUpdate](../../models/shared/bulkbatchupdate.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateBulkCollaboratorBatchResponse](../../models/operations/updatebulkcollaboratorbatchresponse.md)>**

