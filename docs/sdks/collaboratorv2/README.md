# collaboratorV2

### Available Operations

* [get](#get) - Get a single V2 Collaborator by memberId

## get

Get a single V2 Collaborator by memberId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetCollaboratorV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorV2.get({
  memberId: "tempora",
}).then((res: GetCollaboratorV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetCollaboratorV2Request](../../models/operations/getcollaboratorv2request.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetCollaboratorV2Response](../../models/operations/getcollaboratorv2response.md)>**

