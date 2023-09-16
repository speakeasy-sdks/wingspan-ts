# BulkPayableBatchItem

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
const batchId: string = "nobis";
const bulkPayableItemCreate: BulkPayableItemCreate = {
  amount: 4287.69,
  attachmentId: "vero",
  bulkPayableBatchId: "aspernatur",
  bulkPayableItemMergeKey: "architecto",
  bulkPayableItemReference: "magnam",
  collaboratorEmail: "et",
  collaboratorExternalId: "excepturi",
  collaboratorId: "ullam",
  dueDate: "provident",
  labels: {
    "sint": "accusantium",
  },
  lineItemDescription: "mollitia",
  lineItemDetail: "reiciendis",
  paidDate: "mollitia",
  payableNotes: "ad",
  payableStatus: PayableStatusBulkPayableItemCreate.Approved,
  reimbursableExpense: "necessitatibus",
  workflowSubStatus: WorkflowSubStatusBulkPayableItemCreate.Submitted,
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
const batchId: string = "nemo";
const batchItemId: string = "quasi";

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
const batchId: string = "iure";
const batchItemId: string = "doloribus";
const bulkPayableItemUpdate: BulkPayableItemUpdate = {
  amount: 8919.24,
  attachmentId: "eius",
  bulkPayableBatchId: "maxime",
  bulkPayableItemMergeKey: "deleniti",
  bulkPayableItemReference: "facilis",
  collaboratorEmail: "in",
  collaboratorExternalId: "architecto",
  collaboratorId: "architecto",
  dueDate: "repudiandae",
  labels: "expedita",
  lineItemDescription: "nihil",
  lineItemDetail: "repellat",
  paidDate: "quibusdam",
  payableNotes: "sed",
  payableStatus: PayableStatusBulkPayableItemUpdate.LessThanNilGreaterThan,
  reimbursableExpense: false,
  workflowSubStatus: BulkPayableItemUpdateWorkflowSubStatus.Submitted,
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

