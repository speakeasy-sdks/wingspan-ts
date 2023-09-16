# PaymentEligibilityRequirement

### Available Operations

* [create](#create) - Create Payment Eligibility Requirement
* [delete](#delete) - Delete Payment Eligibility Requirement
* [get](#get) - Get Payment Eligibility Requirement
* [update](#update) - Update Payment Eligibility Requirement

## create

Create Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreatePaymentEligibilityRequirementResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.paymentEligibilityRequirement.create({
  field: "accusamus",
  value: "similique",
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
import { Wingspan } from "wingspan";
import {
  DeletePaymentEligibilityRequirementRequest,
  DeletePaymentEligibilityRequirementResponse,
} from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "tempora";

sdk.paymentEligibilityRequirement.delete(id).then((res: DeletePaymentEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeletePaymentEligibilityRequirementResponse](../../models/operations/deletepaymenteligibilityrequirementresponse.md)>**


## get

Get Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import {
  GetPaymentEligibilityRequirementRequest,
  GetPaymentEligibilityRequirementResponse,
} from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "aspernatur";

sdk.paymentEligibilityRequirement.get(id).then((res: GetPaymentEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentEligibilityRequirementResponse](../../models/operations/getpaymenteligibilityrequirementresponse.md)>**


## update

Update Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import {
  UpdatePaymentEligibilityRequirementRequest,
  UpdatePaymentEligibilityRequirementResponse,
} from "wingspan/dist/sdk/models/operations";
import { PaymentEligibilityUpdateRequest, PaymentEligibilityUpdateRequestValue2 } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "voluptas";
const paymentEligibilityUpdateRequest: PaymentEligibilityUpdateRequest = {
  field: "voluptas",
  value: "minima",
};

sdk.paymentEligibilityRequirement.update(id, paymentEligibilityUpdateRequest).then((res: UpdatePaymentEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | Unique identifier                                                                                |
| `paymentEligibilityUpdateRequest`                                                                | [shared.PaymentEligibilityUpdateRequest](../../models/shared/paymenteligibilityupdaterequest.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdatePaymentEligibilityRequirementResponse](../../models/operations/updatepaymenteligibilityrequirementresponse.md)>**

