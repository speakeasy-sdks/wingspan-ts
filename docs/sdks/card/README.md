# Card
(*card*)

### Available Operations

* [create](#create) - Create card
* [delete](#delete) - Delete a card by cardId
* [get](#get) - Get card by cardId
* [update](#update) - Update card by cardId

## create

Create card

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateCardResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.card.create({
  requestPhysicalCard: false,
  shippingAddress: "excepturi",
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
import { Wingspan } from "wingspan";
import { DeleteCardRequest, DeleteCardResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "odit";

sdk.card.delete(id).then((res: DeleteCardResponse) => {
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

**Promise<[operations.DeleteCardResponse](../../models/operations/deletecardresponse.md)>**


## get

Get card by cardId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCardRequest, GetCardResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "ea";

sdk.card.get(id).then((res: GetCardResponse) => {
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

**Promise<[operations.GetCardResponse](../../models/operations/getcardresponse.md)>**


## update

Update card by cardId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateCardRequest, UpdateCardResponse } from "wingspan/dist/sdk/models/operations";
import { CardUpdateRequest, PropertiesCardUpdateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "accusantium";
const cardUpdateRequest: CardUpdateRequest = {
  status: PropertiesCardUpdateRequest.Active,
};

sdk.card.update(id, cardUpdateRequest).then((res: UpdateCardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Unique identifier                                                    |
| `cardUpdateRequest`                                                  | [shared.CardUpdateRequest](../../models/shared/cardupdaterequest.md) | :heavy_minus_sign:                                                   | N/A                                                                  |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.UpdateCardResponse](../../models/operations/updatecardresponse.md)>**

