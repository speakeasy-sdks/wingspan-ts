# BulkCalculation1099BatchItem
(*bulkCalculation1099BatchItem*)

### Available Operations

* [create](#create) - Create a bulk calculation1099 batch item
* [get](#get) - Get a bulk calculation1099 batch item
* [update](#update) - Update a bulk calculation1099 batch item

## create

Create a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkCalculation1099BatchItemRequest } from "wingspan/dist/sdk/models/operations";
import { BulkCalculation1099ItemCreate, CalculationTypeBulkCalculation1099ItemCreate } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const bulkCalculation1099ItemCreate: BulkCalculation1099ItemCreate = {
  clientId: "<value>",
  labels: {
    "key": "<value>",
  },
  year: 4865.89,
};

  const res = await sdk.bulkCalculation1099BatchItem.create(batchId, bulkCalculation1099ItemCreate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for a batch                                                                    |
| `bulkCalculation1099ItemCreate`                                                                  | [shared.BulkCalculation1099ItemCreate](../../sdk/models/shared/bulkcalculation1099itemcreate.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateBulkCalculation1099BatchItemResponse](../../sdk/models/operations/createbulkcalculation1099batchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkCalculation1099BatchItemRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const batchItemId: string = "<value>";

  const res = await sdk.bulkCalculation1099BatchItem.get(batchId, batchItemId);

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
| `batchItemId`                                                | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for an item in a batch                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkCalculation1099BatchItemResponse](../../sdk/models/operations/getbulkcalculation1099batchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkCalculation1099BatchItemRequest } from "wingspan/dist/sdk/models/operations";
import { BulkCalculation1099ItemUpdate, CalculationTypeBulkCalculation1099ItemUpdate } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "<value>";
const batchItemId: string = "<value>";
const bulkCalculation1099ItemUpdate: BulkCalculation1099ItemUpdate = {
  labels: {
    "key": "<value>",
  },
};

  const res = await sdk.bulkCalculation1099BatchItem.update(batchId, batchItemId, bulkCalculation1099ItemUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `batchId`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for a batch                                                                    |
| `batchItemId`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier for an item in a batch                                                         |
| `bulkCalculation1099ItemUpdate`                                                                  | [shared.BulkCalculation1099ItemUpdate](../../sdk/models/shared/bulkcalculation1099itemupdate.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateBulkCalculation1099BatchItemResponse](../../sdk/models/operations/updatebulkcalculation1099batchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
