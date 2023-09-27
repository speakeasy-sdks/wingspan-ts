# AdditionalData
(*additionalData*)

### Available Operations

* [create](#create) - Create additional data
* [delete](#delete) - Delete additional data
* [get](#get) - Get additional data

## create

Create additional data

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateAdditionalDataResponse } from "wingspan/dist/sdk/models/operations";
import { AdditionalDataType } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.additionalData.create({
  key: "ab",
  name: "Mrs. Marie O'Connell",
  required: false,
  type: AdditionalDataType.String,
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
import { Wingspan } from "wingspan";
import { DeleteAdditionalDataRequest, DeleteAdditionalDataResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "quo";

sdk.additionalData.delete(id).then((res: DeleteAdditionalDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteAdditionalDataResponse](../../models/operations/deleteadditionaldataresponse.md)>**


## get

Get additional data

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetAdditionalDataRequest, GetAdditionalDataResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "odit";

sdk.additionalData.get(id).then((res: GetAdditionalDataResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAdditionalDataResponse](../../models/operations/getadditionaldataresponse.md)>**

