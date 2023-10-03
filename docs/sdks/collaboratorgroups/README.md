# CollaboratorGroups
(*collaboratorGroups*)

### Available Operations

* [list](#list) - List Collaborator Groups

## list

List Collaborator Groups

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListCollaboratorGroupsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorGroups.list().then((res: ListCollaboratorGroupsResponse) => {
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

**Promise<[operations.ListCollaboratorGroupsResponse](../../models/operations/listcollaboratorgroupsresponse.md)>**

