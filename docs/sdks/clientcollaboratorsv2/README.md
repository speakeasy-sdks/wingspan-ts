# ClientCollaboratorsV2
(*clientCollaboratorsV2*)

### Available Operations

* [list](#list) - Lists all collaborators in the V2 format

## list

Lists all collaborators in the V2 format

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListClientCollaboratorsV2Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientCollaboratorsV2.list().then((res: ListClientCollaboratorsV2Response) => {
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

**Promise<[operations.ListClientCollaboratorsV2Response](../../models/operations/listclientcollaboratorsv2response.md)>**

