# BulkPayableBatchItem
(*bulkPayableBatchItem*)

### Available Operations

* [create](#create) - Create a bulk payable batch item
* [get](#get) - Get a bulk payable batch item
* [update](#update) - Update a bulk payable batch item

## create

Create a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkPayableBatchItemRequest, CreateBulkPayableBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  BulkPayableItemCreate,
  PayableStatusBulkPayableItemCreate,
  WorkflowSubStatusBulkPayableItemCreate,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "online";
const bulkPayableItemCreate: BulkPayableItemCreate = {
  amount: 6384.24,
  attachmentId: "Money blue shred",
  bulkPayableBatchId: "technology East",
  bulkPayableItemMergeKey: "evolve",
  bulkPayableItemReference: "fuchsia Gasoline Screen",
  collaboratorEmail: "physical Ameliorated",
  collaboratorExternalId: "after",
  collaboratorId: "Intelligent Fish",
  dueDate: "Fiat",
  labels: {
    "qui": "Account",
  },
  lineItemDescription: "Profound",
  lineItemDetail: "metrics",
  paidDate: "Minivan",
  payableNotes: "Senior Mouse West",
  payableStatus: PayableStatusBulkPayableItemCreate.Approved,
  reimbursableExpense: "Edinburg",
  workflowSubStatus: WorkflowSubStatusBulkPayableItemCreate.LessThanNilGreaterThan,
};

sdk.bulkPayableBatchItem.create(batchId, bulkPayableItemCreate).then((res: CreateBulkPayableBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `batchId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier for a batch                                                |
| `bulkPayableItemCreate`                                                      | [shared.BulkPayableItemCreate](../../models/shared/bulkpayableitemcreate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateBulkPayableBatchItemResponse](../../models/operations/createbulkpayablebatchitemresponse.md)>**


## get

Get a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkPayableBatchItemRequest, GetBulkPayableBatchItemResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "female";
const batchItemId: string = "program";

sdk.bulkPayableBatchItem.get(batchId, batchItemId).then((res: GetBulkPayableBatchItemResponse) => {
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

**Promise<[operations.GetBulkPayableBatchItemResponse](../../models/operations/getbulkpayablebatchitemresponse.md)>**


## update

Update a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkPayableBatchItemRequest, UpdateBulkPayableBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  BulkPayableItemUpdate,
  BulkPayableItemUpdateWorkflowSubStatus,
  PayableStatusBulkPayableItemUpdate,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "Van";
const batchItemId: string = "East";
const bulkPayableItemUpdate: BulkPayableItemUpdate = {
  amount: 7084.55,
  attachmentId: "Metal cheater Islands",
  bulkPayableBatchId: "withdrawal extend",
  bulkPayableItemMergeKey: "bifurcated",
  bulkPayableItemReference: "silver immediately",
  collaboratorEmail: "East",
  collaboratorExternalId: "Bicycle guestbook",
  collaboratorId: "Galveston pascal",
  dueDate: "Division Northeast Wooden",
  labels: "Jaguar",
  lineItemDescription: "visionary Buckinghamshire frictionless",
  lineItemDetail: "parse possimus",
  paidDate: "Turkish Avon",
  payableNotes: "hungrily",
  payableStatus: PayableStatusBulkPayableItemUpdate.Cancelled,
  reimbursableExpense: false,
  workflowSubStatus: BulkPayableItemUpdateWorkflowSubStatus.LessThanNilGreaterThan,
};

sdk.bulkPayableBatchItem.update(batchId, batchItemId, bulkPayableItemUpdate).then((res: UpdateBulkPayableBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `batchId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier for a batch                                                |
| `batchItemId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier for an item in a batch                                     |
| `bulkPayableItemUpdate`                                                      | [shared.BulkPayableItemUpdate](../../models/shared/bulkpayableitemupdate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateBulkPayableBatchItemResponse](../../models/operations/updatebulkpayablebatchitemresponse.md)>**

