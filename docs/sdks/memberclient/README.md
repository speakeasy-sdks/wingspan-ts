# MemberClient
(*memberClient*)

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
  clientId: "bluetooth Extended",
  company: "Schaefer Inc",
  emailCC: [
    "shred",
  ],
  emailTo: "technology East",
  integration: "evolve",
  labels: {
    "minus": "SUV",
  },
  memberData: {
    autoPayRequirement: AutoPayRequirementMemberData.None,
    externalId: "volt physical Ameliorated",
    shareTaxDocument: ShareTaxDocumentMemberData.Allow,
  },
  memberId: "South Intelligent Fish",
  name: "Fiat",
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
const id: string = "program";

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
const id: string = "female";

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
const id: string = "Van";
const memberClientUpdateRequest: MemberClientUpdateRequest = {
  clientData: "Reactive",
  clientId: "Metal cheater Islands",
  company: "King - Hills",
  emailCC: [
    "extend",
  ],
  emailTo: "bifurcated",
  form1099Balances: {
    twoThousandAndTwentyOne: {
      adjustments: 9936.8,
      correction: {
        address: "implement",
        companyStructure: CompanyStructurece853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481.LLCCorporationS,
        ein: "Bicycle guestbook",
        firstName: "Juliet",
        lastName: "Barton",
        legalBusinessName: "pascal Gasoline",
        ssn: "Northeast Wooden",
        totalAmount: 3529.19,
      },
      deliveryMethod: DeliveryMethodCollaboratorForm1099BalancesUpdateRequest.Mail,
      dispute: {
        amount: 8246.79,
        comment: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        status: Status8a9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5.LessThanNilGreaterThan,
      },
      events: "brightly",
      status: StatusCollaboratorForm1099BalancesUpdateRequest.Accepted,
    },
    twoThousandAndTwentyTwo: "compressing",
  },
  formW9Data: "haptic",
  integration: {
    quickbooks: {
      customerId: "navigating Diesel Avon",
      expenseAccountId: "hungrily",
      itemId: "Global Northeast Xenogender",
      vendorId: "West",
    },
  },
  labels: "Southeast",
  memberData: {
    autoPayRequirement: AutoPayRequirementMemberData.LessThanNilGreaterThan,
    externalId: "pascal Plastic",
    shareTaxDocument: ShareTaxDocumentMemberData.Allow,
  },
  name: "male",
  status: StatusMemberClientUpdateRequest.Inactive,
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

