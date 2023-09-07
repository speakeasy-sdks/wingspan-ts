# collaboratorEvents

### Available Operations

* [get](#get) - Get collaborator events by collaboratorId

## get

Get collaborator events by collaboratorId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetCollaboratorEventsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaboratorEvents.get({
  id: "79f9dfe0-ab7d-4a8a-90ce-187f86bc173d",
}).then((res: GetCollaboratorEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetCollaboratorEventsRequest](../../models/operations/getcollaboratoreventsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetCollaboratorEventsResponse](../../models/operations/getcollaboratoreventsresponse.md)>**

