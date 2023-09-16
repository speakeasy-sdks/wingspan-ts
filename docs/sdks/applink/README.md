# AppLink

### Available Operations

* [get](#get) - Gets an application link for creating the clearing bank account

## get

Gets an application link for creating the clearing bank account

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetAppLinkRequest, GetAppLinkResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const memberId: string = "maiores";

sdk.appLink.get(memberId).then((res: GetAppLinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `memberId`                                                   | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of a member                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetAppLinkResponse](../../models/operations/getapplinkresponse.md)>**

