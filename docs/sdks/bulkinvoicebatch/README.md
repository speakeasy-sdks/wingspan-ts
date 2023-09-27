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
import { CreateBulkInvoiceBatchResponse } from "wingspan/dist/sdk/models/operations";
import { BulkInvoiceBatchCreateProcessingStrategy } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkInvoiceBatch.create({
  labels: "magni",
  processingStrategy: BulkInvoiceBatchCreateProcessingStrategy.Single,
}).then((res: CreateBulkInvoiceBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetBulkInvoiceBatchRequest, GetBulkInvoiceBatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "ipsam";

sdk.bulkInvoiceBatch.get(batchId).then((res: GetBulkInvoiceBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateBulkInvoiceBatchRequest, UpdateBulkInvoiceBatchResponse } from "wingspan/dist/sdk/models/operations";
import { BulkInvoiceBatchUpdate, StatusBulkInvoiceBatchUpdate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "alias";
const bulkInvoiceBatchUpdate: BulkInvoiceBatchUpdate = {
  labels: "dolorum",
  status: StatusBulkInvoiceBatchUpdate.Complete,
};

sdk.bulkInvoiceBatch.update(batchId, bulkInvoiceBatchUpdate).then((res: UpdateBulkInvoiceBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `batchId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier for a batch                                                  |
| `bulkInvoiceBatchUpdate`                                                       | [shared.BulkInvoiceBatchUpdate](../../models/shared/bulkinvoicebatchupdate.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateBulkInvoiceBatchResponse](../../models/operations/updatebulkinvoicebatchresponse.md)>**

