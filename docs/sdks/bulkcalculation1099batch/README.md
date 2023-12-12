# BulkCalculation1099Batch
(*bulkCalculation1099Batch*)

### Available Operations

* [create](#create) - Create a bulk calculation1099 batch
* [get](#get) - Get a bulk calculation1099 batch
* [update](#update) - Update a bulk calculation1099 batch

## create

Create a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.bulkCalculation1099Batch.create({
    labels: {
      "key": "string",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.BulkBatchCreate](../../sdk/models/shared/bulkbatchcreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateBulkCalculation1099BatchResponse](../../sdk/models/operations/createbulkcalculation1099batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkCalculation1099BatchRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkCalculation1099Batch.get(batchId);

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

**Promise<[operations.GetBulkCalculation1099BatchResponse](../../sdk/models/operations/getbulkcalculation1099batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update a bulk calculation1099 batch

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkCalculation1099BatchRequest } from "wingspan/dist/sdk/models/operations";
import { BulkBatchUpdate, StatusBulkBatchUpdate } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkBatchUpdate: BulkBatchUpdate = {
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkCalculation1099Batch.update(batchId, bulkBatchUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `batchId`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Unique identifier for a batch                                        |
| `bulkBatchUpdate`                                                    | [shared.BulkBatchUpdate](../../sdk/models/shared/bulkbatchupdate.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateBulkCalculation1099BatchResponse](../../sdk/models/operations/updatebulkcalculation1099batchresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
