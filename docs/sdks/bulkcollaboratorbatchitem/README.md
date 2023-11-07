# BulkCollaboratorBatchItem
(*.bulkCollaboratorBatchItem*)

### Available Operations

* [create](#create) - Create a bulk collaborator batch item
* [get](#get) - Get a bulk collaborator batch item
* [update](#update) - Update a bulk collaborator batch item

## create

Create a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkCollaboratorBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkCollaboratorItemCreate,
  CollaboratorStatusBulkCollaboratorItemCreate,
  CompanyStructureMemberClientFormW9Info,
  MemberClientFormW9Info,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkCollaboratorItemCreate: BulkCollaboratorItemCreate = {
  formW9Data: {
    addressLine1: "string",
    city: "Jenafurt",
    companyStructure: CompanyStructureMemberClientFormW9Info.CorporationC,
    country: "Iraq",
    postalCode: "17097",
    state: "string",
  },
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkCollaboratorBatchItem.create(batchId, bulkCollaboratorItemCreate);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetBulkCollaboratorBatchItemRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";

  const res = await sdk.bulkCollaboratorBatchItem.get(batchId, batchItemId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UpdateBulkCollaboratorBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkCollaboratorItemUpdate,
  CollaboratorStatusBulkCollaboratorItemUpdate,
  CompanyStructureMemberClientFormW9Info,
  MemberClientFormW9Info,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";
const bulkCollaboratorItemUpdate: BulkCollaboratorItemUpdate = {
  formW9Data: {
    addressLine1: "string",
    city: "Ann Arbor",
    companyStructure: CompanyStructureMemberClientFormW9Info.LLCCorporationS,
    country: "American Samoa",
    postalCode: "79266",
    state: "string",
  },
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkCollaboratorBatchItem.update(batchId, batchItemId, bulkCollaboratorItemUpdate);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

