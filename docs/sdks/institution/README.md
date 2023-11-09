# Institution
(*institution*)

### Available Operations

* [get](#get) - Get Institution By Routing Number

## get

Get Institution By Routing Number

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetInstitutionRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const routingNumber: string = "string";

  const res = await sdk.institution.get(routingNumber);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `routingNumber`                                              | *string*                                                     | :heavy_check_mark:                                           | Bank Routing Number                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetInstitutionResponse](../../sdk/models/operations/getinstitutionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
