# BulkCollaboratorBatch
(*.bulkCollaboratorBatch*)

### Available Operations

* [create](#create) - Create a bulk collaborator batch
* [get](#get) - Get a bulk collaborator batch
* [update](#update) - Update a bulk collaborator batch

## create

Create a bulk collaborator batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.bulkCollaboratorBatch.create({
    labels: {
      "key": "string",
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetBulkCollaboratorBatchRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkCollaboratorBatch.get(batchId);


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

**Promise<[operations.GetBulkCollaboratorBatchResponse](../../models/operations/getbulkcollaboratorbatchresponse.md)>**


## update

Update a bulk collaborator batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkCollaboratorBatchRequest } from "wingspan/dist/sdk/models/operations";
import { BulkBatchUpdate, StatusBulkBatchUpdate } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkBatchUpdate: BulkBatchUpdate = {
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkCollaboratorBatch.update(batchId, bulkBatchUpdate);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `batchId`                                                        | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for a batch                                    |
| `bulkBatchUpdate`                                                | [shared.BulkBatchUpdate](../../models/shared/bulkbatchupdate.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateBulkCollaboratorBatchResponse](../../models/operations/updatebulkcollaboratorbatchresponse.md)>**

