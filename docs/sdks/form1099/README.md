# form1099

### Available Operations

* [download](#download) - Downloads a form 1099 PDF for a collaborator

## download

Downloads a form 1099 PDF for a collaborator

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DownloadForm1099Response } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.form1099.download({
  id: "ce7e253b-6684-451c-ac6e-205e16deab3f",
  index: "repudiandae",
  year: "optio",
}).then((res: DownloadForm1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.DownloadForm1099Request](../../models/operations/downloadform1099request.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.DownloadForm1099Response](../../models/operations/downloadform1099response.md)>**

