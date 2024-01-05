# CollaboratorV2
(*collaboratorV2*)

### Available Operations

* [get](#get) - Get a single V2 Collaborator by memberId

## get

Get a single V2 Collaborator by memberId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorV2Request } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const memberId: string = "string";

  const res = await sdk.collaboratorV2.get(memberId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCollaboratorV2Response](../../sdk/models/operations/getcollaboratorv2response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
