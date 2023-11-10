# PayoutDebitCards
(*payoutDebitCards*)

### Available Operations

* [list](#list) - List the payout debit cards

## list

List the payout debit cards

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListPayoutDebitCardsRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const memberId: string = "string";

  const res = await sdk.payoutDebitCards.list(memberId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListPayoutDebitCardsResponse](../../sdk/models/operations/listpayoutdebitcardsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
