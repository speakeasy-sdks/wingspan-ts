# CollaboratorToGroup
(*collaboratorToGroup*)

### Available Operations

* [add](#add) - Add collaborator to collaborators group
* [remove](#remove) - Remove collaborator from collaborators group

## add

Add collaborator to collaborators group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { AddCollaboratorToGroupRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const groupId: string = "string";
const id: string = "string";

  const res = await sdk.collaboratorToGroup.add(groupId, id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `groupId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique group Id                                              |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.AddCollaboratorToGroupResponse](../../models/operations/addcollaboratortogroupresponse.md)>**


## remove

Remove collaborator from collaborators group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { RemoveCollaboratorToGroupRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const groupId: string = "string";
const id: string = "string";

  const res = await sdk.collaboratorToGroup.remove(groupId, id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `groupId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique group Id                                              |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.RemoveCollaboratorToGroupResponse](../../models/operations/removecollaboratortogroupresponse.md)>**

