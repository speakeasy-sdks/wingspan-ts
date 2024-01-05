# BulkPayableBatches
(*bulkPayableBatches*)

### Available Operations

* [list](#list) - List bulk payable batches

## list

List bulk payable batches

### Example Usage

```typescript
import { Wingspan } from "wingspan";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.bulkPayableBatches.list();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListBulkPayableBatchesResponse](../../sdk/models/operations/listbulkpayablebatchesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
