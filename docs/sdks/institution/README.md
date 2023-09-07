# institution

### Available Operations

* [get](#get) - Get Institution By Routing Number

## get

Get Institution By Routing Number

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetInstitutionResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.institution.get({
  routingNumber: "magni",
}).then((res: GetInstitutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetInstitutionRequest](../../models/operations/getinstitutionrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetInstitutionResponse](../../models/operations/getinstitutionresponse.md)>**

