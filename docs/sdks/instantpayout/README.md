# InstantPayout
(*instantPayout*)

### Available Operations

* [create](#create) - Create instant payout details
* [delete](#delete) - Delete instant payout
* [fetch](#fetch) - Fetch instant payout details

## create

Create instant payout details

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateInstantPayoutResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.instantPayout.create({
  externalPayoutAccountToken: "bluetooth Extended",
}).then((res: CreateInstantPayoutResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.InstantPayoutRequest](../../models/shared/instantpayoutrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreateInstantPayoutResponse](../../models/operations/createinstantpayoutresponse.md)>**


## delete

Delete instant payout

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteInstantPayoutResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.instantPayout.delete().then((res: DeleteInstantPayoutResponse) => {
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

**Promise<[operations.DeleteInstantPayoutResponse](../../models/operations/deleteinstantpayoutresponse.md)>**


## fetch

Fetch instant payout details

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { FetchInstantPayoutResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.instantPayout.fetch().then((res: FetchInstantPayoutResponse) => {
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

**Promise<[operations.FetchInstantPayoutResponse](../../models/operations/fetchinstantpayoutresponse.md)>**

