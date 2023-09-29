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
import { CreatePayoutDebitCardRequest, CreatePayoutDebitCardResponse } from "wingspan/dist/sdk/models/operations";
import { Address, CheckbookCardCreate } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const memberId: string = "online";
const checkbookCardCreate: CheckbookCardCreate = {
  address: {
    addressLine1: "Money blue shred",
    addressLine2: "technology East",
    city: "West Astridcester",
    postalCode: "88558-7496",
    state: "Durham after",
  },
  cardNumber: "Intelligent Fish",
  cvv: "Fiat",
  expMM: "Grocery Borders Northwest",
  expYYYY: "Kentucky animated",
  name: "Interactions Senior Mouse",
};

sdk.payoutDebitCard.create(memberId, checkbookCardCreate).then((res: CreatePayoutDebitCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `memberId`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Unique identifier of a member                                            |
| `checkbookCardCreate`                                                    | [shared.CheckbookCardCreate](../../models/shared/checkbookcardcreate.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreatePayoutDebitCardResponse](../../models/operations/createpayoutdebitcardresponse.md)>**


## delete

Delete the payout debit card

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeletePayoutDebitCardRequest, DeletePayoutDebitCardResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "program";
const memberId: string = "Designer";

sdk.payoutDebitCard.delete(id, memberId).then((res: DeletePayoutDebitCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeletePayoutDebitCardResponse](../../models/operations/deletepayoutdebitcardresponse.md)>**


## get

Get the payout debit card

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPayoutDebitCardRequest, GetPayoutDebitCardResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "female";
const memberId: string = "program";

sdk.payoutDebitCard.get(id, memberId).then((res: GetPayoutDebitCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPayoutDebitCardResponse](../../models/operations/getpayoutdebitcardresponse.md)>**

