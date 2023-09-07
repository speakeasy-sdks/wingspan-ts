# bulkCalculation1099BatchItem

### Available Operations

* [create](#create) - Create a bulk calculation1099 batch item
* [get](#get) - Get a bulk calculation1099 batch item
* [update](#update) - Update a bulk calculation1099 batch item

## create

Create a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkCalculation1099BatchItemResponse } from "openapi/dist/sdk/models/operations";
import { CalculationTypeBulkCalculation1099ItemCreate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkCalculation1099BatchItem.create({
  bulkCalculation1099ItemCreate: {
    calculationType: CalculationTypeBulkCalculation1099ItemCreate.LessThanNilGreaterThan,
    clientId: "vero",
    labels: "praesentium",
    year: 9767.62,
  },
  batchId: "ipsa",
}).then((res: CreateBulkCalculation1099BatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.CreateBulkCalculation1099BatchItemRequest](../../models/operations/createbulkcalculation1099batchitemrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.CreateBulkCalculation1099BatchItemResponse](../../models/operations/createbulkcalculation1099batchitemresponse.md)>**


## get

Get a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetBulkCalculation1099BatchItemResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkCalculation1099BatchItem.get({
  batchId: "omnis",
  batchItemId: "voluptate",
}).then((res: GetBulkCalculation1099BatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetBulkCalculation1099BatchItemRequest](../../models/operations/getbulkcalculation1099batchitemrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetBulkCalculation1099BatchItemResponse](../../models/operations/getbulkcalculation1099batchitemresponse.md)>**


## update

Update a bulk calculation1099 batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkCalculation1099BatchItemResponse } from "openapi/dist/sdk/models/operations";
import { CalculationTypeBulkCalculation1099ItemUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkCalculation1099BatchItem.update({
  bulkCalculation1099ItemUpdate: {
    calculationType: CalculationTypeBulkCalculation1099ItemUpdate.LessThanNilGreaterThan,
    clientId: "perferendis",
    labels: "reprehenderit",
    year: 2828.07,
  },
  batchId: "maiores",
  batchItemId: "dicta",
}).then((res: UpdateBulkCalculation1099BatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.UpdateBulkCalculation1099BatchItemRequest](../../models/operations/updatebulkcalculation1099batchitemrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.UpdateBulkCalculation1099BatchItemResponse](../../models/operations/updatebulkcalculation1099batchitemresponse.md)>**

