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

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkCalculation1099ItemCreate: BulkCalculation1099ItemCreate = {
  clientId: "string",
  labels: {
    "key": "string",
  },
  year: 4865.89,
};

  const res = await sdk.bulkCalculation1099BatchItem.create(batchId, bulkCalculation1099ItemCreate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `batchId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identifier for a batch                                                                |
| `bulkCalculation1099ItemCreate`                                                              | [shared.BulkCalculation1099ItemCreate](../../models/shared/bulkcalculation1099itemcreate.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateBulkCalculation1099BatchItemResponse](../../models/operations/createbulkcalculation1099batchitemresponse.md)>**


## get

Get a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkCalculation1099BatchItemRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";

  const res = await sdk.bulkCalculation1099BatchItem.get(batchId, batchItemId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `batchItemId`                                                | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for an item in a batch                     |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkCalculation1099BatchItemResponse](../../models/operations/getbulkcalculation1099batchitemresponse.md)>**


## update

Update a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkCalculation1099BatchItemRequest } from "wingspan/dist/sdk/models/operations";
import { BulkCalculation1099ItemUpdate, CalculationTypeBulkCalculation1099ItemUpdate } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";
const bulkCalculation1099ItemUpdate: BulkCalculation1099ItemUpdate = {
  labels: {
    "key": "string",
  },
};

  const res = await sdk.bulkCalculation1099BatchItem.update(batchId, batchItemId, bulkCalculation1099ItemUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `batchId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identifier for a batch                                                                |
| `batchItemId`                                                                                | *string*                                                                                     | :heavy_check_mark:                                                                           | Unique identifier for an item in a batch                                                     |
| `bulkCalculation1099ItemUpdate`                                                              | [shared.BulkCalculation1099ItemUpdate](../../models/shared/bulkcalculation1099itemupdate.md) | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateBulkCalculation1099BatchItemResponse](../../models/operations/updatebulkcalculation1099batchitemresponse.md)>**

