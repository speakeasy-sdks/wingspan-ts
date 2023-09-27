# OneThousandAndNinetyNine
(*oneThousandAndNinetyNine*)

### Available Operations

* [calculate](#calculate) - Calculate 1099 amounts for collaborator
* [mark](#mark) - Mark a 1099 submission as returned by mail for collaborator
* [remail](#remail) - Re-mail 1099 submission for collaborator

## calculate

Calculate 1099 amounts for collaborator

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { Calculate1099Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.calculate({
  memberClientId: "unde",
  year: 8579.46,
}).then((res: Calculate1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [shared.Calculate1099Request](../../models/shared/calculate1099request.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.Calculate1099Response](../../models/operations/calculate1099response.md)>**


## mark

Mark a 1099 submission as returned by mail for collaborator

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { Mark1099Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.mark({
  memberId: "corrupti",
  submissionIndex: 8472.52,
  year: 4236.55,
}).then((res: Mark1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.Mark1099AsUndeliveredRequest](../../models/shared/mark1099asundeliveredrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.Mark1099Response](../../models/operations/mark1099response.md)>**


## remail

Re-mail 1099 submission for collaborator

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { Remail1099Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.remail({
  address: {
    addressLine1: "error",
    addressLine2: "deserunt",
    city: "South Eli",
    postalCode: "09234-7854",
    state: "excepturi",
  },
  documentIndex: 3927.85,
  memberId: "recusandae",
  year: 8360.79,
}).then((res: Remail1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.Remail1099Request](../../models/shared/remail1099request.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.Remail1099Response](../../models/operations/remail1099response.md)>**

