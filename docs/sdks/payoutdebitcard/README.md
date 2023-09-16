# PayoutDebitCard

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
const memberId: string = "nobis";
const checkbookCardCreate: CheckbookCardCreate = {
  address: {
    addressLine1: "adipisci",
    addressLine2: "minus",
    city: "New Isomboro",
    postalCode: "88327",
    state: "blanditiis",
  },
  cardNumber: "quas",
  cvv: "hic",
  expMM: "nesciunt",
  expYYYY: "culpa",
  name: "Dewey Leannon",
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
const id: string = "nobis";
const memberId: string = "sit";

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
const id: string = "rerum";
const memberId: string = "sed";

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

