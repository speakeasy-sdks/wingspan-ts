# payoutSettings

### Available Operations

* [get](#get) - Get the payout settings
* [update](#update) - Update the payout settings

## get

Get the payout settings

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetPayoutSettingsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payoutSettings.get({
  id: "77c13e90-2c14-4125-b096-0a668151a472",
}).then((res: GetPayoutSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetPayoutSettingsRequest](../../models/operations/getpayoutsettingsrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetPayoutSettingsResponse](../../models/operations/getpayoutsettingsresponse.md)>**


## update

Update the payout settings

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdatePayoutSettingsResponse } from "openapi/dist/sdk/models/operations";
import {
  DestinationTypePayoutDestinationUpdate,
  PayoutMethodPayoutDestinationUpdate,
  PayoutPreferencesPayoutSettingsUpdate,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.payoutSettings.update({
  payoutSettingsUpdate: {
    payoutDestinations: [
      {
        destinationId: "delectus",
        destinationType: DestinationTypePayoutDestinationUpdate.WeGift,
        payoutMethod: PayoutMethodPayoutDestinationUpdate.Standard,
        percentage: 2009.5,
      },
    ],
    payoutPreferences: PayoutPreferencesPayoutSettingsUpdate.ECheck,
  },
  id: "5949f83f-350c-4f87-affb-901c6ecbb4e2",
}).then((res: UpdatePayoutSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdatePayoutSettingsRequest](../../models/operations/updatepayoutsettingsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdatePayoutSettingsResponse](../../models/operations/updatepayoutsettingsresponse.md)>**

