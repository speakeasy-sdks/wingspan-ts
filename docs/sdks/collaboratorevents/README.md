# CollaboratorEvents
(*collaboratorEvents*)

### Available Operations

* [get](#get) - Get collaborator events by collaboratorId

## get

Get collaborator events by collaboratorId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetCollaboratorEventsRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";

  const res = await sdk.collaboratorEvents.get(id);


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

**Promise<[operations.GetCollaboratorEventsResponse](../../models/operations/getcollaboratoreventsresponse.md)>**

