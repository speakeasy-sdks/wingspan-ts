# verification

### Available Operations

* [send](#send) - Sends a verification code

## send

Sends a verification code

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { SendVerificationResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.verification.send({
  cardCodeRequest: {
    channel: "aliquid",
  },
  id: "8a363c88-73e4-4843-80b1-f6b8ca275a60",
}).then((res: SendVerificationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.SendVerificationRequest](../../models/operations/sendverificationrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SendVerificationResponse](../../models/operations/sendverificationresponse.md)>**

