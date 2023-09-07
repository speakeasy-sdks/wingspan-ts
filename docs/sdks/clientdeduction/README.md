# clientDeduction

### Available Operations

* [create](#create) - Create deduction

## create

Create deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateClientDeductionResponse } from "openapi/dist/sdk/models/operations";
import { DeductionCreateRequestCurrency, TypeDeductionCreateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.clientDeduction.create({
  amount: 2768.94,
  clientId: "aspernatur",
  currency: DeductionCreateRequestCurrency.Usd,
  memberId: "distinctio",
  name: "Gilbert Kohler",
  priority: 1832.8,
  sourceInvoiceId: "neque",
  startDate: "fugit",
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

