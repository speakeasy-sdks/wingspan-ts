# collaboratorGroup

### Available Operations

* [create](#create) - Create Collaborator Group
* [get](#get) - Get Collaborator Group
* [update](#update) - Update Collaborator Group

## create

Create Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateCollaboratorGroupResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorGroup.create({
  collaboratorSettings: "atque",
  description: "error",
  eligibilityRequirements: [
    {
      eligibilityRequirementId: "officiis",
    },
  ],
  name: "Wendell Harber",
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
import { Wingspan } from "openapi";
import { GetCollaboratorGroupResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorGroup.get({
  id: "f8d986e8-81ea-4d4f-8e10-12563f94e29e",
}).then((res: GetCollaboratorGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetCollaboratorGroupRequest](../../models/operations/getcollaboratorgrouprequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetCollaboratorGroupResponse](../../models/operations/getcollaboratorgroupresponse.md)>**


## update

Update Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateCollaboratorGroupResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorGroup.update({
  collaboratorGroupUpdateRequest: {
    collaboratorSettings: {
      "in": "adipisci",
    },
    description: "eveniet",
    eligibilityRequirements: [
      {
        eligibilityRequirementId: "consequuntur",
      },
    ],
    name: "Amelia Harvey",
  },
  id: "15be3e06-0807-4e2b-ae3a-b8845f0597a6",
}).then((res: UpdateCollaboratorGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateCollaboratorGroupRequest](../../models/operations/updatecollaboratorgrouprequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateCollaboratorGroupResponse](../../models/operations/updatecollaboratorgroupresponse.md)>**

