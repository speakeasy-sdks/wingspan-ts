# BulkInvoiceBatchItem
(*bulkInvoiceBatchItem*)

### Available Operations

* [create](#create) - Create a bulk invoice batch item
* [get](#get) - Get a bulk invoice batch item
* [update](#update) - Update a bulk invoice batch item

## create

Create a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkInvoiceBatchItemRequest, CreateBulkInvoiceBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  BulkInvoiceItemCreate,
  BulkInvoiceItemCreateAcceptedPaymentMethods,
  FeeHandlingConfig,
  InvoiceStatusBulkInvoiceItemCreate,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "tempora";
const bulkInvoiceItemCreate: BulkInvoiceItemCreate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemCreateAcceptedPaymentMethods.Manual,
  ],
  amount: 7351.94,
  bulkInvoiceBatchId: "labore",
  bulkInvoiceItemMergeKey: "delectus",
  bulkInvoiceItemReference: "eum",
  clientEmail: "non",
  clientExternalId: "eligendi",
  creditFeeHandling: {
    clientAbsolutePercentage: 3960.98,
    clientPays: 5920.42,
    memberPays: 8960.39,
  },
  dueDate: "sint",
  invoiceNotes: "officia",
  invoiceStatus: InvoiceStatusBulkInvoiceItemCreate.Open,
  labels: {
    "a": "dolorum",
  },
  lineItemDescription: "in",
  lineItemDetail: "in",
  memberClientId: "illum",
  paidDate: "maiores",
  projectName: "rerum",
  reimbursableExpense: "magnam",
  sendDate: "cumque",
};

sdk.bulkInvoiceBatchItem.create(batchId, bulkInvoiceItemCreate).then((res: CreateBulkInvoiceBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `batchId`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier for a batch                                                |
| `bulkInvoiceItemCreate`                                                      | [shared.BulkInvoiceItemCreate](../../models/shared/bulkinvoiceitemcreate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreateBulkInvoiceBatchItemResponse](../../models/operations/createbulkinvoicebatchitemresponse.md)>**


## get

Get a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkInvoiceBatchItemRequest, GetBulkInvoiceBatchItemResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "facere";
const batchItemId: string = "ea";

sdk.bulkInvoiceBatchItem.get(batchId, batchItemId).then((res: GetBulkInvoiceBatchItemResponse) => {
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

**Promise<[operations.GetBulkInvoiceBatchItemResponse](../../models/operations/getbulkinvoicebatchitemresponse.md)>**


## update

Update a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkInvoiceBatchItemRequest, UpdateBulkInvoiceBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  BulkInvoiceItemUpdate,
  BulkInvoiceItemUpdateAcceptedPaymentMethods,
  FeeHandlingConfig,
  InvoiceStatusBulkInvoiceItemUpdate,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "aliquid";
const batchItemId: string = "laborum";
const bulkInvoiceItemUpdate: BulkInvoiceItemUpdate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemUpdateAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  amount: 2497.96,
  bulkInvoiceBatchId: "occaecati",
  bulkInvoiceItemMergeKey: "enim",
  bulkInvoiceItemReference: "accusamus",
  clientEmail: "delectus",
  clientExternalId: "quidem",
  creditFeeHandling: {
    clientAbsolutePercentage: 7252.55,
    clientPays: 6596.69,
    memberPays: 5013.24,
  },
  dueDate: "deleniti",
  invoiceNotes: "sapiente",
  invoiceStatus: InvoiceStatusBulkInvoiceItemUpdate.Open,
  labels: {
    "nisi": "vel",
  },
  lineItemDescription: "natus",
  lineItemDetail: "omnis",
  memberClientId: "molestiae",
  paidDate: "perferendis",
  projectName: "nihil",
  reimbursableExpense: "distinctio",
  sendDate: "id",
};

sdk.bulkInvoiceBatchItem.update(batchId, batchItemId, bulkInvoiceItemUpdate).then((res: UpdateBulkInvoiceBatchItemResponse) => {
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
| `bulkInvoiceItemUpdate`                                                      | [shared.BulkInvoiceItemUpdate](../../models/shared/bulkinvoiceitemupdate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateBulkInvoiceBatchItemResponse](../../models/operations/updatebulkinvoicebatchitemresponse.md)>**

