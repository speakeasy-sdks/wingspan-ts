# PaPayableOnClientyable
(*paPayableOnClientyable*)

### Available Operations

* [delete](#delete) - Delete payable on client by payableId

## delete

Delete payable on client by payableId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeletePayableOnClientRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.paPayableOnClientyable.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeletePayableOnClientResponse](../../sdk/models/operations/deletepayableonclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
