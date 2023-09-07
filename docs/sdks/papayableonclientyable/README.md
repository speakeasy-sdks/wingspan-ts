# paPayableOnClientyable

### Available Operations

* [delete](#delete) - Delete payable on client by payableId

## delete

Delete payable on client by payableId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeletePayableOnClientResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.paPayableOnClientyable.delete({
  id: "64ad7334-ec1b-4781-b36a-08088d100efa",
}).then((res: DeletePayableOnClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.DeletePayableOnClientRequest](../../models/operations/deletepayableonclientrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.DeletePayableOnClientResponse](../../models/operations/deletepayableonclientresponse.md)>**

