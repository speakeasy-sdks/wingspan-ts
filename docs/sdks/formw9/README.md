# FormW9

### Available Operations

* [download](#download) - Downloads a form W9 PDF for a collaborator

## download

Downloads a form W9 PDF for a collaborator

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DownloadFormW9Request, DownloadFormW9Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "hic";

sdk.formW9.download(id).then((res: DownloadFormW9Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DownloadFormW9Response](../../models/operations/downloadformw9response.md)>**

