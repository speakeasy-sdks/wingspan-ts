# bulkInvoiceBatch

### Available Operations

* [create](#create) - Create a bulk invoice batch
* [get](#get) - Get a bulk invoice batch
* [update](#update) - Update a bulk invoice batch

## create

Create a bulk invoice batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkInvoiceBatchResponse } from "openapi/dist/sdk/models/operations";
import { BulkInvoiceBatchCreateProcessingStrategy } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkInvoiceBatch.create({
  labels: {
    "eum": "vero",
  },
  processingStrategy: BulkInvoiceBatchCreateProcessingStrategy.Merge,
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
import { Wingspan } from "openapi";
import { GetBulkInvoiceBatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkInvoiceBatch.get({
  batchId: "architecto",
}).then((res: GetBulkInvoiceBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetBulkInvoiceBatchRequest](../../models/operations/getbulkinvoicebatchrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetBulkInvoiceBatchResponse](../../models/operations/getbulkinvoicebatchresponse.md)>**


## update

Update a bulk invoice batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkInvoiceBatchResponse } from "openapi/dist/sdk/models/operations";
import { StatusBulkInvoiceBatchUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkInvoiceBatch.update({
  bulkInvoiceBatchUpdate: {
    labels: "et",
    status: StatusBulkInvoiceBatchUpdate.Complete,
  },
  batchId: "ullam",
}).then((res: UpdateBulkInvoiceBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateBulkInvoiceBatchRequest](../../models/operations/updatebulkinvoicebatchrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateBulkInvoiceBatchResponse](../../models/operations/updatebulkinvoicebatchresponse.md)>**

