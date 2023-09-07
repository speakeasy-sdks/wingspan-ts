# bulkCalculation1099Batch

### Available Operations

* [create](#create) - Create a bulk calculation1099 batch
* [get](#get) - Get a bulk calculation1099 batch
* [update](#update) - Update a bulk calculation1099 batch

## create

Create a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkCalculation1099BatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCalculation1099Batch.create({
  labels: {
    "possimus": "aut",
  },
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
import { Wingspan } from "openapi";
import { GetBulkCalculation1099BatchResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCalculation1099Batch.get({
  batchId: "quasi",
}).then((res: GetBulkCalculation1099BatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetBulkCalculation1099BatchRequest](../../models/operations/getbulkcalculation1099batchrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetBulkCalculation1099BatchResponse](../../models/operations/getbulkcalculation1099batchresponse.md)>**


## update

Update a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkCalculation1099BatchResponse } from "openapi/dist/sdk/models/operations";
import { StatusBulkBatchUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkCalculation1099Batch.update({
  bulkBatchUpdate: {
    labels: {
      "temporibus": "laborum",
    },
    status: StatusBulkBatchUpdate.Open,
  },
  batchId: "reiciendis",
}).then((res: UpdateBulkCalculation1099BatchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdateBulkCalculation1099BatchRequest](../../models/operations/updatebulkcalculation1099batchrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdateBulkCalculation1099BatchResponse](../../models/operations/updatebulkcalculation1099batchresponse.md)>**

