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

async function run() {
  const sdk = new Wingspan();
const eligibilityRequirementId: string = "<value>";
const id: string = "<value>";

  const res = await sdk.collaboratorGroupEligibilityRequirement.delete(eligibilityRequirementId, id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `eligibilityRequirementId`                                   | *string*                                                     | :heavy_check_mark:                                           | Unique eligibility Requirement Id                            |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteCollaboratorGroupEligibilityRequirementResponse](../../sdk/models/operations/deletecollaboratorgroupeligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## replace

Replace Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ReplaceCollaboratorGroupEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";
import { CollaboratorGroupRequirementUpdate } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const eligibilityRequirementId: string = "<value>";
const id: string = "<value>";
const collaboratorGroupRequirementUpdate: CollaboratorGroupRequirementUpdate = {
  newEligibilityRequirementId: "<value>",
};

  const res = await sdk.collaboratorGroupEligibilityRequirement.replace(eligibilityRequirementId, id, collaboratorGroupRequirementUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `eligibilityRequirementId`                                                                                 | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique eligibility Requirement Id                                                                          |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Unique identifier                                                                                          |
| `collaboratorGroupRequirementUpdate`                                                                       | [shared.CollaboratorGroupRequirementUpdate](../../sdk/models/shared/collaboratorgrouprequirementupdate.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ReplaceCollaboratorGroupEligibilityRequirementResponse](../../sdk/models/operations/replacecollaboratorgroupeligibilityrequirementresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
