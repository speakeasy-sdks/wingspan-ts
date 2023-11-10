# BulkPayableBatchItems
(*bulkPayableBatchItems*)

### Available Operations

* [list](#list) - List bulk payable batch items

## list

List bulk payable batch items

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListBulkPayableBatchItemsRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkPayableBatchItems.list(batchId);

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

**Promise<[operations.ListBulkPayableBatchItemsResponse](../../sdk/models/operations/listbulkpayablebatchitemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
