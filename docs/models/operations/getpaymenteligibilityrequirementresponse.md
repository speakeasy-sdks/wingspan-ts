# GetPaymentEligibilityRequirementResponse


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `contentType`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `paymentEligibility`                                                   | [shared.PaymentEligibility](../../models/shared/paymenteligibility.md) | :heavy_minus_sign:                                                     | See payment eligibility requirements on member                         |
| `statusCode`                                                           | *number*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `rawResponse`                                                          | [AxiosResponse](https://axios-http.com/docs/res_schema)                | :heavy_minus_sign:                                                     | N/A                                                                    |