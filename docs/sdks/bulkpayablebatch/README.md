# BulkPayableBatch

### Available Operations

* [create](#create) - Create a bulk payable batch
* [delete](#delete) - Delete a bulk payable batch
* [get](#get) - Get a bulk payable batch
* [update](#update) - Update a bulk payable batch

## create

Create a bulk payable batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkPayableBatchResponse } from "wingspan/dist/sdk/models/operations";
import { BulkPayableBatchCreateProcessingStrategy } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkPayableBatch.create({
  labels: "suscipit",
  processingStrategy: BulkPayableBatchCreateProcessingStrategy.Single,
}).then((res: CreateBulkPayableBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.BulkPayableBatchCreate](../../models/shared/bulkpayablebatchcreate.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateBulkPayableBatchResponse](../../models/operations/createbulkpayablebatchresponse.md)>**


## delete

Delete a bulk payable batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteBulkPayableBatchRequest, DeleteBulkPayableBatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "nobis";

sdk.bulkPayableBatch.delete(batchId).then((res: DeleteBulkPayableBatchResponse) => {
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

**Promise<[operations.DeleteBulkPayableBatchResponse](../../models/operations/deletebulkpayablebatchresponse.md)>**


## get

Get a bulk payable batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkPayableBatchRequest, GetBulkPayableBatchResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "eum";

sdk.bulkPayableBatch.get(batchId).then((res: GetBulkPayableBatchResponse) => {
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

**Promise<[operations.GetBulkPayableBatchResponse](../../models/operations/getbulkpayablebatchresponse.md)>**


## update

Update a bulk payable batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkPayableBatchRequest, UpdateBulkPayableBatchResponse } from "wingspan/dist/sdk/models/operations";
import { BulkPayableBatchUpdate, StatusBulkPayableBatchUpdate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "vero";
const bulkPayableBatchUpdate: BulkPayableBatchUpdate = {
  labels: "architecto",
  status: StatusBulkPayableBatchUpdate.Pending,
};

sdk.bulkPayableBatch.update(batchId, bulkPayableBatchUpdate).then((res: UpdateBulkPayableBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `batchId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier for a batch                                                  |
| `bulkPayableBatchUpdate`                                                       | [shared.BulkPayableBatchUpdate](../../models/shared/bulkpayablebatchupdate.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateBulkPayableBatchResponse](../../models/operations/updatebulkpayablebatchresponse.md)>**

