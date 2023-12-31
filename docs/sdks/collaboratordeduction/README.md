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
import { CreateCollaboratorDeductionResponse } from "wingspan/dist/sdk/models/operations";
import { DeductionCreateRequestCurrency, TypeDeductionCreateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.collaboratorDeduction.create({
  amount: 4865.89,
  clientId: "Configuration Money",
  currency: DeductionCreateRequestCurrency.Cad,
  memberId: "shred",
  name: "technology East",
  priority: 1697.27,
  sourceInvoiceId: "Northwest",
  startDate: "SUV quantify Polestar",
  type: TypeDeductionCreateRequest.PrePayment,
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
import { Wingspan } from "wingspan";
import { DeleteCollaboratorDeductionRequest, DeleteCollaboratorDeductionResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "program";

sdk.collaboratorDeduction.delete(id).then((res: DeleteCollaboratorDeductionResponse) => {
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

**Promise<[operations.DeleteCollaboratorDeductionResponse](../../models/operations/deletecollaboratordeductionresponse.md)>**


## get

Get deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorDeductionRequest, GetCollaboratorDeductionResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "female";

sdk.collaboratorDeduction.get(id).then((res: GetCollaboratorDeductionResponse) => {
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

**Promise<[operations.GetCollaboratorDeductionResponse](../../models/operations/getcollaboratordeductionresponse.md)>**


## update

Update deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateCollaboratorDeductionRequest, UpdateCollaboratorDeductionResponse } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyDeductionUpdateRequest,
  DeductionUpdateRequest,
  TypeDeductionUpdateRequest,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "Van";
const deductionUpdateRequest: DeductionUpdateRequest = {
  amount: 156.52,
  currency: CurrencyDeductionUpdateRequest.Cad,
  name: "dock Quality redundant",
  priority: 9840.08,
  sourceInvoiceId: "Islands",
  startDate: "withdrawal extend",
  type: TypeDeductionUpdateRequest.PrePayment,
};

sdk.collaboratorDeduction.update(id, deductionUpdateRequest).then((res: UpdateCollaboratorDeductionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | Unique identifier                                                              |
| `deductionUpdateRequest`                                                       | [shared.DeductionUpdateRequest](../../models/shared/deductionupdaterequest.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateCollaboratorDeductionResponse](../../models/operations/updatecollaboratordeductionresponse.md)>**

