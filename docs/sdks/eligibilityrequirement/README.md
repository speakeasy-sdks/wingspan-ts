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
import { EligibilityRequirementCreateRequestRequirementType } from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.eligibilityRequirement.create({
    requirementType: EligibilityRequirementCreateRequestRequirementType.Signature,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { DeleteEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.eligibilityRequirement.delete(id);

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

**Promise<[operations.DeleteEligibilityRequirementResponse](../../models/operations/deleteeligibilityrequirementresponse.md)>**


## get

Get Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.eligibilityRequirement.get(id);

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

**Promise<[operations.GetEligibilityRequirementResponse](../../models/operations/geteligibilityrequirementresponse.md)>**


## update

Update Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateEligibilityRequirementRequest } from "wingspan/dist/sdk/models/operations";
import {
  EligibilityRequirementUpdateRequest,
  EligibilityRequirementUpdateRequestRequirementType,
} from "wingspan/dist/sdk/models/shared";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const eligibilityRequirementUpdateRequest: EligibilityRequirementUpdateRequest = {
  requirementType: EligibilityRequirementUpdateRequestRequirementType.Signature,
};

  const res = await sdk.eligibilityRequirement.update(id, eligibilityRequirementUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | Unique identifier                                                                                        |
| `eligibilityRequirementUpdateRequest`                                                                    | [shared.EligibilityRequirementUpdateRequest](../../models/shared/eligibilityrequirementupdaterequest.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.UpdateEligibilityRequirementResponse](../../models/operations/updateeligibilityrequirementresponse.md)>**

