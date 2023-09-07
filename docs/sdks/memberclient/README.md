# memberClient

### Available Operations

* [create](#create) - Create memberClient
* [delete](#delete) - Delete memberClient
* [get](#get) - Get Member Client
* [update](#update) - Update memberClient

## create

Create memberClient

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateMemberClientResponse } from "openapi/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  ShareTaxDocumentMemberData,
  StatusMemberClientCreateRequest,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.memberClient.create({
  clientId: "nostrum",
  company: "Russel, Windler and Rippin",
  emailCC: [
    "vero",
  ],
  emailTo: "odit",
  integration: {
    quickbooks: {
      customerId: "nemo",
      itemId: "reprehenderit",
    },
  },
  labels: "odio",
  memberData: "in",
  memberId: "ducimus",
  name: "Ms. Phillip Mraz",
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
import { Wingspan } from "openapi";
import { DeleteMemberClientResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.memberClient.delete({
  id: "eac646ec-b573-4409-a3eb-1e5a2b12eb07",
}).then((res: DeleteMemberClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteMemberClientRequest](../../models/operations/deletememberclientrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteMemberClientResponse](../../models/operations/deletememberclientresponse.md)>**


## get

Get Member Client

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetMemberClientResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.memberClient.get({
  id: "f116db99-545f-4c95-ba88-970e189dbb30",
}).then((res: GetMemberClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetMemberClientRequest](../../models/operations/getmemberclientrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetMemberClientResponse](../../models/operations/getmemberclientresponse.md)>**


## update

Update memberClient

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateMemberClientResponse } from "openapi/dist/sdk/models/operations";
import {
  AutoPayRequirementMemberData,
  AutoPayStrategyClientData,
  CompanyStructurece853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  DeliveryMethodCollaboratorForm1099BalancesUpdateRequest,
  ShareTaxDocumentMemberData,
  Status8a9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  StatusCollaboratorForm1099BalancesUpdateRequest,
  StatusMemberClientUpdateRequest,
  VerificationStratgyClientData,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.memberClient.update({
  memberClientUpdateRequest: {
    clientData: {
      autoPayStrategy: AutoPayStrategyClientData.LessThanNilGreaterThan,
      externalId: "cum",
      verificationStratgy: VerificationStratgyClientData.None,
    },
    clientId: "adipisci",
    company: "Nolan, Baumbach and Hayes",
    emailCC: [
      "veniam",
    ],
    emailTo: "libero",
    form1099Balances: "cupiditate",
    formW9Data: "eligendi",
    integration: {
      quickbooks: "magnam",
    },
    labels: {
      "sed": "asperiores",
    },
    memberData: "consequuntur",
    name: "Dwight Connelly",
    status: StatusMemberClientUpdateRequest.Inactive,
  },
  id: "13bb6f48-b656-4bcd-b35f-f2e4b27537a8",
}).then((res: UpdateMemberClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateMemberClientRequest](../../models/operations/updatememberclientrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateMemberClientResponse](../../models/operations/updatememberclientresponse.md)>**

