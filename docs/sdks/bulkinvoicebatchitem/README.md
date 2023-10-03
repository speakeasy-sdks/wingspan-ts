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
const batchId: string = "online";
const bulkInvoiceItemCreate: BulkInvoiceItemCreate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemCreateAcceptedPaymentMethods.Manual,
  ],
  amount: 8592.13,
  bulkInvoiceBatchId: "innovative blue",
  bulkInvoiceItemMergeKey: "grey technology East",
  bulkInvoiceItemReference: "evolve",
  clientEmail: "fuchsia Gasoline Screen",
  clientExternalId: "physical Ameliorated",
  creditFeeHandling: "after",
  dueDate: "Intelligent Fish",
  invoiceNotes: "Fiat",
  invoiceStatus: InvoiceStatusBulkInvoiceItemCreate.Cancelled,
  labels: "Account",
  lineItemDescription: "Profound",
  lineItemDetail: "metrics",
  memberClientId: "Minivan",
  paidDate: "Senior Mouse West",
  projectName: "Towels likewise",
  reimbursableExpense: "Praseodymium",
  sendDate: "Rubber silver Indiana",
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
const batchId: string = "female";
const batchItemId: string = "program";

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
const batchId: string = "Van";
const batchItemId: string = "East";
const bulkInvoiceItemUpdate: BulkInvoiceItemUpdate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemUpdateAcceptedPaymentMethods.Manual,
  ],
  amount: 9914.64,
  bulkInvoiceBatchId: "Quality",
  bulkInvoiceItemMergeKey: "invoice Arizona",
  bulkInvoiceItemReference: "mostly",
  clientEmail: "dynamic white",
  clientExternalId: "Carolina syndicate",
  creditFeeHandling: "implement",
  dueDate: "Baht Quality",
  invoiceNotes: "Home users Sharable",
  invoiceStatus: InvoiceStatusBulkInvoiceItemUpdate.Paid,
  labels: "Northeast",
  lineItemDescription: "Northwest Fantastic",
  lineItemDetail: "Internal invoice",
  memberClientId: "brightly",
  paidDate: "frictionless haptic modulo",
  projectName: "navigating Diesel Avon",
  reimbursableExpense: "hungrily",
  sendDate: "Global Northeast Xenogender",
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

