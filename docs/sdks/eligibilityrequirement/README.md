# EligibilityRequirement
(*eligibilityRequirement*)

### Available Operations

* [create](#create) - Create Eligibility Requirement
* [delete](#delete) - Delete Eligibility Requirement
* [get](#get) - Get Eligibility Requirement
* [update](#update) - Update Eligibility Requirement

## create

Create Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateEligibilityRequirementResponse } from "wingspan/dist/sdk/models/operations";
import { EligibilityRequirementCreateRequestRequirementType } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.eligibilityRequirement.create({
  requirementType: EligibilityRequirementCreateRequestRequirementType.Signature,
  templateId: "quas",
  validFor: 9295.3,
}).then((res: CreateEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [shared.EligibilityRequirementCreateRequest](../../models/shared/eligibilityrequirementcreaterequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.CreateEligibilityRequirementResponse](../../models/operations/createeligibilityrequirementresponse.md)>**


## delete

Delete Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteEligibilityRequirementRequest, DeleteEligibilityRequirementResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "consequatur";

sdk.eligibilityRequirement.delete(id).then((res: DeleteEligibilityRequirementResponse) => {
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

**Promise<[operations.DeleteEligibilityRequirementResponse](../../models/operations/deleteeligibilityrequirementresponse.md)>**


## get

Get Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetEligibilityRequirementRequest, GetEligibilityRequirementResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "est";

sdk.eligibilityRequirement.get(id).then((res: GetEligibilityRequirementResponse) => {
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

**Promise<[operations.GetEligibilityRequirementResponse](../../models/operations/geteligibilityrequirementresponse.md)>**


## update

Update Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateEligibilityRequirementRequest, UpdateEligibilityRequirementResponse } from "wingspan/dist/sdk/models/operations";
import {
  EligibilityRequirementUpdateRequest,
  EligibilityRequirementUpdateRequestRequirementType,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "repellendus";
const eligibilityRequirementUpdateRequest: EligibilityRequirementUpdateRequest = {
  requirementType: EligibilityRequirementUpdateRequestRequirementType.Signature,
  templateId: "porro",
  validFor: 9843.3,
};

sdk.eligibilityRequirement.update(id, eligibilityRequirementUpdateRequest).then((res: UpdateEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Unique identifier                                                                                        |
| `eligibilityRequirementUpdateRequest`                                                                    | [shared.EligibilityRequirementUpdateRequest](../../models/shared/eligibilityrequirementupdaterequest.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateEligibilityRequirementResponse](../../models/operations/updateeligibilityrequirementresponse.md)>**

