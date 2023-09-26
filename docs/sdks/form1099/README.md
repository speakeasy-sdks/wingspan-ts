# Form1099

### Available Operations

* [download](#download) - Downloads a form 1099 PDF for a collaborator

## download

Downloads a form 1099 PDF for a collaborator

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DownloadForm1099Request, DownloadForm1099Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "ut";
const index: string = "facilis";
const year: string = "cupiditate";

sdk.form1099.download(id, index, year).then((res: DownloadForm1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `index`                                                      | *string*                                                     | :heavy_check_mark:                                           | Index                                                        |
| `year`                                                       | *string*                                                     | :heavy_check_mark:                                           | Year                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DownloadForm1099Response](../../models/operations/downloadform1099response.md)>**

