# bulkPayableBatch

### Available Operations

* [create](#create) - Create a bulk payable batch
* [delete](#delete) - Delete a bulk payable batch
* [get](#get) - Get a bulk payable batch
* [update](#update) - Update a bulk payable batch

## create

Create a bulk payable batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkPayableBatchResponse } from "openapi/dist/sdk/models/operations";
import { BulkPayableBatchCreateProcessingStrategy } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkPayableBatch.create({
  labels: "voluptate",
  processingStrategy: BulkPayableBatchCreateProcessingStrategy.Merge,
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
import { Wingspan } from "openapi";
import { DeleteBulkPayableBatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkPayableBatch.delete({
  batchId: "nam",
}).then((res: DeleteBulkPayableBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteBulkPayableBatchRequest](../../models/operations/deletebulkpayablebatchrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteBulkPayableBatchResponse](../../models/operations/deletebulkpayablebatchresponse.md)>**


## get

Get a bulk payable batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetBulkPayableBatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkPayableBatch.get({
  batchId: "eaque",
}).then((res: GetBulkPayableBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetBulkPayableBatchRequest](../../models/operations/getbulkpayablebatchrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetBulkPayableBatchResponse](../../models/operations/getbulkpayablebatchresponse.md)>**


## update

Update a bulk payable batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkPayableBatchResponse } from "openapi/dist/sdk/models/operations";
import { StatusBulkPayableBatchUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkPayableBatch.update({
  bulkPayableBatchUpdate: {
    labels: {
      "nemo": "voluptatibus",
    },
    status: StatusBulkPayableBatchUpdate.Open,
  },
  batchId: "fugiat",
}).then((res: UpdateBulkPayableBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateBulkPayableBatchRequest](../../models/operations/updatebulkpayablebatchrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateBulkPayableBatchResponse](../../models/operations/updatebulkpayablebatchresponse.md)>**

