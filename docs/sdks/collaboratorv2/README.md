# CollaboratorV2
(*collaboratorV2*)

### Available Operations

* [get](#get) - Get a single V2 Collaborator by memberId

## get

Get a single V2 Collaborator by memberId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorV2Request, GetCollaboratorV2Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const memberId: string = "female";

sdk.collaboratorV2.get(memberId).then((res: GetCollaboratorV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCollaboratorV2Response](../../models/operations/getcollaboratorv2response.md)>**

