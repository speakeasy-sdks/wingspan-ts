# ClientCollaboratorV2
(*clientCollaboratorV2*)

### Available Operations

* [get](#get) - Get a single V2 Collaborator by clientId

## get

Get a single V2 Collaborator by clientId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetClientCollaboratorV2Request } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const clientId: string = "string";

  const res = await sdk.clientCollaboratorV2.get(clientId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a client                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetClientCollaboratorV2Response](../../sdk/models/operations/getclientcollaboratorv2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
