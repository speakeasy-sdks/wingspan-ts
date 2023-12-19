# PayoutSettings
(*payoutSettings*)

### Available Operations

* [get](#get) - Get the payout settings
* [update](#update) - Update the payout settings

## get

Get the payout settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPayoutSettingsRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.payoutSettings.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPayoutSettingsResponse](../../sdk/models/operations/getpayoutsettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update the payout settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdatePayoutSettingsRequest } from "wingspan/dist/sdk/models/operations";
import {
  DestinationTypePayoutDestinationUpdate,
  PayoutDestinationUpdate,
  PayoutMethodPayoutDestinationUpdate,
  PayoutPreferencesPayoutSettingsUpdate,
  PayoutSettingsUpdate,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";
const payoutSettingsUpdate: PayoutSettingsUpdate = {
  payoutDestinations: [
    {},
  ],
};

  const res = await sdk.payoutSettings.update(id, payoutSettingsUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier                                                              |
| `payoutSettingsUpdate`                                                         | [shared.PayoutSettingsUpdate](../../sdk/models/shared/payoutsettingsupdate.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdatePayoutSettingsResponse](../../sdk/models/operations/updatepayoutsettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
