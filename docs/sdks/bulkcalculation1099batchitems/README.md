# BulkCalculation1099BatchItems
(*bulkCalculation1099BatchItems*)

### Available Operations

* [list](#list) - List bulk calculation1099 batch items

## list

List bulk calculation1099 batch items

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import {
  ListBulkCalculation1099BatchItemsRequest,
  ListBulkCalculation1099BatchItemsResponse,
} from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const batchId: string = "natus";

sdk.bulkCalculation1099BatchItems.list(batchId).then((res: ListBulkCalculation1099BatchItemsResponse) => {
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

**Promise<[operations.ListBulkCalculation1099BatchItemsResponse](../../models/operations/listbulkcalculation1099batchitemsresponse.md)>**

