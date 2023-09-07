# formW9

### Available Operations

* [download](#download) - Downloads a form W9 PDF for a collaborator

## download

Downloads a form W9 PDF for a collaborator

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DownloadFormW9Response } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.formW9.download({
  id: "9578a645-8427-43a8-818d-162309fb0929",
}).then((res: DownloadFormW9Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.DownloadFormW9Request](../../models/operations/downloadformw9request.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.DownloadFormW9Response](../../models/operations/downloadformw9response.md)>**

