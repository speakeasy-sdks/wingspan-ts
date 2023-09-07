# codeToToken

### Available Operations

* [exchange](#exchange) - Exchange the code for a token

## exchange

Exchange the code for a token

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ExchangeCodeToTokenResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.codeToToken.exchange({
  cardTokenRequest: {
    verificationCode: "quae",
    verificationToken: "earum",
  },
  id: "674bdb04-f157-4560-82d6-8ea19f1d1705",
}).then((res: ExchangeCodeToTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ExchangeCodeToTokenRequest](../../models/operations/exchangecodetotokenrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ExchangeCodeToTokenResponse](../../models/operations/exchangecodetotokenresponse.md)>**

