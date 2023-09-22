# ClientCollaboratorV2

### Available Operations

* [get](#get) - Get a single V2 Collaborator by clientId

## get

Get a single V2 Collaborator by clientId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetClientCollaboratorV2Request, GetClientCollaboratorV2Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const clientId: string = "maiores";

sdk.clientCollaboratorV2.get(clientId).then((res: GetClientCollaboratorV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `clientId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a client                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetClientCollaboratorV2Response](../../models/operations/getclientcollaboratorv2response.md)>**

