# BulkPayableBatchSummary
(*bulkPayableBatchSummary*)

### Available Operations

* [get](#get) - Get Bulk Payable Batch Import Summary

## get

Get Bulk Payable Batch Import Summary

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkPayableBatchSummaryRequest, GetBulkPayableBatchSummaryResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "female";

sdk.bulkPayableBatchSummary.get(batchId).then((res: GetBulkPayableBatchSummaryResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkPayableBatchSummaryResponse](../../models/operations/getbulkpayablebatchsummaryresponse.md)>**

