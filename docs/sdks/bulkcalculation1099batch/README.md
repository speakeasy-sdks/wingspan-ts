# BulkCalculation1099Batch

### Available Operations

* [create](#create) - Create a bulk calculation1099 batch
* [get](#get) - Get a bulk calculation1099 batch
* [update](#update) - Update a bulk calculation1099 batch

## create

Create a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkCalculation1099BatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCalculation1099Batch.create({
  labels: "quod",
}).then((res: CreateBulkCalculation1099BatchResponse) => {
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

**Promise<[operations.CreateBulkCalculation1099BatchResponse](../../models/operations/createbulkcalculation1099batchresponse.md)>**


## get

Get a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkCalculation1099BatchRequest, GetBulkCalculation1099BatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "quod";

sdk.bulkCalculation1099Batch.get(batchId).then((res: GetBulkCalculation1099BatchResponse) => {
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

**Promise<[operations.GetBulkCalculation1099BatchResponse](../../models/operations/getbulkcalculation1099batchresponse.md)>**


## update

Update a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkCalculation1099BatchRequest, UpdateBulkCalculation1099BatchResponse } from "wingspan/dist/sdk/models/operations";
import { BulkBatchUpdate, StatusBulkBatchUpdate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "esse";
const bulkBatchUpdate: BulkBatchUpdate = {
  labels: {
    "porro": "dolorum",
  },
  status: StatusBulkBatchUpdate.Open,
};

sdk.bulkCalculation1099Batch.update(batchId, bulkBatchUpdate).then((res: UpdateBulkCalculation1099BatchResponse) => {
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

**Promise<[operations.UpdateBulkCalculation1099BatchResponse](../../models/operations/updatebulkcalculation1099batchresponse.md)>**

