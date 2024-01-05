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

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.instantPayout.create({
    externalPayoutAccountToken: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.InstantPayoutRequest](../../sdk/models/shared/instantpayoutrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateInstantPayoutResponse](../../sdk/models/operations/createinstantpayoutresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete instant payout

### Example Usage

```typescript
import { Wingspan } from "wingspan";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.instantPayout.delete();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteInstantPayoutResponse](../../sdk/models/operations/deleteinstantpayoutresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## fetch

Fetch instant payout details

### Example Usage

```typescript
import { Wingspan } from "wingspan";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.instantPayout.fetch();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.FetchInstantPayoutResponse](../../sdk/models/operations/fetchinstantpayoutresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
