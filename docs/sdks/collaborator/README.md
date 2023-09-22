# Collaborator

### Available Operations

* [create](#create) - Create new collaborator
* [delete](#delete) - Delete collaborator by Id
* [get](#get) - Get collaborator by Id
* [update](#update) - Update a collaborator by Id

## create

Create new collaborator

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateCollaboratorResponse } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayStrategyClientData,
  CompanyStructureMemberClientFormW9Info,
  StatusCollaboratorCreateRequest,
  VerificationStratgyClientData,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.collaborator.create({
  clientData: {
    autoPayStrategy: AutoPayStrategyClientData.All,
    externalId: "soluta",
    verificationStratgy: VerificationStratgyClientData.LessThanNilGreaterThan,
  },
  clientId: "iusto",
  collaboratorGroupId: "voluptate",
  formW9Data: {
    addressLine1: "deleniti",
    addressLine2: "omnis",
    city: "Portland",
    companyStructure: CompanyStructureMemberClientFormW9Info.Partnership,
    country: "Republic of Korea",
    dob: "ipsum",
    ein: "voluptate",
    firstName: "Makenzie",
    lastName: "Ullrich",
    legalBusinessName: "eius",
    postalCode: "02783",
    ssn: "saepe",
    state: "suscipit",
  },
  integration: {
    quickbooks: {
      expenseAccountId: "minima",
      vendorId: "repellendus",
    },
  },
  labels: {
    "similique": "alias",
  },
  memberCompany: "at",
  memberEmail: "quaerat",
  memberId: "tempora",
  memberName: "vel",
  status: StatusCollaboratorCreateRequest.LessThanNilGreaterThan,
}).then((res: CreateCollaboratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.CollaboratorCreateRequest](../../models/shared/collaboratorcreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateCollaboratorResponse](../../models/operations/createcollaboratorresponse.md)>**


## delete

Delete collaborator by Id

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteCollaboratorRequest, DeleteCollaboratorResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "officiis";

sdk.collaborator.delete(id).then((res: DeleteCollaboratorResponse) => {
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

**Promise<[operations.DeleteCollaboratorResponse](../../models/operations/deletecollaboratorresponse.md)>**


## get

Get collaborator by Id

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorRequest, GetCollaboratorResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "qui";

sdk.collaborator.get(id).then((res: GetCollaboratorResponse) => {
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

**Promise<[operations.GetCollaboratorResponse](../../models/operations/getcollaboratorresponse.md)>**


## update

Update a collaborator by Id

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateCollaboratorRequest, UpdateCollaboratorResponse } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayStrategyClientData,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481Address2,
  ClientData,
  CollaboratorForm1099BalancesUpdateRequest,
  CollaboratorForm1099BalancesUpdateRequestEvents2,
  CollaboratorUpdateRequest,
  CollaboratorUpdateRequestFormW9Data2,
  CompanyStructurece853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  DeliveryMethodCollaboratorForm1099BalancesUpdateRequest,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  Ninetyf96495b02c2509fff131505484d46479a91b7d23ed2b0f438ca117d0bccad7,
  Sixa65bb5a9fe6d1135b7182baff68e9bc6612ee2c1ab942926fe2804c58663cf4,
  Status8a9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  StatusCollaboratorForm1099BalancesUpdateRequest,
  StatusCollaboratorUpdateRequest,
  TwentySixe8ea23ccb1e007e7d6560175c7e75c768dac34727b7fe1d834ca24b8221ef4,
  VerificationStratgyClientData,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "dolorum";
const collaboratorUpdateRequest: CollaboratorUpdateRequest = {
  clientData: {
    autoPayStrategy: AutoPayStrategyClientData.None,
    externalId: "harum",
    verificationStratgy: VerificationStratgyClientData.All,
  },
  form1099Balances: "quisquam",
  formW9Data: {},
  integration: "tempore",
  labels: {
    "numquam": "enim",
  },
  status: StatusCollaboratorUpdateRequest.Active,
};

sdk.collaborator.update(id, collaboratorUpdateRequest).then((res: UpdateCollaboratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier                                                                    |
| `collaboratorUpdateRequest`                                                          | [shared.CollaboratorUpdateRequest](../../models/shared/collaboratorupdaterequest.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateCollaboratorResponse](../../models/operations/updatecollaboratorresponse.md)>**

