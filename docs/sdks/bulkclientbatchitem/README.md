# bulkClientBatchItem

### Available Operations

* [create](#create) - Create a bulk client batch item
* [get](#get) - Get a bulk client batch item
* [update](#update) - Update a bulk client batch item

## create

Create a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkClientBatchItemResponse } from "openapi/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  ClientStatusBulkClientItemCreate,
  ShareTaxDocumentMemberData,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkClientBatchItem.create({
  bulkClientItemCreate: {
    clientStatus: ClientStatusBulkClientItemCreate.Active,
    company: "Pouros LLC",
    email: "Samantha_Gleason@yahoo.com",
    externalId: "voluptates",
    firstLastName: "quasi",
    integration: {
      quickbooks: {
        customerId: "veritatis",
        itemId: "itaque",
      },
    },
    labels: "enim",
    memberData: "est",
  },
  batchId: "quibusdam",
}).then((res: CreateBulkClientBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateBulkClientBatchItemRequest](../../models/operations/createbulkclientbatchitemrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateBulkClientBatchItemResponse](../../models/operations/createbulkclientbatchitemresponse.md)>**


## get

Get a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetBulkClientBatchItemResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkClientBatchItem.get({
  batchId: "explicabo",
  batchItemId: "deserunt",
}).then((res: GetBulkClientBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetBulkClientBatchItemRequest](../../models/operations/getbulkclientbatchitemrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetBulkClientBatchItemResponse](../../models/operations/getbulkclientbatchitemresponse.md)>**


## update

Update a bulk client batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkClientBatchItemResponse } from "openapi/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  ClientStatusBulkClientItemUpdate,
  ShareTaxDocumentMemberData,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkClientBatchItem.update({
  bulkClientItemUpdate: {
    clientStatus: ClientStatusBulkClientItemUpdate.Pending,
    company: "Green, Gleason and Deckow",
    email: "Kyler16@yahoo.com",
    externalId: "assumenda",
    firstLastName: "ipsam",
    integration: "fugit",
    labels: {
      "excepturi": "tempora",
    },
    memberData: {
      autoPayRequirement: AutoPayRequirementMemberData.LessThanNilGreaterThan,
      externalId: "labore",
      shareTaxDocument: ShareTaxDocumentMemberData.LessThanNilGreaterThan,
    },
  },
  batchId: "eum",
  batchItemId: "non",
}).then((res: UpdateBulkClientBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UpdateBulkClientBatchItemRequest](../../models/operations/updatebulkclientbatchitemrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateBulkClientBatchItemResponse](../../models/operations/updatebulkclientbatchitemresponse.md)>**

