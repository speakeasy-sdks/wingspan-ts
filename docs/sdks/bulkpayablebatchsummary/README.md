# BulkPayableBatchSummary
(*bulkPayableBatchSummary*)

### Available Operations

* [get](#get) - Get Bulk Payable Batch Import Summary

## get

Get Bulk Payable Batch Import Summary

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetBulkPayableBatchSummaryRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkPayableBatchSummary.get(batchId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetBulkPayableBatchSummaryResponse](../../sdk/models/operations/getbulkpayablebatchsummaryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
