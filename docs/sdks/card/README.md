# card

### Available Operations

* [create](#create) - Create card
* [delete](#delete) - Delete a card by cardId
* [get](#get) - Get card by cardId
* [update](#update) - Update card by cardId

## create

Create card

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateCardResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.card.create({
  requestPhysicalCard: false,
  shippingAddress: {
    addressLine1: "quaerat",
    addressLine2: "quos",
    city: "East Cornelius",
    postalCode: "12957",
    state: "voluptate",
  },
}).then((res: CreateCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.CardCreateRequest](../../models/shared/cardcreaterequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateCardResponse](../../models/operations/createcardresponse.md)>**


## delete

Delete a card by cardId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeleteCardResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.card.delete({
  id: "7f3a4100-674e-4bf6-9280-d1ba77a89ebf",
}).then((res: DeleteCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.DeleteCardRequest](../../models/operations/deletecardrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.DeleteCardResponse](../../models/operations/deletecardresponse.md)>**


## get

Get card by cardId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetCardResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.card.get({
  id: "737ae420-3ce5-4e6a-95d8-a0d446ce2af7",
}).then((res: GetCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [operations.GetCardRequest](../../models/operations/getcardrequest.md) | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.GetCardResponse](../../models/operations/getcardresponse.md)>**


## update

Update card by cardId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateCardResponse } from "openapi/dist/sdk/models/operations";
import { PropertiesCardUpdateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.card.update({
  cardUpdateRequest: {
    status: PropertiesCardUpdateRequest.Frozen,
  },
  id: "73cf3be4-53f8-470b-b26b-5a73429cdb1a",
}).then((res: UpdateCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.UpdateCardRequest](../../models/operations/updatecardrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdateCardResponse](../../models/operations/updatecardresponse.md)>**

