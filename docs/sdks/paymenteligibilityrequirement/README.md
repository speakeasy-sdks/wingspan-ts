# paymentEligibilityRequirement

### Available Operations

* [create](#create) - Create Payment Eligibility Requirement
* [delete](#delete) - Delete Payment Eligibility Requirement
* [get](#get) - Get Payment Eligibility Requirement
* [update](#update) - Update Payment Eligibility Requirement

## create

Create Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreatePaymentEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.paymentEligibilityRequirement.create({
  field: "veniam",
  value: "debitis",
}).then((res: CreatePaymentEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [shared.PaymentEligibility](../../models/shared/paymenteligibility.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.CreatePaymentEligibilityRequirementResponse](../../models/operations/createpaymenteligibilityrequirementresponse.md)>**


## delete

Delete Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeletePaymentEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.paymentEligibilityRequirement.delete({
  id: "a944f3b7-56c1-41f6-837a-5126243835bb",
}).then((res: DeletePaymentEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeletePaymentEligibilityRequirementRequest](../../models/operations/deletepaymenteligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeletePaymentEligibilityRequirementResponse](../../models/operations/deletepaymenteligibilityrequirementresponse.md)>**


## get

Get Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetPaymentEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.paymentEligibilityRequirement.get({
  id: "c05a23a4-5cef-4c5f-9e10-a0ce2169e510",
}).then((res: GetPaymentEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetPaymentEligibilityRequirementRequest](../../models/operations/getpaymenteligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetPaymentEligibilityRequirementResponse](../../models/operations/getpaymenteligibilityrequirementresponse.md)>**


## update

Update Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdatePaymentEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.paymentEligibilityRequirement.update({
  paymentEligibilityUpdateRequest: {
    field: "perferendis",
    value: "provident",
  },
  id: "c6dc5e34-7627-499b-bbbe-6949fb2bb4ec",
}).then((res: UpdatePaymentEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.UpdatePaymentEligibilityRequirementRequest](../../models/operations/updatepaymenteligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.UpdatePaymentEligibilityRequirementResponse](../../models/operations/updatepaymenteligibilityrequirementresponse.md)>**

