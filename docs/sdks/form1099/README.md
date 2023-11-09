# Form1099
(*form1099*)

### Available Operations

* [download](#download) - Downloads a form 1099 PDF for a collaborator

## download

Downloads a form 1099 PDF for a collaborator

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DownloadForm1099Request } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const id: string = "string";
const index: string = "string";
const year: string = "string";

  const res = await sdk.form1099.download(id, index, year);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `index`                                                      | *string*                                                     | :heavy_check_mark:                                           | Index                                                        |
| `year`                                                       | *string*                                                     | :heavy_check_mark:                                           | Year                                                         |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DownloadForm1099Response](../../sdk/models/operations/downloadform1099response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
