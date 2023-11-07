# CollaboratorsV2
(*.collaboratorsV2*)

### Available Operations

* [list](#list) - Lists all collaborators in the V2 format

## list

Lists all collaborators in the V2 format

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.collaboratorsV2.list();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCollaboratorsV2Response](../../models/operations/listcollaboratorsv2response.md)>**

