# bulkCollaboratorBatchItem

### Available Operations

* [create](#create) - Create a bulk collaborator batch item
* [get](#get) - Get a bulk collaborator batch item
* [update](#update) - Update a bulk collaborator batch item

## create

Create a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkCollaboratorBatchItemResponse } from "openapi/dist/sdk/models/operations";
import {
  CollaboratorStatusBulkCollaboratorItemCreate,
  CompanyStructureMemberClientFormW9Info,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatchItem.create({
  bulkCollaboratorItemCreate: {
    collaboratorGroupId: "dolorum",
    collaboratorId: "in",
    collaboratorStatus: CollaboratorStatusBulkCollaboratorItemCreate.Inactive,
    company: "Wolff, Price and Buckridge",
    email: "Obie.Schulist@gmail.com",
    externalId: "laborum",
    firstLastName: "accusamus",
    formW9Data: "occaecati",
    labels: "accusamus",
  },
  batchId: "delectus",
}).then((res: CreateBulkCollaboratorBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.CreateBulkCollaboratorBatchItemRequest](../../models/operations/createbulkcollaboratorbatchitemrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.CreateBulkCollaboratorBatchItemResponse](../../models/operations/createbulkcollaboratorbatchitemresponse.md)>**


## get

Get a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetBulkCollaboratorBatchItemResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatchItem.get({
  batchId: "quidem",
  batchItemId: "provident",
}).then((res: GetBulkCollaboratorBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetBulkCollaboratorBatchItemRequest](../../models/operations/getbulkcollaboratorbatchitemrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetBulkCollaboratorBatchItemResponse](../../models/operations/getbulkcollaboratorbatchitemresponse.md)>**


## update

Update a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkCollaboratorBatchItemResponse } from "openapi/dist/sdk/models/operations";
import {
  CollaboratorStatusBulkCollaboratorItemUpdate,
  CompanyStructureMemberClientFormW9Info,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkCollaboratorBatchItem.update({
  bulkCollaboratorItemUpdate: {
    collaboratorGroupId: "nam",
    collaboratorId: "id",
    collaboratorStatus: CollaboratorStatusBulkCollaboratorItemUpdate.Pending,
    company: "Will - Feeney",
    email: "Golda_Kassulke@yahoo.com",
    externalId: "molestiae",
    firstLastName: "perferendis",
    formW9Data: "magnam",
    labels: {
      "id": "labore",
    },
  },
  batchId: "labore",
  batchItemId: "suscipit",
}).then((res: UpdateBulkCollaboratorBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.UpdateBulkCollaboratorBatchItemRequest](../../models/operations/updatebulkcollaboratorbatchitemrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.UpdateBulkCollaboratorBatchItemResponse](../../models/operations/updatebulkcollaboratorbatchitemresponse.md)>**

