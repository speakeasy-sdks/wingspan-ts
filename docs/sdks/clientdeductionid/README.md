# clientDeductionID

### Available Operations

* [delete](#delete) - Delete deduction
* [get](#get) - Get deduction
* [update](#update) - Update deduction

## delete

Delete deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeleteClientDeductionIDResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientDeductionID.delete({
  id: "715bf0cb-b1e3-41b8-b90f-3443a1108e0a",
}).then((res: DeleteClientDeductionIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.DeleteClientDeductionIDRequest](../../models/operations/deleteclientdeductionidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.DeleteClientDeductionIDResponse](../../models/operations/deleteclientdeductionidresponse.md)>**


## get

Get deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetClientDeductionIDResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientDeductionID.get({
  id: "dcf4b921-879f-4ce9-93f7-3ef7fbc7abd7",
}).then((res: GetClientDeductionIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetClientDeductionIDRequest](../../models/operations/getclientdeductionidrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetClientDeductionIDResponse](../../models/operations/getclientdeductionidresponse.md)>**


## update

Update deduction

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateClientDeductionIDResponse } from "openapi/dist/sdk/models/operations";
import { CurrencyDeductionUpdateRequest, TypeDeductionUpdateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.clientDeductionID.update({
  deductionUpdateRequest: {
    amount: 2930.2,
    currency: CurrencyDeductionUpdateRequest.LessThanNilGreaterThan,
    name: "Earl Mosciski DVM",
    priority: 3472.33,
    sourceInvoiceId: "nulla",
    startDate: "fugit",
    type: TypeDeductionUpdateRequest.LessThanNilGreaterThan,
  },
  id: "ff7c70a4-5626-4d43-a813-f16d9f5fce6c",
}).then((res: UpdateClientDeductionIDResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateClientDeductionIDRequest](../../models/operations/updateclientdeductionidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateClientDeductionIDResponse](../../models/operations/updateclientdeductionidresponse.md)>**

