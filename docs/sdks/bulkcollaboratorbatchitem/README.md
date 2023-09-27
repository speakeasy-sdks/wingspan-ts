# BulkCollaboratorBatchItem
(*bulkCollaboratorBatchItem*)

### Available Operations

* [create](#create) - Create a bulk collaborator batch item
* [get](#get) - Get a bulk collaborator batch item
* [update](#update) - Update a bulk collaborator batch item

## create

Create a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkCollaboratorBatchItemRequest, CreateBulkCollaboratorBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  BulkCollaboratorItemCreate,
  CollaboratorStatusBulkCollaboratorItemCreate,
  CompanyStructureMemberClientFormW9Info,
  MemberClientFormW9Info,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "id";
const bulkCollaboratorItemCreate: BulkCollaboratorItemCreate = {
  collaboratorGroupId: "possimus",
  collaboratorId: "aut",
  collaboratorStatus: CollaboratorStatusBulkCollaboratorItemCreate.Active,
  company: "Smitham - Pacocha",
  email: "Wanda.Wolf50@gmail.com",
  externalId: "voluptatibus",
  firstLastName: "ipsa",
  formW9Data: {
    addressLine1: "voluptate",
    addressLine2: "cum",
    city: "North Ilianaboro",
    companyStructure: CompanyStructureMemberClientFormW9Info.Partnership,
    country: "Brazil",
    dob: "corporis",
    ein: "dolore",
    firstName: "Jayden",
    lastName: "Carter",
    legalBusinessName: "harum",
    postalCode: "84902",
    ssn: "quidem",
    state: "molestias",
  },
  labels: {
    "pariatur": "modi",
  },
};

sdk.bulkCollaboratorBatchItem.create(batchId, bulkCollaboratorItemCreate).then((res: CreateBulkCollaboratorBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `batchId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for a batch                                                          |
| `bulkCollaboratorItemCreate`                                                           | [shared.BulkCollaboratorItemCreate](../../models/shared/bulkcollaboratoritemcreate.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateBulkCollaboratorBatchItemResponse](../../models/operations/createbulkcollaboratorbatchitemresponse.md)>**


## get

Get a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkCollaboratorBatchItemRequest, GetBulkCollaboratorBatchItemResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "praesentium";
const batchItemId: string = "rem";

sdk.bulkCollaboratorBatchItem.get(batchId, batchItemId).then((res: GetBulkCollaboratorBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `batchItemId`                                                | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for an item in a batch                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkCollaboratorBatchItemResponse](../../models/operations/getbulkcollaboratorbatchitemresponse.md)>**


## update

Update a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkCollaboratorBatchItemRequest, UpdateBulkCollaboratorBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  BulkCollaboratorItemUpdate,
  CollaboratorStatusBulkCollaboratorItemUpdate,
  CompanyStructureMemberClientFormW9Info,
  MemberClientFormW9Info,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "voluptates";
const batchItemId: string = "quasi";
const bulkCollaboratorItemUpdate: BulkCollaboratorItemUpdate = {
  collaboratorGroupId: "repudiandae",
  collaboratorId: "sint",
  collaboratorStatus: CollaboratorStatusBulkCollaboratorItemUpdate.Active,
  company: "Gottlieb, Hamill and Altenwerth",
  email: "Roosevelt_Cole@hotmail.com",
  externalId: "quibusdam",
  firstLastName: "labore",
  formW9Data: "qui",
  labels: "cupiditate",
};

sdk.bulkCollaboratorBatchItem.update(batchId, batchItemId, bulkCollaboratorItemUpdate).then((res: UpdateBulkCollaboratorBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `batchId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for a batch                                                          |
| `batchItemId`                                                                          | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier for an item in a batch                                               |
| `bulkCollaboratorItemUpdate`                                                           | [shared.BulkCollaboratorItemUpdate](../../models/shared/bulkcollaboratoritemupdate.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateBulkCollaboratorBatchItemResponse](../../models/operations/updatebulkcollaboratorbatchitemresponse.md)>**

