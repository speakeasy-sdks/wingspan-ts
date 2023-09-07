# additionalSettings

### Available Operations

* [list](#list) - List additional settings
* [update](#update) - Update additional settings

## list

List additional settings

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListAdditionalSettingsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.additionalSettings.list().then((res: ListAdditionalSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { Wingspan } from "openapi";
import { UpdateAdditionalSettingsResponse } from "openapi/dist/sdk/models/operations";
import { TypeAdditionalDataUpdateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.additionalSettings.update({
  additionalDataUpdateRequest: {
    key: "dolores",
    name: "Stacy Champlin",
    required: false,
    type: TypeAdditionalDataUpdateRequest.String,
  },
  id: "5907aff1-a3a2-4fa9-8677-39251aa52c3f",
}).then((res: UpdateAdditionalSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.UpdateAdditionalSettingsRequest](../../models/operations/updateadditionalsettingsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateAdditionalSettingsResponse](../../models/operations/updateadditionalsettingsresponse.md)>**

