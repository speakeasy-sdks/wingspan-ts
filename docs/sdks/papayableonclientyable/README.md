# PaPayableOnClientyable
(*paPayableOnClientyable*)

### Available Operations

* [delete](#delete) - Delete payable on client by payableId

## delete

Delete payable on client by payableId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeletePayableOnClientRequest, DeletePayableOnClientResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "program";

sdk.paPayableOnClientyable.delete(id).then((res: DeletePayableOnClientResponse) => {
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

**Promise<[operations.DeletePayableOnClientResponse](../../models/operations/deletepayableonclientresponse.md)>**

