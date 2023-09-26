# EligibilityRequirements

### Available Operations

* [list](#list) - List Eligibility Requirements

## list

List Eligibility Requirements

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListEligibilityRequirementsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.eligibilityRequirements.list().then((res: ListEligibilityRequirementsResponse) => {
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

**Promise<[operations.ListEligibilityRequirementsResponse](../../models/operations/listeligibilityrequirementsresponse.md)>**

