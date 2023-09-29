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
import {
  CreateBulkCalculation1099BatchItemRequest,
  CreateBulkCalculation1099BatchItemResponse,
} from "wingspan/dist/sdk/models/operations";
import { BulkCalculation1099ItemCreate, CalculationTypeBulkCalculation1099ItemCreate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "online";
const bulkCalculation1099ItemCreate: BulkCalculation1099ItemCreate = {
  calculationType: CalculationTypeBulkCalculation1099ItemCreate.Submissions,
  clientId: "Money blue shred",
  labels: "technology",
  year: 0.86,
};

sdk.bulkCalculation1099BatchItem.create(batchId, bulkCalculation1099ItemCreate).then((res: CreateBulkCalculation1099BatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { GetBulkCalculation1099BatchItemRequest, GetBulkCalculation1099BatchItemResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "female";
const batchItemId: string = "program";

sdk.bulkCalculation1099BatchItem.get(batchId, batchItemId).then((res: GetBulkCalculation1099BatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import {
  UpdateBulkCalculation1099BatchItemRequest,
  UpdateBulkCalculation1099BatchItemResponse,
} from "wingspan/dist/sdk/models/operations";
import { BulkCalculation1099ItemUpdate, CalculationTypeBulkCalculation1099ItemUpdate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "Van";
const batchItemId: string = "East";
const bulkCalculation1099ItemUpdate: BulkCalculation1099ItemUpdate = {
  calculationType: CalculationTypeBulkCalculation1099ItemUpdate.LessThanNilGreaterThan,
  clientId: "Metal cheater Islands",
  labels: "withdrawal",
  year: 3115.07,
};

sdk.bulkCalculation1099BatchItem.update(batchId, batchItemId, bulkCalculation1099ItemUpdate).then((res: UpdateBulkCalculation1099BatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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

