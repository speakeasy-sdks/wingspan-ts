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
import {
  AutoPayRequirementMemberData,
  ShareTaxDocumentMemberData,
  StatusMemberClientCreateRequest,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.memberClient.create({
    emailCC: [
      "string",
    ],
    integration: {
      quickbooks: {},
    },
    labels: {
      "key": "string",
    },
    memberData: {},
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [shared.MemberClientCreateRequest](../../sdk/models/shared/memberclientcreaterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateMemberClientResponse](../../sdk/models/operations/creatememberclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

Delete memberClient

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DeleteMemberClientRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.memberClient.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteMemberClientResponse](../../sdk/models/operations/deletememberclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

Get Member Client

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetMemberClientRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.memberClient.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetMemberClientResponse](../../sdk/models/operations/getmemberclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update memberClient

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateMemberClientRequest } from "wingspan/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  AutoPayStrategyClientData,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  Ce853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481Address,
  ClientData,
  CollaboratorForm1099BalancesUpdateRequest,
  CompanyStructurece853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  D86c1fba5267ac3d9ce2954a6e46b70e471c0f91a44abbe94565ae50e6e9e863,
  DeliveryMethodCollaboratorForm1099BalancesUpdateRequest,
  Eighta9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  Events,
  MemberClientUpdateRequest,
  MemberClientUpdateRequestFormW9Data,
  MemberData,
  Ninetyf96495b02c2509fff131505484d46479a91b7d23ed2b0f438ca117d0bccad7,
  ShareTaxDocumentMemberData,
  Status8a9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  StatusCollaboratorForm1099BalancesUpdateRequest,
  StatusMemberClientUpdateRequest,
  Threed33fba3f009de957b3be92fba006d6383af7e39f823cc1fd213506f6205100f,
  VerificationStratgyClientData,
} from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();
const id: string = "string";
const memberClientUpdateRequest: MemberClientUpdateRequest = {
  clientData: {},
  emailCC: [
    "string",
  ],
  form1099Balances: {
    twoThousandAndTwentyOne: {
      correction: {
        address: {},
      },
      dispute: {},
      events: {},
    },
    twoThousandAndTwentyTwo: {
      correction: {
        address: {},
      },
      dispute: {},
      events: {},
    },
  },
  formW9Data: {},
  integration: {
    quickbooks: {},
  },
  labels: {
    "key": "string",
  },
  memberData: {},
};

  const res = await sdk.memberClient.update(id, memberClientUpdateRequest);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | Unique identifier                                                                        |
| `memberClientUpdateRequest`                                                              | [shared.MemberClientUpdateRequest](../../sdk/models/shared/memberclientupdaterequest.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateMemberClientResponse](../../sdk/models/operations/updatememberclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
