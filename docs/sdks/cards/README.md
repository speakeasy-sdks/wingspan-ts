# Cards
(*cards*)

### Available Operations

* [list](#list) - List cards

## list

List cards

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListCardsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.cards.list().then((res: ListCardsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCardsResponse](../../models/operations/listcardsresponse.md)>**

