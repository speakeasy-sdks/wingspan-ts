# bulkClientBatch

### Available Operations

* [create](#create) - Create a bulk client batch
* [get](#get) - Get a bulk client batch
* [update](#update) - Update a bulk client batch

## create

Create a bulk client batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkClientBatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkClientBatch.create({
  labels: "iusto",
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
import { Wingspan } from "openapi";
import { GetBulkClientBatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkClientBatch.get({
  batchId: "dicta",
}).then((res: GetBulkClientBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetBulkClientBatchRequest](../../models/operations/getbulkclientbatchrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetBulkClientBatchResponse](../../models/operations/getbulkclientbatchresponse.md)>**


## update

Update a bulk client batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkClientBatchResponse } from "openapi/dist/sdk/models/operations";
import { StatusBulkBatchUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkClientBatch.update({
  bulkBatchUpdate: {
    labels: {
      "enim": "accusamus",
    },
    status: StatusBulkBatchUpdate.Processing,
  },
  batchId: "repudiandae",
}).then((res: UpdateBulkClientBatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateBulkClientBatchRequest](../../models/operations/updatebulkclientbatchrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateBulkClientBatchResponse](../../models/operations/updatebulkclientbatchresponse.md)>**

