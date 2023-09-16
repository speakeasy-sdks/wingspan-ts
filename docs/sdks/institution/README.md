# Institution

### Available Operations

* [get](#get) - Get Institution By Routing Number

## get

Get Institution By Routing Number

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetInstitutionRequest, GetInstitutionResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const routingNumber: string = "cumque";

sdk.institution.get(routingNumber).then((res: GetInstitutionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `routingNumber`                                              | *string*                                                     | :heavy_check_mark:                                           | Bank Routing Number                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInstitutionResponse](../../models/operations/getinstitutionresponse.md)>**

