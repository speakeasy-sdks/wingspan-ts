# CollaboratorGroupEligibilityRequirement
(*collaboratorGroupEligibilityRequirement*)

### Available Operations

* [delete](#delete) - Delete Eligibility Requirement
* [replace](#replace) - Replace Eligibility Requirement

## delete

Delete Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteCollaboratorGroupEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const eligibilityRequirementId: string = "string";
const id: string = "string";

  const res = await sdk.collaboratorGroupEligibilityRequirement.delete(eligibilityRequirementId, id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `eligibilityRequirementId`                                   | *string*                                                     | :heavy_check_mark:                                           | Unique eligibility Requirement Id                            |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteCollaboratorGroupEligibilityRequirementResponse](../../models/operations/deletecollaboratorgroupeligibilityrequirementresponse.md)>**


## replace

Replace Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ReplaceCollaboratorGroupEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";
import { CollaboratorGroupRequirementUpdate } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const eligibilityRequirementId: string = "string";
const id: string = "string";
const collaboratorGroupRequirementUpdate: CollaboratorGroupRequirementUpdate = {
  newEligibilityRequirementId: "string",
};

  const res = await sdk.collaboratorGroupEligibilityRequirement.replace(eligibilityRequirementId, id, collaboratorGroupRequirementUpdate);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `eligibilityRequirementId`                                                                             | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique eligibility Requirement Id                                                                      |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | Unique identifier                                                                                      |
| `collaboratorGroupRequirementUpdate`                                                                   | [shared.CollaboratorGroupRequirementUpdate](../../models/shared/collaboratorgrouprequirementupdate.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.ReplaceCollaboratorGroupEligibilityRequirementResponse](../../models/operations/replacecollaboratorgroupeligibilityrequirementresponse.md)>**

