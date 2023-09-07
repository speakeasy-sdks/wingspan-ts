# clientCollaboratorV2

### Available Operations

* [get](#get) - Get a single V2 Collaborator by clientId

## get

Get a single V2 Collaborator by clientId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetClientCollaboratorV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientCollaboratorV2.get({
  clientId: "totam",
}).then((res: GetClientCollaboratorV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetClientCollaboratorV2Request](../../models/operations/getclientcollaboratorv2request.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetClientCollaboratorV2Response](../../models/operations/getclientcollaboratorv2response.md)>**

