# BulkInvoiceBatch
(*bulkInvoiceBatch*)

### Available Operations

* [create](#create) - Create a bulk invoice batch
* [get](#get) - Get a bulk invoice batch
* [update](#update) - Update a bulk invoice batch

## create

Create a bulk invoice batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { BulkInvoiceBatchCreateProcessingStrategy } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.bulkInvoiceBatch.create({
    labels: {
      "key": "string",
    },
    processingStrategy: BulkInvoiceBatchCreateProcessingStrategy.Merge,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.BulkInvoiceBatchCreate](../../sdk/models/shared/bulkinvoicebatchcreate.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateBulkInvoiceBatchResponse](../../sdk/models/operations/createbulkinvoicebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get a bulk invoice batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkInvoiceBatchRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkInvoiceBatch.get(batchId);

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
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkInvoiceBatchResponse](../../sdk/models/operations/getbulkinvoicebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update a bulk invoice batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkInvoiceBatchRequest } from "wingspan/dist/sdk/models/operations";
import { BulkInvoiceBatchUpdate, StatusBulkInvoiceBatchUpdate } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkInvoiceBatchUpdate: BulkInvoiceBatchUpdate = {
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkInvoiceBatch.update(batchId, bulkInvoiceBatchUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `batchId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Unique identifier for a batch                                                      |
| `bulkInvoiceBatchUpdate`                                                           | [shared.BulkInvoiceBatchUpdate](../../sdk/models/shared/bulkinvoicebatchupdate.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateBulkInvoiceBatchResponse](../../sdk/models/operations/updatebulkinvoicebatchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
