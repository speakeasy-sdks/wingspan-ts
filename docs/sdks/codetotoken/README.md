# CodeToToken
(*codeToToken*)

### Available Operations

* [exchange](#exchange) - Exchange the code for a token

## exchange

Exchange the code for a token

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ExchangeCodeToTokenRequest, ExchangeCodeToTokenResponse } from "wingspan/dist/sdk/models/operations";
import { CardTokenRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "between";
const cardTokenRequest: CardTokenRequest = {
  verificationCode: "Canada Southwest panel",
  verificationToken: "North Pickup noisily",
};

sdk.codeToToken.exchange(id, cardTokenRequest).then((res: ExchangeCodeToTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | Unique identifier                                                  |
| `cardTokenRequest`                                                 | [shared.CardTokenRequest](../../models/shared/cardtokenrequest.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.ExchangeCodeToTokenResponse](../../models/operations/exchangecodetotokenresponse.md)>**

