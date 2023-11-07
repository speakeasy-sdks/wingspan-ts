# BulkInvoiceBatchItem
(*.bulkInvoiceBatchItem*)

### Available Operations

* [create](#create) - Create a bulk invoice batch item
* [get](#get) - Get a bulk invoice batch item
* [update](#update) - Update a bulk invoice batch item

## create

Create a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkInvoiceBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkInvoiceItemCreate,
  BulkInvoiceItemCreateAcceptedPaymentMethods,
  FeeHandlingConfig,
  InvoiceStatusBulkInvoiceItemCreate,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkInvoiceItemCreate: BulkInvoiceItemCreate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemCreateAcceptedPaymentMethods.Ach,
  ],
  amount: 4893.82,
  bulkInvoiceBatchId: "string",
  creditFeeHandling: {},
  dueDate: "string",
  invoiceStatus: InvoiceStatusBulkInvoiceItemCreate.Paid,
  labels: {
    "key": "string",
  },
  lineItemDescription: "string",
};

  const res = await sdk.bulkInvoiceBatchItem.create(batchId, bulkInvoiceItemCreate);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetBulkInvoiceBatchItemRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";

  const res = await sdk.bulkInvoiceBatchItem.get(batchId, batchItemId);


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

**Promise<[operations.GetBulkInvoiceBatchItemResponse](../../models/operations/getbulkinvoicebatchitemresponse.md)>**


## update

Update a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkInvoiceBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkInvoiceItemUpdate,
  BulkInvoiceItemUpdateAcceptedPaymentMethods,
  FeeHandlingConfig,
  InvoiceStatusBulkInvoiceItemUpdate,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";
const bulkInvoiceItemUpdate: BulkInvoiceItemUpdate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemUpdateAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  creditFeeHandling: {},
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkInvoiceBatchItem.update(batchId, batchItemId, bulkInvoiceItemUpdate);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

