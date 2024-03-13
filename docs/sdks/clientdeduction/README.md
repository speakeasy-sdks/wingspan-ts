# ClientDeduction
(*clientDeduction*)

### Available Operations

* [create](#create) - Create deduction

## create

Create deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeductionCreateRequestCurrency, TypeDeductionCreateRequest } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.clientDeduction.create({
    amount: 4865.89,
    clientId: "<value>",
    currency: DeductionCreateRequestCurrency.Usd,
    memberId: "<value>",
    name: "<value>",
    type: TypeDeductionCreateRequest.PostPayment,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.DeductionCreateRequest](../../sdk/models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateClientDeductionResponse](../../sdk/models/operations/createclientdeductionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
