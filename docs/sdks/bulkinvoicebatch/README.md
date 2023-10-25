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

(async() => {
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
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.BulkInvoiceBatchCreate](../../models/shared/bulkinvoicebatchcreate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateBulkInvoiceBatchResponse](../../models/operations/createbulkinvoicebatchresponse.md)>**


## get

Get a bulk invoice batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkInvoiceBatchRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkInvoiceBatch.get(batchId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkInvoiceBatchResponse](../../models/operations/getbulkinvoicebatchresponse.md)>**


## update

Update a bulk invoice batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkInvoiceBatchRequest } from "wingspan/dist/sdk/models/operations";
import { BulkInvoiceBatchUpdate, StatusBulkInvoiceBatchUpdate } from "wingspan/dist/sdk/models/shared";

(async() => {
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
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `batchId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier for a batch                                                  |
| `bulkInvoiceBatchUpdate`                                                       | [shared.BulkInvoiceBatchUpdate](../../models/shared/bulkinvoicebatchupdate.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateBulkInvoiceBatchResponse](../../models/operations/updatebulkinvoicebatchresponse.md)>**

