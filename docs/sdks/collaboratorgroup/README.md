# CollaboratorGroup

### Available Operations

* [create](#create) - Create Collaborator Group
* [get](#get) - Get Collaborator Group
* [update](#update) - Update Collaborator Group

## create

Create Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateCollaboratorGroupResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorGroup.create({
  collaboratorSettings: {
    "numquam": "enim",
  },
  description: "dolorem",
  eligibilityRequirements: [
    {
      eligibilityRequirementId: "totam",
    },
  ],
  name: "Karen Rath",
}).then((res: CreateCollaboratorGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.CollaboratorGroupCreateRequest](../../models/shared/collaboratorgroupcreaterequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateCollaboratorGroupResponse](../../models/operations/createcollaboratorgroupresponse.md)>**


## get

Get Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorGroupRequest, GetCollaboratorGroupResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "vel";

sdk.collaboratorGroup.get(id).then((res: GetCollaboratorGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCollaboratorGroupResponse](../../models/operations/getcollaboratorgroupresponse.md)>**


## update

Update Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateCollaboratorGroupRequest, UpdateCollaboratorGroupResponse } from "wingspan/dist/sdk/models/operations";
import { CollaboratorGroupRequirement, CollaboratorGroupUpdateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "libero";
const collaboratorGroupUpdateRequest: CollaboratorGroupUpdateRequest = {
  collaboratorSettings: "deserunt",
  description: "quam",
  eligibilityRequirements: [
    "incidunt",
  ],
  name: "Shelly Schoen",
};

sdk.collaboratorGroup.update(id, collaboratorGroupUpdateRequest).then((res: UpdateCollaboratorGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | Unique identifier                                                                              |
| `collaboratorGroupUpdateRequest`                                                               | [shared.CollaboratorGroupUpdateRequest](../../models/shared/collaboratorgroupupdaterequest.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateCollaboratorGroupResponse](../../models/operations/updatecollaboratorgroupresponse.md)>**

