# collaboratorDeduction

### Available Operations

* [create](#create) - Create deduction
* [delete](#delete) - Delete deduction
* [get](#get) - Get deduction
* [update](#update) - Update deduction

## create

Create deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateCollaboratorDeductionResponse } from "openapi/dist/sdk/models/operations";
import { DeductionCreateRequestCurrency, TypeDeductionCreateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.collaboratorDeduction.create({
  amount: 4174.86,
  clientId: "quidem",
  currency: DeductionCreateRequestCurrency.Usd,
  memberId: "voluptas",
  name: "Joe Hoppe",
  priority: 724.34,
  sourceInvoiceId: "reiciendis",
  startDate: "perferendis",
  type: TypeDeductionCreateRequest.PostPayment,
}).then((res: CreateCollaboratorDeductionResponse) => {
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

**Promise<[operations.CreateCollaboratorDeductionResponse](../../models/operations/createcollaboratordeductionresponse.md)>**


## delete

Delete deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeleteCollaboratorDeductionResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorDeduction.delete({
  id: "f4294e36-98f4-447f-a03e-8b445e80ca55",
}).then((res: DeleteCollaboratorDeductionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCollaboratorDeductionRequest](../../models/operations/deletecollaboratordeductionrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCollaboratorDeductionResponse](../../models/operations/deletecollaboratordeductionresponse.md)>**


## get

Get deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetCollaboratorDeductionResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorDeduction.get({
  id: "efd20e45-7e18-458b-aa89-fbe3a5aa8e48",
}).then((res: GetCollaboratorDeductionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCollaboratorDeductionRequest](../../models/operations/getcollaboratordeductionrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCollaboratorDeductionResponse](../../models/operations/getcollaboratordeductionresponse.md)>**


## update

Update deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateCollaboratorDeductionResponse } from "openapi/dist/sdk/models/operations";
import { CurrencyDeductionUpdateRequest, TypeDeductionUpdateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.collaboratorDeduction.update({
  deductionUpdateRequest: {
    amount: 1482.68,
    currency: CurrencyDeductionUpdateRequest.Usd,
    name: "George Nicolas",
    priority: 78.84,
    sourceInvoiceId: "esse",
    startDate: "ipsam",
    type: TypeDeductionUpdateRequest.PrePayment,
  },
  id: "88e51862-065e-4904-b3b1-194b8abf603a",
}).then((res: UpdateCollaboratorDeductionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateCollaboratorDeductionRequest](../../models/operations/updatecollaboratordeductionrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateCollaboratorDeductionResponse](../../models/operations/updatecollaboratordeductionresponse.md)>**

