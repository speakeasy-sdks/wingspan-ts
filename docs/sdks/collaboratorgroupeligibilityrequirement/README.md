# collaboratorGroupEligibilityRequirement

### Available Operations

* [delete](#delete) - Delete Eligibility Requirement
* [replace](#replace) - Replace Eligibility Requirement

## delete

Delete Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DeleteCollaboratorGroupEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorGroupEligibilityRequirement.delete({
  eligibilityRequirementId: "alias",
  id: "ff2a54a3-1e94-4764-a3e8-65e7956f9251",
}).then((res: DeleteCollaboratorGroupEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.DeleteCollaboratorGroupEligibilityRequirementRequest](../../models/operations/deletecollaboratorgroupeligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.DeleteCollaboratorGroupEligibilityRequirementResponse](../../models/operations/deletecollaboratorgroupeligibilityrequirementresponse.md)>**


## replace

Replace Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { ReplaceCollaboratorGroupEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorGroupEligibilityRequirement.replace({
  collaboratorGroupRequirementUpdate: {
    newEligibilityRequirementId: "animi",
  },
  eligibilityRequirementId: "nostrum",
  id: "a9da660f-f57b-4faa-94f9-efc1b4512c10",
}).then((res: ReplaceCollaboratorGroupEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.ReplaceCollaboratorGroupEligibilityRequirementRequest](../../models/operations/replacecollaboratorgroupeligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.ReplaceCollaboratorGroupEligibilityRequirementResponse](../../models/operations/replacecollaboratorgroupeligibilityrequirementresponse.md)>**

