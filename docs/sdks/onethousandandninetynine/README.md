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

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.oneThousandAndNinetyNine.calculate({
    memberClientId: "string",
    year: 6611.96,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.oneThousandAndNinetyNine.mark({
    memberId: "string",
    submissionIndex: 2694.09,
    year: 735.52,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.oneThousandAndNinetyNine.remail({
    address: {
      addressLine1: "string",
      city: "Port Cara",
      postalCode: "13281-2223",
      state: "string",
    },
    memberId: "string",
    year: 3145.26,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.Remail1099Request](../../models/shared/remail1099request.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.Remail1099Response](../../models/operations/remail1099response.md)>**

