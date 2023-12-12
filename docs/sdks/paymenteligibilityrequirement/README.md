# PaymentEligibilityRequirement
(*paymentEligibilityRequirement*)

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

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.paymentEligibilityRequirement.create({
    field: "string",
    value: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.PaymentEligibility](../../sdk/models/shared/paymenteligibility.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.CreatePaymentEligibilityRequirementResponse](../../sdk/models/operations/createpaymenteligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

Delete Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeletePaymentEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.paymentEligibilityRequirement.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeletePaymentEligibilityRequirementResponse](../../sdk/models/operations/deletepaymenteligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPaymentEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.paymentEligibilityRequirement.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPaymentEligibilityRequirementResponse](../../sdk/models/operations/getpaymenteligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update Payment Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdatePaymentEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";
import { PaymentEligibilityUpdateRequest, Value } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";
const paymentEligibilityUpdateRequest: PaymentEligibilityUpdateRequest = {
  value: {},
};

  const res = await sdk.paymentEligibilityRequirement.update(id, paymentEligibilityUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | Unique identifier                                                                                    |
| `paymentEligibilityUpdateRequest`                                                                    | [shared.PaymentEligibilityUpdateRequest](../../sdk/models/shared/paymenteligibilityupdaterequest.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdatePaymentEligibilityRequirementResponse](../../sdk/models/operations/updatepaymenteligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
