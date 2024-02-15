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
import { CreateBulkInvoiceBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  BulkInvoiceItemCreate,
  BulkInvoiceItemCreateAcceptedPaymentMethods,
  FeeHandlingConfig,
  InvoiceStatusBulkInvoiceItemCreate,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const bulkInvoiceItemCreate: BulkInvoiceItemCreate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemCreateAcceptedPaymentMethods.Ach,
  ],
  amount: 4893.82,
  bulkInvoiceBatchId: "<value>",
  creditFeeHandling: {},
  dueDate: "<value>",
  invoiceStatus: InvoiceStatusBulkInvoiceItemCreate.Paid,
  labels: {
    "key": "<value>",
  },
  lineItemDescription: "<value>",
};

  const res = await sdk.bulkInvoiceBatchItem.create(batchId, bulkInvoiceItemCreate);

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
| `bulkInvoiceItemCreate`                                                          | [shared.BulkInvoiceItemCreate](../../sdk/models/shared/bulkinvoiceitemcreate.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateBulkInvoiceBatchItemResponse](../../sdk/models/operations/createbulkinvoicebatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkInvoiceBatchItemRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const batchItemId: string = "<value>";

  const res = await sdk.bulkInvoiceBatchItem.get(batchId, batchItemId);

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

**Promise<[operations.GetBulkInvoiceBatchItemResponse](../../sdk/models/operations/getbulkinvoicebatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

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

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const batchItemId: string = "<value>";
const bulkInvoiceItemUpdate: BulkInvoiceItemUpdate = {
  acceptedPaymentMethods: [
    BulkInvoiceItemUpdateAcceptedPaymentMethods.LessThanNilGreaterThan,
  ],
  creditFeeHandling: {},
  labels: {
    "key": "<value>",
  },
};

  const res = await sdk.bulkInvoiceBatchItem.update(batchId, batchItemId, bulkInvoiceItemUpdate);

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
| `bulkInvoiceItemUpdate`                                                          | [shared.BulkInvoiceItemUpdate](../../sdk/models/shared/bulkinvoiceitemupdate.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateBulkInvoiceBatchItemResponse](../../sdk/models/operations/updatebulkinvoicebatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
