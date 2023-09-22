# ClientDeduction

### Available Operations

* [create](#create) - Create deduction

## create

Create deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateClientDeductionResponse } from "wingspan/dist/sdk/models/operations";
import { DeductionCreateRequestCurrency, TypeDeductionCreateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.clientDeduction.create({
  amount: 6974.29,
  clientId: "ipsam",
  currency: DeductionCreateRequestCurrency.Usd,
  memberId: "autem",
  name: "Gary Streich",
  priority: 166.27,
  sourceInvoiceId: "fugiat",
  startDate: "amet",
  type: TypeDeductionCreateRequest.PrePayment,
}).then((res: CreateClientDeductionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.DeductionCreateRequest](../../models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateClientDeductionResponse](../../models/operations/createclientdeductionresponse.md)>**

