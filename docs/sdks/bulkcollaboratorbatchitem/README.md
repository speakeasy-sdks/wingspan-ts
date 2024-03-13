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
import { CreateBulkCollaboratorBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkCollaboratorItemCreate,
  CollaboratorStatusBulkCollaboratorItemCreate,
  CompanyStructureMemberClientFormW9Info,
  MemberClientFormW9Info,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const bulkCollaboratorItemCreate: BulkCollaboratorItemCreate = {
  formW9Data: {
    addressLine1: "4684 Bria Shores",
    city: "Fort Peytonbury",
    companyStructure: CompanyStructureMemberClientFormW9Info.Partnership,
    country: "Togo",
    postalCode: "41307",
    state: "South Carolina",
  },
  labels: {
    "key": "<value>",
  },
};

  const res = await sdk.bulkCollaboratorBatchItem.create(batchId, bulkCollaboratorItemCreate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `batchId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for a batch                                                              |
| `bulkCollaboratorItemCreate`                                                               | [shared.BulkCollaboratorItemCreate](../../sdk/models/shared/bulkcollaboratoritemcreate.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateBulkCollaboratorBatchItemResponse](../../sdk/models/operations/createbulkcollaboratorbatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get a bulk collaborator batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkCollaboratorBatchItemRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const batchItemId: string = "<value>";

  const res = await sdk.bulkCollaboratorBatchItem.get(batchId, batchItemId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `batchItemId`                                                | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for an item in a batch                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkCollaboratorBatchItemResponse](../../sdk/models/operations/getbulkcollaboratorbatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const batchItemId: string = "<value>";
const bulkCollaboratorItemUpdate: BulkCollaboratorItemUpdate = {
  formW9Data: {
    addressLine1: "050 Mellie Well",
    city: "Lake Marlee",
    companyStructure: CompanyStructureMemberClientFormW9Info.CorporationS,
    country: "Jersey",
    postalCode: "10284-4337",
    state: "Illinois",
  },
  labels: {
    "key": "<value>",
  },
};

  const res = await sdk.bulkCollaboratorBatchItem.update(batchId, batchItemId, bulkCollaboratorItemUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `batchId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for a batch                                                              |
| `batchItemId`                                                                              | *string*                                                                                   | :heavy_check_mark:                                                                         | Unique identifier for an item in a batch                                                   |
| `bulkCollaboratorItemUpdate`                                                               | [shared.BulkCollaboratorItemUpdate](../../sdk/models/shared/bulkcollaboratoritemupdate.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateBulkCollaboratorBatchItemResponse](../../sdk/models/operations/updatebulkcollaboratorbatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
