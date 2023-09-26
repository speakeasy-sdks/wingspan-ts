# BulkPayableBatches

### Available Operations

* [list](#list) - List bulk payable batches

## list

List bulk payable batches

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListBulkPayableBatchesResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkPayableBatches.list().then((res: ListBulkPayableBatchesResponse) => {
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

**Promise<[operations.ListBulkPayableBatchesResponse](../../models/operations/listbulkpayablebatchesresponse.md)>**

