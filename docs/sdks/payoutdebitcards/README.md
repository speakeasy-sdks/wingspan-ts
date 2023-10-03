# PayoutDebitCards
(*payoutDebitCards*)

### Available Operations

* [list](#list) - List the payout debit cards

## list

List the payout debit cards

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListPayoutDebitCardsRequest, ListPayoutDebitCardsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const memberId: string = "Bicycle";

sdk.payoutDebitCards.list(memberId).then((res: ListPayoutDebitCardsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListPayoutDebitCardsResponse](../../models/operations/listpayoutdebitcardsresponse.md)>**

