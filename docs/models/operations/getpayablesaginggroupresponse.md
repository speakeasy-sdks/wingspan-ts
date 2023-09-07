# GetPayablesAgingGroupResponse


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `contentType`                                                                            | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `payableAgingReportResponses`                                                            | [shared.PayableAgingReportResponse](../../models/shared/payableagingreportresponse.md)[] | :heavy_minus_sign:                                                                       | Payables list grouped by age                                                             |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rawResponse`                                                                            | [AxiosResponse>](https://axios-http.com/docs/res_schema)                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |