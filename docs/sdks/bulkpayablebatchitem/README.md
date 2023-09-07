# bulkPayableBatchItem

### Available Operations

* [create](#create) - Create a bulk payable batch item
* [get](#get) - Get a bulk payable batch item
* [update](#update) - Update a bulk payable batch item

## create

Create a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkPayableBatchItemResponse } from "openapi/dist/sdk/models/operations";
import { PayableStatusBulkPayableItemCreate, WorkflowSubStatusBulkPayableItemCreate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkPayableBatchItem.create({
  bulkPayableItemCreate: {
    amount: 2307.42,
    attachmentId: "aut",
    bulkPayableBatchId: "cumque",
    bulkPayableItemMergeKey: "corporis",
    bulkPayableItemReference: "hic",
    collaboratorEmail: "libero",
    collaboratorExternalId: "nobis",
    collaboratorId: "dolores",
    dueDate: "quis",
    labels: {
      "dignissimos": "eaque",
    },
    lineItemDescription: "quis",
    lineItemDetail: "nesciunt",
    paidDate: "eos",
    payableNotes: "perferendis",
    payableStatus: PayableStatusBulkPayableItemCreate.Draft,
    reimbursableExpense: false,
    workflowSubStatus: WorkflowSubStatusBulkPayableItemCreate.Submitted,
  },
  batchId: "dolor",
}).then((res: CreateBulkPayableBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateBulkPayableBatchItemRequest](../../models/operations/createbulkpayablebatchitemrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateBulkPayableBatchItemResponse](../../models/operations/createbulkpayablebatchitemresponse.md)>**


## get

Get a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetBulkPayableBatchItemResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkPayableBatchItem.get({
  batchId: "vero",
  batchItemId: "nostrum",
}).then((res: GetBulkPayableBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetBulkPayableBatchItemRequest](../../models/operations/getbulkpayablebatchitemrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetBulkPayableBatchItemResponse](../../models/operations/getbulkpayablebatchitemresponse.md)>**


## update

Update a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkPayableBatchItemResponse } from "openapi/dist/sdk/models/operations";
import { BulkPayableItemUpdateWorkflowSubStatus, PayableStatusBulkPayableItemUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkPayableBatchItem.update({
  bulkPayableItemUpdate: {
    amount: 9441.2,
    attachmentId: "recusandae",
    bulkPayableBatchId: "omnis",
    bulkPayableItemMergeKey: "facilis",
    bulkPayableItemReference: "perspiciatis",
    collaboratorEmail: "voluptatem",
    collaboratorExternalId: "porro",
    collaboratorId: "consequuntur",
    dueDate: "blanditiis",
    labels: {
      "eaque": "occaecati",
    },
    lineItemDescription: "rerum",
    lineItemDetail: "adipisci",
    paidDate: "asperiores",
    payableNotes: "earum",
    payableStatus: PayableStatusBulkPayableItemUpdate.Open,
    reimbursableExpense: false,
    workflowSubStatus: BulkPayableItemUpdateWorkflowSubStatus.LessThanNilGreaterThan,
  },
  batchId: "deleniti",
  batchItemId: "pariatur",
}).then((res: UpdateBulkPayableBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateBulkPayableBatchItemRequest](../../models/operations/updatebulkpayablebatchitemrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateBulkPayableBatchItemResponse](../../models/operations/updatebulkpayablebatchitemresponse.md)>**

