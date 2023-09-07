# eligibilityRequirement

### Available Operations

* [create](#create) - Create Eligibility Requirement
* [delete](#delete) - Delete Eligibility Requirement
* [get](#get) - Get Eligibility Requirement
* [update](#update) - Update Eligibility Requirement

## create

Create Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";
import { EligibilityRequirementCreateRequestRequirementType } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.eligibilityRequirement.create({
  requirementType: EligibilityRequirementCreateRequestRequirementType.Signature,
  templateId: "esse",
  validFor: 4037.93,
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
import { Wingspan } from "openapi";
import { DeleteEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.eligibilityRequirement.delete({
  id: "360a15db-6a66-4065-9a1a-deaab5851d6c",
}).then((res: DeleteEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteEligibilityRequirementRequest](../../models/operations/deleteeligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteEligibilityRequirementResponse](../../models/operations/deleteeligibilityrequirementresponse.md)>**


## get

Get Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.eligibilityRequirement.get({
  id: "645b08b6-1891-4baa-8fe1-ade008e6f8c5",
}).then((res: GetEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetEligibilityRequirementRequest](../../models/operations/geteligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetEligibilityRequirementResponse](../../models/operations/geteligibilityrequirementresponse.md)>**


## update

Update Eligibility Requirement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateEligibilityRequirementResponse } from "openapi/dist/sdk/models/operations";
import { EligibilityRequirementUpdateRequestRequirementType } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.eligibilityRequirement.update({
  eligibilityRequirementUpdateRequest: {
    requirementType: EligibilityRequirementUpdateRequestRequirementType.Signature,
    templateId: "asperiores",
    validFor: 1905.67,
  },
  id: "50d8cdb5-a341-4814-b010-421813d5208e",
}).then((res: UpdateEligibilityRequirementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.UpdateEligibilityRequirementRequest](../../models/operations/updateeligibilityrequirementrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.UpdateEligibilityRequirementResponse](../../models/operations/updateeligibilityrequirementresponse.md)>**

