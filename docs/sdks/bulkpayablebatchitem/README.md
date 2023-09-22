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
const batchId: string = "et";
const bulkPayableItemCreate: BulkPayableItemCreate = {
  amount: 5699.65,
  attachmentId: "ullam",
  bulkPayableBatchId: "provident",
  bulkPayableItemMergeKey: "quos",
  bulkPayableItemReference: "sint",
  collaboratorEmail: "accusantium",
  collaboratorExternalId: "mollitia",
  collaboratorId: "reiciendis",
  dueDate: "mollitia",
  labels: "eum",
  lineItemDescription: "dolor",
  lineItemDetail: "necessitatibus",
  paidDate: "odit",
  payableNotes: "nemo",
  payableStatus: PayableStatusBulkPayableItemCreate.Draft,
  reimbursableExpense: "doloribus",
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
const batchId: string = "eius";
const batchItemId: string = "maxime";

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
const batchId: string = "deleniti";
const batchItemId: string = "facilis";
const bulkPayableItemUpdate: BulkPayableItemUpdate = {
  amount: 4479.26,
  attachmentId: "architecto",
  bulkPayableBatchId: "architecto",
  bulkPayableItemMergeKey: "repudiandae",
  bulkPayableItemReference: "ullam",
  collaboratorEmail: "expedita",
  collaboratorExternalId: "nihil",
  collaboratorId: "repellat",
  dueDate: "quibusdam",
  labels: "saepe",
  lineItemDescription: "pariatur",
  lineItemDetail: "accusantium",
  paidDate: "consequuntur",
  payableNotes: "praesentium",
  payableStatus: PayableStatusBulkPayableItemUpdate.Paid,
  reimbursableExpense: "sunt",
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

