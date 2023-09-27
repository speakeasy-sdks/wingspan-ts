# CollaboratorsDetailsV2
(*collaboratorsDetailsV2*)

### Available Operations

* [get](#get) - Get a list of collaborators and their details

## get

Get a list of collaborators and their details

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorsDetailsV2Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorsDetailsV2.get().then((res: GetCollaboratorsDetailsV2Response) => {
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

**Promise<[operations.GetCollaboratorsDetailsV2Response](../../models/operations/getcollaboratorsdetailsv2response.md)>**

