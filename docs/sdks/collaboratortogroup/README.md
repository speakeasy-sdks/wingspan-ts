# collaboratorToGroup

### Available Operations

* [add](#add) - Add collaborator to collaborators group
* [remove](#remove) - Remove collaborator from collaborators group

## add

Add collaborator to collaborators group

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { AddCollaboratorToGroupResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorToGroup.add({
  groupId: "velit",
  id: "2648dc2f-6151-499e-bfd0-e9fe6c632ca3",
}).then((res: AddCollaboratorToGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.AddCollaboratorToGroupRequest](../../models/operations/addcollaboratortogrouprequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.AddCollaboratorToGroupResponse](../../models/operations/addcollaboratortogroupresponse.md)>**


## remove

Remove collaborator from collaborators group

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { RemoveCollaboratorToGroupResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorToGroup.remove({
  groupId: "animi",
  id: "ed011799-6312-4fde-8477-1778ff61d017",
}).then((res: RemoveCollaboratorToGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RemoveCollaboratorToGroupRequest](../../models/operations/removecollaboratortogrouprequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RemoveCollaboratorToGroupResponse](../../models/operations/removecollaboratortogroupresponse.md)>**

