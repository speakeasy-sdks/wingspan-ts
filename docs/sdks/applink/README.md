# appLink

### Available Operations

* [get](#get) - Gets an application link for creating the clearing bank account

## get

Gets an application link for creating the clearing bank account

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetAppLinkResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.appLink.get({
  memberId: "ipsam",
}).then((res: GetAppLinkResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [operations.GetAppLinkRequest](../../models/operations/getapplinkrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.GetAppLinkResponse](../../models/operations/getapplinkresponse.md)>**

