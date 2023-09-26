# Collaborators

### Available Operations

* [list](#list) - List all collaborators

## list

List all collaborators

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListCollaboratorsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.collaborators.list().then((res: ListCollaboratorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListCollaboratorsResponse](../../models/operations/listcollaboratorsresponse.md)>**

