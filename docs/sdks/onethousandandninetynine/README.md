# oneThousandAndNinetyNine

### Available Operations

* [calculate](#calculate) - Calculate 1099 amounts for collaborator
* [mark](#mark) - Mark a 1099 submission as returned by mail for collaborator
* [remail](#remail) - Re-mail 1099 submission for collaborator

## calculate

Calculate 1099 amounts for collaborator

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { Calculate1099Response } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.calculate({
  memberClientId: "distinctio",
  year: 8442.66,
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
import { Wingspan } from "openapi";
import { Mark1099Response } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.mark({
  memberId: "unde",
  submissionIndex: 8579.46,
  year: 5448.83,
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
import { Wingspan } from "openapi";
import { Remail1099Response } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.remail({
  address: {
    addressLine1: "illum",
    addressLine2: "vel",
    city: "Oberbrunnerbury",
    postalCode: "28092",
    state: "suscipit",
  },
  documentIndex: 4776.65,
  memberId: "minus",
  year: 8121.69,
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

