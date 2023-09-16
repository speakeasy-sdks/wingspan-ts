# BulkCollaboratorBatchItem

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
const batchId: string = "enim";
const bulkCollaboratorItemCreate: BulkCollaboratorItemCreate = {
  collaboratorGroupId: "odit",
  collaboratorId: "quo",
  collaboratorStatus: CollaboratorStatusBulkCollaboratorItemCreate.Active,
  company: "Hills, Ondricka and Schuster",
  email: "Avery_Mueller9@gmail.com",
  externalId: "reiciendis",
  firstLastName: "voluptatibus",
  formW9Data: {
    addressLine1: "nihil",
    addressLine2: "praesentium",
    city: "Baltimore",
    companyStructure: CompanyStructureMemberClientFormW9Info.LLCCorporationC,
    country: "Kazakhstan",
    dob: "cum",
    ein: "perferendis",
    firstName: "Alison",
    lastName: "Kiehn",
    legalBusinessName: "ut",
    postalCode: "13241-6384",
    ssn: "repudiandae",
    state: "quae",
  },
  labels: "quidem",
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
const batchId: string = "molestias";
const batchItemId: string = "excepturi";

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
const batchId: string = "pariatur";
const batchItemId: string = "modi";
const bulkCollaboratorItemUpdate: BulkCollaboratorItemUpdate = {
  collaboratorGroupId: "praesentium",
  collaboratorId: "rem",
  collaboratorStatus: CollaboratorStatusBulkCollaboratorItemUpdate.LessThanNilGreaterThan,
  company: "Waelchi LLC",
  email: "Tobin0@gmail.com",
  externalId: "est",
  firstLastName: "quibusdam",
  formW9Data: "deserunt",
  labels: {
    "quibusdam": "labore",
  },
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

