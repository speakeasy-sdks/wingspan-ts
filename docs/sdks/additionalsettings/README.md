# AdditionalSettings
(*additionalSettings*)

### Available Operations

* [list](#list) - List additional settings
* [update](#update) - Update additional settings

## list

List additional settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.additionalSettings.list();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListAdditionalSettingsResponse](../../models/operations/listadditionalsettingsresponse.md)>**


## update

Update additional settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateAdditionalSettingsRequest } from "wingspan/dist/sdk/models/operations";
import { AdditionalDataUpdateRequest, TypeAdditionalDataUpdateRequest } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const additionalDataUpdateRequest: AdditionalDataUpdateRequest = {};

  const res = await sdk.additionalSettings.update(id, additionalDataUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier                                                                        |
| `additionalDataUpdateRequest`                                                            | [shared.AdditionalDataUpdateRequest](../../models/shared/additionaldataupdaterequest.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateAdditionalSettingsResponse](../../models/operations/updateadditionalsettingsresponse.md)>**

