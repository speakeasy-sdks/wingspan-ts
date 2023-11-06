# CollaboratorDeduction
(*collaboratorDeduction*)

### Available Operations

* [create](#create) - Create deduction
* [delete](#delete) - Delete deduction
* [get](#get) - Get deduction
* [update](#update) - Update deduction

## create

Create deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeductionCreateRequestCurrency, TypeDeductionCreateRequest } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.collaboratorDeduction.create({
    amount: 4865.89,
    clientId: "string",
    currency: DeductionCreateRequestCurrency.Usd,
    memberId: "string",
    name: "string",
    type: TypeDeductionCreateRequest.PostPayment,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.DeductionCreateRequest](../../models/shared/deductioncreaterequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateCollaboratorDeductionResponse](../../models/operations/createcollaboratordeductionresponse.md)>**


## delete

Delete deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteCollaboratorDeductionRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.collaboratorDeduction.delete(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteCollaboratorDeductionResponse](../../models/operations/deletecollaboratordeductionresponse.md)>**


## get

Get deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorDeductionRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.collaboratorDeduction.get(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCollaboratorDeductionResponse](../../models/operations/getcollaboratordeductionresponse.md)>**


## update

Update deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateCollaboratorDeductionRequest } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyDeductionUpdateRequest,
  DeductionUpdateRequest,
  TypeDeductionUpdateRequest,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const deductionUpdateRequest: DeductionUpdateRequest = {};

  const res = await sdk.collaboratorDeduction.update(id, deductionUpdateRequest);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier                                                              |
| `deductionUpdateRequest`                                                       | [shared.DeductionUpdateRequest](../../models/shared/deductionupdaterequest.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateCollaboratorDeductionResponse](../../models/operations/updatecollaboratordeductionresponse.md)>**

