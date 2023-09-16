# MemberClient

### Available Operations

* [create](#create) - Create memberClient
* [delete](#delete) - Delete memberClient
* [get](#get) - Get Member Client
* [update](#update) - Update memberClient

## create

Create memberClient

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateMemberClientResponse } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  ShareTaxDocumentMemberData,
  StatusMemberClientCreateRequest,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.memberClient.create({
  clientId: "consequatur",
  company: "Toy and Sons",
  emailCC: [
    "aspernatur",
  ],
  emailTo: "sequi",
  integration: {
    quickbooks: "recusandae",
  },
  labels: "distinctio",
  memberData: {
    autoPayRequirement: AutoPayRequirementMemberData.None,
    externalId: "inventore",
    shareTaxDocument: ShareTaxDocumentMemberData.Decline,
  },
  memberId: "totam",
  name: "Tom Kuhn",
  status: StatusMemberClientCreateRequest.LessThanNilGreaterThan,
}).then((res: CreateMemberClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [shared.MemberClientCreateRequest](../../models/shared/memberclientcreaterequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateMemberClientResponse](../../models/operations/creatememberclientresponse.md)>**


## delete

Delete memberClient

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteMemberClientRequest, DeleteMemberClientResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "dolores";

sdk.memberClient.delete(id).then((res: DeleteMemberClientResponse) => {
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

**Promise<[operations.DeleteMemberClientResponse](../../models/operations/deletememberclientresponse.md)>**


## get

Get Member Client

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetMemberClientRequest, GetMemberClientResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "deserunt";

sdk.memberClient.get(id).then((res: GetMemberClientResponse) => {
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

**Promise<[operations.GetMemberClientResponse](../../models/operations/getmemberclientresponse.md)>**


## update

Update memberClient

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateMemberClientRequest, UpdateMemberClientResponse } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  AutoPayStrategyClientData,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481Address2,
  ClientData,
  CollaboratorForm1099BalancesUpdateRequest,
  CollaboratorForm1099BalancesUpdateRequestEvents2,
  CompanyStructurece853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  D86c1fba5267ac3d9ce2954a6e46b70e471c0f91a44abbe94565ae50e6e9e863,
  DeliveryMethodCollaboratorForm1099BalancesUpdateRequest,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  MemberClientUpdateRequest,
  MemberClientUpdateRequestFormW9Data2,
  MemberData,
  Ninetyf96495b02c2509fff131505484d46479a91b7d23ed2b0f438ca117d0bccad7,
  ShareTaxDocumentMemberData,
  Status8a9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  StatusCollaboratorForm1099BalancesUpdateRequest,
  StatusMemberClientUpdateRequest,
  Threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f,
  VerificationStratgyClientData,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "molestiae";
const memberClientUpdateRequest: MemberClientUpdateRequest = {
  clientData: "porro",
  clientId: "eum",
  company: "Langosh - Cronin",
  emailCC: [
    "deleniti",
  ],
  emailTo: "fugit",
  form1099Balances: {
    twoThousandAndTwentyOne: {
      adjustments: 2775.96,
      correction: {
        address: "minima",
        companyStructure: CompanyStructurece853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481.CorporationS,
        ein: "fugit",
        firstName: "Verlie",
        lastName: "Cronin",
        legalBusinessName: "ratione",
        ssn: "explicabo",
        totalAmount: 9039.84,
      },
      deliveryMethod: DeliveryMethodCollaboratorForm1099BalancesUpdateRequest.Both,
      dispute: {
        amount: 922.6,
        comment: "esse",
        status: Status8a9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5.LessThanNilGreaterThan,
      },
      events: {},
      status: StatusCollaboratorForm1099BalancesUpdateRequest.Ready,
    },
    twoThousandAndTwentyTwo: "quod",
  },
  formW9Data: {},
  integration: {
    quickbooks: "quasi",
  },
  labels: {
    "vel": "harum",
  },
  memberData: "rerum",
  name: "Warren Rau V",
  status: StatusMemberClientUpdateRequest.Pending,
};

sdk.memberClient.update(id, memberClientUpdateRequest).then((res: UpdateMemberClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | Unique identifier                                                                    |
| `memberClientUpdateRequest`                                                          | [shared.MemberClientUpdateRequest](../../models/shared/memberclientupdaterequest.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateMemberClientResponse](../../models/operations/updatememberclientresponse.md)>**

