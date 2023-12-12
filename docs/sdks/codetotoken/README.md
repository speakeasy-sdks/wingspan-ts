# CodeToToken
(*codeToToken*)

### Available Operations

* [exchange](#exchange) - Exchange the code for a token

## exchange

Exchange the code for a token

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ExchangeCodeToTokenRequest } from "wingspan/dist/sdk/models/operations";
import { CardTokenRequest } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";
const cardTokenRequest: CardTokenRequest = {
  verificationCode: "string",
  verificationToken: "string",
};

  const res = await sdk.codeToToken.exchange(id, cardTokenRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Unique identifier                                                      |
| `cardTokenRequest`                                                     | [shared.CardTokenRequest](../../sdk/models/shared/cardtokenrequest.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.ExchangeCodeToTokenResponse](../../sdk/models/operations/exchangecodetotokenresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
