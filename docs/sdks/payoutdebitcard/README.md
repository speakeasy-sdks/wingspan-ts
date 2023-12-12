# PayoutDebitCard
(*payoutDebitCard*)

### Available Operations

* [create](#create) - Create a payout debit card
* [delete](#delete) - Delete the payout debit card
* [get](#get) - Get the payout debit card

## create

Create a payout debit card

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreatePayoutDebitCardRequest } from "wingspan/dist/sdk/models/operations";
import { Address, CheckbookCardCreate } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const memberId: string = "string";
const checkbookCardCreate: CheckbookCardCreate = {
  address: {
    addressLine1: "string",
    city: "Jenafurt",
    postalCode: "42170-9739",
    state: "string",
  },
  cardNumber: "string",
  expMM: "string",
  expYYYY: "string",
  name: "string",
};

  const res = await sdk.payoutDebitCard.create(memberId, checkbookCardCreate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `memberId`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier of a member                                                |
| `checkbookCardCreate`                                                        | [shared.CheckbookCardCreate](../../sdk/models/shared/checkbookcardcreate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.CreatePayoutDebitCardResponse](../../sdk/models/operations/createpayoutdebitcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Delete the payout debit card

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeletePayoutDebitCardRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";
const memberId: string = "string";

  const res = await sdk.payoutDebitCard.delete(id, memberId);

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
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeletePayoutDebitCardResponse](../../sdk/models/operations/deletepayoutdebitcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get the payout debit card

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPayoutDebitCardRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";
const memberId: string = "string";

  const res = await sdk.payoutDebitCard.get(id, memberId);

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
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPayoutDebitCardResponse](../../sdk/models/operations/getpayoutdebitcardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
