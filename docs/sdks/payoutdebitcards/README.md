# payoutDebitCards

### Available Operations

* [list](#list) - List the payout debit cards

## list

List the payout debit cards

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListPayoutDebitCardsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payoutDebitCards.list({
  memberId: "eius",
}).then((res: ListPayoutDebitCardsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListPayoutDebitCardsRequest](../../models/operations/listpayoutdebitcardsrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListPayoutDebitCardsResponse](../../models/operations/listpayoutdebitcardsresponse.md)>**

