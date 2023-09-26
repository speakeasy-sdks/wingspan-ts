# BulkClientBatch

### Available Operations

* [create](#create) - Create a bulk client batch
* [get](#get) - Get a bulk client batch
* [update](#update) - Update a bulk client batch

## create

Create a bulk client batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkClientBatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkClientBatch.create({
  labels: "iste",
}).then((res: CreateBulkClientBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `request`                                                        | [shared.BulkBatchCreate](../../models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                               | The request object to use for the request.                       |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateBulkClientBatchResponse](../../models/operations/createbulkclientbatchresponse.md)>**


## get

Get a bulk client batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkClientBatchRequest, GetBulkClientBatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "dolor";

sdk.bulkClientBatch.get(batchId).then((res: GetBulkClientBatchResponse) => {
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

**Promise<[operations.GetBulkClientBatchResponse](../../models/operations/getbulkclientbatchresponse.md)>**


## update

Update a bulk client batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkClientBatchRequest, UpdateBulkClientBatchResponse } from "wingspan/dist/sdk/models/operations";
import { BulkBatchUpdate, StatusBulkBatchUpdate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "natus";
const bulkBatchUpdate: BulkBatchUpdate = {
  labels: "hic",
  status: StatusBulkBatchUpdate.LessThanNilGreaterThan,
};

sdk.bulkClientBatch.update(batchId, bulkBatchUpdate).then((res: UpdateBulkClientBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `batchId`                                                        | *string*                                                         | :heavy_check_mark:                                               | Unique identifier for a batch                                    |
| `bulkBatchUpdate`                                                | [shared.BulkBatchUpdate](../../models/shared/bulkbatchupdate.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateBulkClientBatchResponse](../../models/operations/updatebulkclientbatchresponse.md)>**

