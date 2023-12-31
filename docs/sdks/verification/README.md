# Verification
(*verification*)

### Available Operations

* [send](#send) - Sends a verification code

## send

Sends a verification code

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { SendVerificationRequest, SendVerificationResponse } from "wingspan/dist/sdk/models/operations";
import { CardCodeRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "hacking";
const cardCodeRequest: CardCodeRequest = {
  channel: "bluetooth Boynton",
};

sdk.verification.send(id, cardCodeRequest).then((res: SendVerificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | Unique identifier                                                |
| `cardCodeRequest`                                                | [shared.CardCodeRequest](../../models/shared/cardcoderequest.md) | :heavy_minus_sign:                                               | N/A                                                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.SendVerificationResponse](../../models/operations/sendverificationresponse.md)>**

