# AdditionalSettings

### Available Operations

* [list](#list) - List additional settings
* [update](#update) - Update additional settings

## list

List additional settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListAdditionalSettingsResponse } from "wingspan/dist/sdk/models/operations";

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
import { Wingspan } from "wingspan";
import { UpdateAdditionalSettingsRequest, UpdateAdditionalSettingsResponse } from "wingspan/dist/sdk/models/operations";
import { AdditionalDataUpdateRequest, TypeAdditionalDataUpdateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "deserunt";
const additionalDataUpdateRequest: AdditionalDataUpdateRequest = {
  key: "perferendis",
  name: "Estelle Will",
  required: false,
  type: TypeAdditionalDataUpdateRequest.LessThanNilGreaterThan,
};

sdk.additionalSettings.update(id, additionalDataUpdateRequest).then((res: UpdateAdditionalSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier                                                                        |
| `additionalDataUpdateRequest`                                                            | [shared.AdditionalDataUpdateRequest](../../models/shared/additionaldataupdaterequest.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateAdditionalSettingsResponse](../../models/operations/updateadditionalsettingsresponse.md)>**

