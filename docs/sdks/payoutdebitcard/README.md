# payoutDebitCard

### Available Operations

* [create](#create) - Create a payout debit card
* [delete](#delete) - Delete the payout debit card
* [get](#get) - Get the payout debit card

## create

Create a payout debit card

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreatePayoutDebitCardResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payoutDebitCard.create({
  checkbookCardCreate: {
    address: {
      addressLine1: "saepe",
      addressLine2: "autem",
      city: "Dooleyhaven",
      postalCode: "87268",
      state: "recusandae",
    },
    cardNumber: "distinctio",
    cvv: "pariatur",
    expMM: "ad",
    expYYYY: "facere",
    name: "Conrad Pacocha",
  },
  memberId: "ipsam",
}).then((res: CreatePayoutDebitCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreatePayoutDebitCardRequest](../../models/operations/createpayoutdebitcardrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreatePayoutDebitCardResponse](../../models/operations/createpayoutdebitcardresponse.md)>**


## delete

Delete the payout debit card

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeletePayoutDebitCardResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payoutDebitCard.delete({
  id: "06a8aa94-c026-444c-b5e9-d9a4578adc1a",
  memberId: "quod",
}).then((res: DeletePayoutDebitCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeletePayoutDebitCardRequest](../../models/operations/deletepayoutdebitcardrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeletePayoutDebitCardResponse](../../models/operations/deletepayoutdebitcardresponse.md)>**


## get

Get the payout debit card

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetPayoutDebitCardResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payoutDebitCard.get({
  id: "600dec00-1ac8-402e-aec0-9ff8f0f816ff",
  memberId: "velit",
}).then((res: GetPayoutDebitCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetPayoutDebitCardRequest](../../models/operations/getpayoutdebitcardrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetPayoutDebitCardResponse](../../models/operations/getpayoutdebitcardresponse.md)>**

