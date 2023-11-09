# CollaboratorGroup
(*collaboratorGroup*)

### Available Operations

* [create](#create) - Create Collaborator Group
* [get](#get) - Get Collaborator Group
* [update](#update) - Update Collaborator Group

## create

Create Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.collaboratorGroup.create({
    collaboratorSettings: {
      "key": "string",
    },
    description: "Multi-tiered human-resource model",
    eligibilityRequirements: [
      {},
    ],
    name: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [shared.CollaboratorGroupCreateRequest](../../sdk/models/shared/collaboratorgroupcreaterequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateCollaboratorGroupResponse](../../sdk/models/operations/createcollaboratorgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## get

Get Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorGroupRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.collaboratorGroup.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetCollaboratorGroupResponse](../../sdk/models/operations/getcollaboratorgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

Update Collaborator Group

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateCollaboratorGroupRequest } from "wingspan/dist/sdk/models/operations";
import { CollaboratorGroupRequirement, CollaboratorGroupUpdateRequest } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const collaboratorGroupUpdateRequest: CollaboratorGroupUpdateRequest = {
  collaboratorSettings: {
    "key": "string",
  },
  eligibilityRequirements: [
    {},
  ],
};

  const res = await sdk.collaboratorGroup.update(id, collaboratorGroupUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                             | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Unique identifier                                                                                     |
| `collaboratorGroupUpdateRequest`                                                                      | [shared.CollaboratorGroupUpdateRequest](../../../sdk/models/shared/collaboratorgroupupdaterequest.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `config`                                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                          | :heavy_minus_sign:                                                                                    | Available config options for making requests.                                                         |


### Response

**Promise<[operations.UpdateCollaboratorGroupResponse](../../sdk/models/operations/updatecollaboratorgroupresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
