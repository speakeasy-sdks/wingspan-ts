# BulkCalculation1099BatchItems
(*bulkCalculation1099BatchItems*)

### Available Operations

* [list](#list) - List bulk calculation1099 batch items

## list

List bulk calculation1099 batch items

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListBulkCalculation1099BatchItemsRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const batchId: string = "string";

  const res = await sdk.bulkCalculation1099BatchItems.list(batchId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `batchId`                                                    | *string*                                                     | :heavy_check_mark:                                           | Unique identifier for a batch                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListBulkCalculation1099BatchItemsResponse](../../sdk/models/operations/listbulkcalculation1099batchitemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
