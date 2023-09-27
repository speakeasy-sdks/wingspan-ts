# ClientDeductionID
(*clientDeductionID*)

### Available Operations

* [delete](#delete) - Delete deduction
* [get](#get) - Get deduction
* [update](#update) - Update deduction

## delete

Delete deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteClientDeductionIDRequest, DeleteClientDeductionIDResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "cumque";

sdk.clientDeductionID.delete(id).then((res: DeleteClientDeductionIDResponse) => {
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

**Promise<[operations.DeleteClientDeductionIDResponse](../../models/operations/deleteclientdeductionidresponse.md)>**


## get

Get deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetClientDeductionIDRequest, GetClientDeductionIDResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "corporis";

sdk.clientDeductionID.get(id).then((res: GetClientDeductionIDResponse) => {
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

**Promise<[operations.GetClientDeductionIDResponse](../../models/operations/getclientdeductionidresponse.md)>**


## update

Update deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateClientDeductionIDRequest, UpdateClientDeductionIDResponse } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyDeductionUpdateRequest,
  DeductionUpdateRequest,
  TypeDeductionUpdateRequest,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "hic";
const deductionUpdateRequest: DeductionUpdateRequest = {
  amount: 7299.91,
  currency: CurrencyDeductionUpdateRequest.LessThanNilGreaterThan,
  name: "Beatrice Lebsack II",
  priority: 1999.96,
  sourceInvoiceId: "eos",
  startDate: "perferendis",
  type: TypeDeductionUpdateRequest.PrePayment,
};

sdk.clientDeductionID.update(id, deductionUpdateRequest).then((res: UpdateClientDeductionIDResponse) => {
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

**Promise<[operations.UpdateClientDeductionIDResponse](../../models/operations/updateclientdeductionidresponse.md)>**

