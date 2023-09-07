# collaborator

### Available Operations

* [create](#create) - Create new collaborator
* [delete](#delete) - Delete collaborator by Id
* [get](#get) - Get collaborator by Id
* [update](#update) - Update a collaborator by Id

## create

Create new collaborator

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateCollaboratorResponse } from "openapi/dist/sdk/models/operations";
import {
  AutoPayStrategyClientData,
  CompanyStructureMemberClientFormW9Info,
  StatusCollaboratorCreateRequest,
  VerificationStratgyClientData,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.collaborator.create({
  clientData: "consectetur",
  clientId: "adipisci",
  collaboratorGroupId: "iste",
  formW9Data: {
    addressLine1: "accusantium",
    addressLine2: "rem",
    city: "New Hildegardfurt",
    companyStructure: CompanyStructureMemberClientFormW9Info.None,
    country: "Mali",
    dob: "non",
    ein: "voluptatem",
    firstName: "Dallas",
    lastName: "McClure",
    legalBusinessName: "numquam",
    postalCode: "13041-9629",
    ssn: "voluptas",
    state: "asperiores",
  },
  integration: "ea",
  labels: "consequuntur",
  memberCompany: "repellendus",
  memberEmail: "officia",
  memberId: "maxime",
  memberName: "dignissimos",
  status: StatusCollaboratorCreateRequest.Pending,
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
import { Wingspan } from "openapi";
import { DeleteCollaboratorResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaborator.delete({
  id: "f515cc41-3aa6-43aa-a8d6-7864dbb675fd",
}).then((res: DeleteCollaboratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.DeleteCollaboratorRequest](../../models/operations/deletecollaboratorrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.DeleteCollaboratorResponse](../../models/operations/deletecollaboratorresponse.md)>**


## get

Get collaborator by Id

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetCollaboratorResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaborator.get({
  id: "5e60b375-ed4f-46fb-ae41-f33317fe35b6",
}).then((res: GetCollaboratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetCollaboratorRequest](../../models/operations/getcollaboratorrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetCollaboratorResponse](../../models/operations/getcollaboratorresponse.md)>**


## update

Update a collaborator by Id

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateCollaboratorResponse } from "openapi/dist/sdk/models/operations";
import {
  AutoPayStrategyClientData,
  CompanyStructurece853dbef33b2b91880690c84bc5314340c1301fd7b3503dd6ce79c844e2a481,
  DeliveryMethodCollaboratorForm1099BalancesUpdateRequest,
  Status8a9c6cb49482a98cdd603ff09858cdc3e5ef6ad9807c876c4161d925a96694a5,
  StatusCollaboratorForm1099BalancesUpdateRequest,
  StatusCollaboratorUpdateRequest,
  VerificationStratgyClientData,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.collaborator.update({
  collaboratorUpdateRequest: {
    clientData: "voluptates",
    form1099Balances: {
      twoThousandAndTwentyOne: "accusamus",
      twoThousandAndTwentyTwo: {
        adjustments: 2724.37,
        correction: "voluptas",
        deliveryMethod: DeliveryMethodCollaboratorForm1099BalancesUpdateRequest.Mail,
        dispute: "minima",
        events: {},
        status: StatusCollaboratorForm1099BalancesUpdateRequest.Accepted,
      },
    },
    formW9Data: "minus",
    integration: "blanditiis",
    labels: "dolore",
    status: StatusCollaboratorUpdateRequest.Inactive,
  },
  id: "ed53b88f-3a8d-48f5-80b2-f2fb7b194a27",
}).then((res: UpdateCollaboratorResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateCollaboratorRequest](../../models/operations/updatecollaboratorrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateCollaboratorResponse](../../models/operations/updatecollaboratorresponse.md)>**

