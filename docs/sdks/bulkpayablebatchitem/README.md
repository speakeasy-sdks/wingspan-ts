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
import { CreateBulkPayableBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkPayableItemCreate,
  PayableStatusBulkPayableItemCreate,
  WorkflowSubStatusBulkPayableItemCreate,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkPayableItemCreate: BulkPayableItemCreate = {
  amount: 4865.89,
  bulkPayableBatchId: "string",
  dueDate: "string",
  labels: {
    "key": "string",
  },
  lineItemDescription: "string",
  payableStatus: PayableStatusBulkPayableItemCreate.Approved,
};

  const res = await sdk.bulkPayableBatchItem.create(batchId, bulkPayableItemCreate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `batchId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Unique identifier for a batch                                                    |
| `bulkPayableItemCreate`                                                          | [shared.BulkPayableItemCreate](../../sdk/models/shared/bulkpayableitemcreate.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateBulkPayableBatchItemResponse](../../sdk/models/operations/createbulkpayablebatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkPayableBatchItemRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";

  const res = await sdk.bulkPayableBatchItem.get(batchId, batchItemId);

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

**Promise<[operations.GetBulkPayableBatchItemResponse](../../sdk/models/operations/getbulkpayablebatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a bulk payable batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkPayableBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkPayableItemUpdate,
  BulkPayableItemUpdateWorkflowSubStatus,
  PayableStatusBulkPayableItemUpdate,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";
const bulkPayableItemUpdate: BulkPayableItemUpdate = {
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkPayableBatchItem.update(batchId, batchItemId, bulkPayableItemUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `batchId`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | Unique identifier for a batch                                                    |
| `batchItemId`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | Unique identifier for an item in a batch                                         |
| `bulkPayableItemUpdate`                                                          | [shared.BulkPayableItemUpdate](../../sdk/models/shared/bulkpayableitemupdate.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateBulkPayableBatchItemResponse](../../sdk/models/operations/updatebulkpayablebatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
