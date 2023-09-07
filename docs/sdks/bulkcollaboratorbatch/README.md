# bulkCollaboratorBatch

### Available Operations

* [create](#create) - Create a bulk collaborator batch
* [get](#get) - Get a bulk collaborator batch
* [update](#update) - Update a bulk collaborator batch

## create

Create a bulk collaborator batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkCollaboratorBatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatch.create({
  labels: {
    "aliquid": "provident",
  },
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
import { Wingspan } from "openapi";
import { GetBulkCollaboratorBatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatch.get({
  batchId: "necessitatibus",
}).then((res: GetBulkCollaboratorBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetBulkCollaboratorBatchRequest](../../models/operations/getbulkcollaboratorbatchrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetBulkCollaboratorBatchResponse](../../models/operations/getbulkcollaboratorbatchresponse.md)>**


## update

Update a bulk collaborator batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkCollaboratorBatchResponse } from "openapi/dist/sdk/models/operations";
import { StatusBulkBatchUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatch.update({
  bulkBatchUpdate: {
    labels: {
      "officia": "dolor",
    },
    status: StatusBulkBatchUpdate.LessThanNilGreaterThan,
  },
  batchId: "a",
}).then((res: UpdateBulkCollaboratorBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateBulkCollaboratorBatchRequest](../../models/operations/updatebulkcollaboratorbatchrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateBulkCollaboratorBatchResponse](../../models/operations/updatebulkcollaboratorbatchresponse.md)>**

