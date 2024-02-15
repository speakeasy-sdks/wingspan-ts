# Verification
(*verification*)

### Available Operations

* [send](#send) - Sends a verification code

## send

Sends a verification code

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { SendVerificationRequest } from "wingspan/dist/sdk/models/operations";
import { CardCodeRequest } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const id: string = "<value>";
const cardCodeRequest: CardCodeRequest = {
  channel: "<value>",
};

  const res = await sdk.verification.send(id, cardCodeRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Unique identifier                                                    |
| `cardCodeRequest`                                                    | [shared.CardCodeRequest](../../sdk/models/shared/cardcoderequest.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.SendVerificationResponse](../../sdk/models/operations/sendverificationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
