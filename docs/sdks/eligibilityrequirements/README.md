# EligibilityRequirements
(*eligibilityRequirements*)

### Available Operations

* [list](#list) - List Eligibility Requirements

## list

List Eligibility Requirements

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.eligibilityRequirements.list();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListEligibilityRequirementsResponse](../../models/operations/listeligibilityrequirementsresponse.md)>**

