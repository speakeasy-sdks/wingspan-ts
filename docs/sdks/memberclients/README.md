# memberClients

### Available Operations

* [list](#list) - List memberClients

## list

List memberClients

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ListMemberClientsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.memberClients.list().then((res: ListMemberClientsResponse) => {
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

**Promise<[operations.ListMemberClientsResponse](../../models/operations/listmemberclientsresponse.md)>**

