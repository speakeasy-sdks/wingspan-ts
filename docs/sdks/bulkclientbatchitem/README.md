# BulkClientBatchItem
(*bulkClientBatchItem*)

### Available Operations

* [create](#create) - Create a bulk client batch item
* [get](#get) - Get a bulk client batch item
* [update](#update) - Update a bulk client batch item

## create

Create a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateBulkClientBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  BulkClientItemCreate,
  ClientStatusBulkClientItemCreate,
  D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0,
  MemberData,
  ShareTaxDocumentMemberData,
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const bulkClientItemCreate: BulkClientItemCreate = {
  integration: {
    quickbooks: {},
  },
  labels: {
    "key": "string",
  },
  memberData: {},
};

  const res = await sdk.bulkClientBatchItem.create(batchId, bulkClientItemCreate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `batchId`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a batch                                                     |
| `bulkClientItemCreate`                                                            | [shared.BulkClientItemCreate](../../../sdk/models/shared/bulkclientitemcreate.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.CreateBulkClientBatchItemResponse](../../sdk/models/operations/createbulkclientbatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkClientBatchItemRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";

  const res = await sdk.bulkClientBatchItem.get(batchId, batchItemId);

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

**Promise<[operations.GetBulkClientBatchItemResponse](../../sdk/models/operations/getbulkclientbatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkClientBatchItemRequest } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  BulkClientItemUpdate,
  ClientStatusBulkClientItemUpdate,
  D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0,
  MemberData,
  ShareTaxDocumentMemberData,
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";
const batchItemId: string = "string";
const bulkClientItemUpdate: BulkClientItemUpdate = {
  integration: {
    quickbooks: {},
  },
  labels: {
    "key": "string",
  },
  memberData: {},
};

  const res = await sdk.bulkClientBatchItem.update(batchId, batchItemId, bulkClientItemUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                         | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `batchId`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for a batch                                                     |
| `batchItemId`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for an item in a batch                                          |
| `bulkClientItemUpdate`                                                            | [shared.BulkClientItemUpdate](../../../sdk/models/shared/bulkclientitemupdate.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `config`                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                      | :heavy_minus_sign:                                                                | Available config options for making requests.                                     |


### Response

**Promise<[operations.UpdateBulkClientBatchItemResponse](../../sdk/models/operations/updatebulkclientbatchitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
