# UpdateBulkCollaboratorBatchItemResponse


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `bulkCollaboratorItem`                                                     | [shared.BulkCollaboratorItem](../../models/shared/bulkcollaboratoritem.md) | :heavy_minus_sign:                                                         | An item that will be converted into a collaborator                         |
| `contentType`                                                              | *string*                                                                   | :heavy_check_mark:                                                         | HTTP response content type for this operation                              |
| `statusCode`                                                               | *number*                                                                   | :heavy_check_mark:                                                         | HTTP response status code for this operation                               |
| `rawResponse`                                                              | [AxiosResponse](https://axios-http.com/docs/res_schema)                    | :heavy_minus_sign:                                                         | Raw HTTP response; suitable for custom response parsing                    |