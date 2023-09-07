# bulkInvoiceBatchItem

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
const batchId: string = "alias";
const bulkInvoiceItemCreate: BulkInvoiceItemCreate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemCreateAcceptedPaymentMethods.Credit,
  ],
  amount: 6778.17,
  bulkInvoiceBatchId: "excepturi",
  bulkInvoiceItemMergeKey: "tempora",
  bulkInvoiceItemReference: "facilis",
  clientEmail: "tempore",
  clientExternalId: "labore",
  creditFeeHandling: {
    clientAbsolutePercentage: 4332.88,
    clientPays: 2487.53,
    memberPays: 7561.07,
  },
  dueDate: "sint",
  invoiceNotes: "aliquid",
  invoiceStatus: InvoiceStatusBulkInvoiceItemCreate.Approved,
  labels: {
    "sint": "officia",
  },
  lineItemDescription: "dolor",
  lineItemDetail: "debitis",
  memberClientId: "a",
  paidDate: "dolorum",
  projectName: "in",
  reimbursableExpense: "illum",
  sendDate: "maiores",
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
const batchId: string = "rerum";
const batchItemId: string = "dicta";

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
const batchId: string = "magnam";
const batchItemId: string = "cumque";
const bulkInvoiceItemUpdate: BulkInvoiceItemUpdate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemUpdateAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  amount: 4118.2,
  bulkInvoiceBatchId: "aliquid",
  bulkInvoiceItemMergeKey: "laborum",
  bulkInvoiceItemReference: "accusamus",
  clientEmail: "non",
  clientExternalId: "occaecati",
  creditFeeHandling: "accusamus",
  dueDate: "delectus",
  invoiceNotes: "quidem",
  invoiceStatus: InvoiceStatusBulkInvoiceItemUpdate.Paid,
  labels: {
    "id": "blanditiis",
  },
  lineItemDescription: "deleniti",
  lineItemDetail: "sapiente",
  memberClientId: "amet",
  paidDate: "deserunt",
  projectName: "nisi",
  reimbursableExpense: "natus",
  sendDate: "omnis",
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

