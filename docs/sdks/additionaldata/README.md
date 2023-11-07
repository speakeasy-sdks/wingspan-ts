# AdditionalData
(*.additionalData*)

### Available Operations

* [create](#create) - Create additional data
* [delete](#delete) - Delete additional data
* [get](#get) - Get additional data

## create

Create additional data

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { TypeT } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.additionalData.create({
    key: "<key>",
    name: "string",
    required: false,
    type: TypeT.Boolean,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeleteAdditionalDataRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.additionalData.delete(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { GetAdditionalDataRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.additionalData.get(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAdditionalDataResponse](../../models/operations/getadditionaldataresponse.md)>**

