# additionalData

### Available Operations

* [create](#create) - Create additional data
* [delete](#delete) - Delete additional data
* [get](#get) - Get additional data

## create

Create additional data

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateAdditionalDataResponse } from "openapi/dist/sdk/models/operations";
import { AdditionalDataType } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.additionalData.create({
  key: "voluptatum",
  name: "Miriam Huel",
  required: false,
  type: AdditionalDataType.Boolean,
}).then((res: CreateAdditionalDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.AdditionalData](../../models/shared/additionaldata.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.CreateAdditionalDataResponse](../../models/operations/createadditionaldataresponse.md)>**


## delete

Delete additional data

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeleteAdditionalDataResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.additionalData.delete({
  id: "51a05dfc-2ddf-47cc-b8ca-1ba928fc8167",
}).then((res: DeleteAdditionalDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.DeleteAdditionalDataRequest](../../models/operations/deleteadditionaldatarequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.DeleteAdditionalDataResponse](../../models/operations/deleteadditionaldataresponse.md)>**


## get

Get additional data

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetAdditionalDataResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.additionalData.get({
  id: "42cb7392-0592-4939-afea-7596eb10faaa",
}).then((res: GetAdditionalDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetAdditionalDataRequest](../../models/operations/getadditionaldatarequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetAdditionalDataResponse](../../models/operations/getadditionaldataresponse.md)>**

