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
import { CreateBulkClientBatchItemRequest, CreateBulkClientBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  BulkClientItemCreate,
  ClientStatusBulkClientItemCreate,
  D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0,
  MemberData,
  ShareTaxDocumentMemberData,
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "online";
const bulkClientItemCreate: BulkClientItemCreate = {
  clientStatus: ClientStatusBulkClientItemCreate.Pending,
  company: "Johnson, Green and Collier",
  email: "Annie.Zieme95@hotmail.com",
  externalId: "East orange Northwest",
  firstLastName: "SUV quantify Polestar",
  integration: "physical",
  labels: "Durham",
  memberData: {
    autoPayRequirement: AutoPayRequirementMemberData.All,
    externalId: "Intelligent Fish",
    shareTaxDocument: ShareTaxDocumentMemberData.Allow,
  },
};

sdk.bulkClientBatchItem.create(batchId, bulkClientItemCreate).then((res: CreateBulkClientBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `batchId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for a batch                                              |
| `bulkClientItemCreate`                                                     | [shared.BulkClientItemCreate](../../models/shared/bulkclientitemcreate.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateBulkClientBatchItemResponse](../../models/operations/createbulkclientbatchitemresponse.md)>**


## get

Get a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkClientBatchItemRequest, GetBulkClientBatchItemResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "female";
const batchItemId: string = "program";

sdk.bulkClientBatchItem.get(batchId, batchItemId).then((res: GetBulkClientBatchItemResponse) => {
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

**Promise<[operations.GetBulkClientBatchItemResponse](../../models/operations/getbulkclientbatchitemresponse.md)>**


## update

Update a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateBulkClientBatchItemRequest, UpdateBulkClientBatchItemResponse } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  BulkClientItemUpdate,
  ClientStatusBulkClientItemUpdate,
  D750b2d9403b5bcbdb3c96c89f1cc713df563d587f16e5f39f5ab546c08a20a0,
  MemberData,
  ShareTaxDocumentMemberData,
  SixtyFourMillionEightHundredAndFortySixThousandOneHundredAndThirtySixa354aa510825c1f23c3a978f4c816d8d4184311e7294a570f73727dc,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const batchId: string = "Van";
const batchItemId: string = "East";
const bulkClientItemUpdate: BulkClientItemUpdate = {
  clientStatus: ClientStatusBulkClientItemUpdate.Pending,
  company: "Glover, Murazik and Paucek",
  email: "Immanuel5@yahoo.com",
  externalId: "mostly",
  firstLastName: "dynamic white",
  integration: "Carolina",
  labels: {
    "officiis": "East",
  },
  memberData: "Bicycle",
};

sdk.bulkClientBatchItem.update(batchId, batchItemId, bulkClientItemUpdate).then((res: UpdateBulkClientBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `batchId`                                                                  | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for a batch                                              |
| `batchItemId`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | Unique identifier for an item in a batch                                   |
| `bulkClientItemUpdate`                                                     | [shared.BulkClientItemUpdate](../../models/shared/bulkclientitemupdate.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.UpdateBulkClientBatchItemResponse](../../models/operations/updatebulkclientbatchitemresponse.md)>**

