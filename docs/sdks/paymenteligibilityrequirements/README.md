# paymentEligibilityRequirements

### Available Operations

* [list](#list) - List Payment Eligigbility Requirements

## list

List Payment Eligigbility Requirements

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListPaymentEligibilityRequirementsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.paymentEligibilityRequirements.list().then((res: ListPaymentEligibilityRequirementsResponse) => {
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

**Promise<[operations.ListPaymentEligibilityRequirementsResponse](../../models/operations/listpaymenteligibilityrequirementsresponse.md)>**

