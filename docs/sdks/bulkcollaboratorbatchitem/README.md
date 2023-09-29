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
const batchId: string = "online";
const bulkCollaboratorItemCreate: BulkCollaboratorItemCreate = {
  collaboratorGroupId: "Extended South",
  collaboratorId: "grey technology East",
  collaboratorStatus: CollaboratorStatusBulkCollaboratorItemCreate.Active,
  company: "Borer LLC",
  email: "Russel_Schumm@hotmail.com",
  externalId: "volt physical Ameliorated",
  firstLastName: "after",
  formW9Data: {
    addressLine1: "Bike",
    addressLine2: "Buckinghamshire functionalities Grocery",
    city: "New Baronbury",
    companyStructure: CompanyStructureMemberClientFormW9Info.LLCCorporationC,
    country: "Bulgaria",
    dob: "animated Minivan",
    ein: "Senior Mouse West",
    firstName: "Judd",
    lastName: "Hauck",
    legalBusinessName: "Towels",
    postalCode: "44747-2679",
    ssn: "Sausages",
    state: "round Lake Dollar",
  },
  labels: "South",
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
const batchId: string = "female";
const batchItemId: string = "program";

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
const batchId: string = "Van";
const batchItemId: string = "East";
const bulkCollaboratorItemUpdate: BulkCollaboratorItemUpdate = {
  collaboratorGroupId: "dock Quality redundant",
  collaboratorId: "Arizona Cotton extend",
  collaboratorStatus: CollaboratorStatusBulkCollaboratorItemUpdate.Active,
  company: "Connelly - Nolan",
  email: "Zakary.Towne@hotmail.com",
  externalId: "JBOD",
  firstLastName: "Quality guestbook driver",
  formW9Data: "pascal",
  labels: {
    "officia": "Lev",
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

