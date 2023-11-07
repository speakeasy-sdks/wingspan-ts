# BulkCalculation1099Batches
(*.bulkCalculation1099Batches*)

### Available Operations

* [list](#list) - List bulk calculation1099 batches

## list

List bulk calculation1099 batches

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.bulkCalculation1099Batches.list();


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListBulkCalculation1099BatchesResponse](../../models/operations/listbulkcalculation1099batchesresponse.md)>**

