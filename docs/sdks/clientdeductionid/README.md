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
import { DeleteClientDeductionIDRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.clientDeductionID.delete(id);


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

**Promise<[operations.DeleteClientDeductionIDResponse](../../models/operations/deleteclientdeductionidresponse.md)>**


## get

Get deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetClientDeductionIDRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.clientDeductionID.get(id);


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

**Promise<[operations.GetClientDeductionIDResponse](../../models/operations/getclientdeductionidresponse.md)>**


## update

Update deduction

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateClientDeductionIDRequest } from "wingspan/dist/sdk/models/operations";
import {
  CurrencyDeductionUpdateRequest,
  DeductionUpdateRequest,
  TypeDeductionUpdateRequest,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const deductionUpdateRequest: DeductionUpdateRequest = {};

  const res = await sdk.clientDeductionID.update(id, deductionUpdateRequest);


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

**Promise<[operations.UpdateClientDeductionIDResponse](../../models/operations/updateclientdeductionidresponse.md)>**

