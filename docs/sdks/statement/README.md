# Statement

### Available Operations

* [download](#download) - Download bank statement pdf
* [get](#get) - Get bank statement

## download

Download bank statement pdf

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { DownloadStatementRequest, DownloadStatementResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "tempora";

sdk.statement.download(id).then((res: DownloadStatementResponse) => {
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

**Promise<[operations.DownloadStatementResponse](../../models/operations/downloadstatementresponse.md)>**


## get

Get bank statement

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetStatementRequest, GetStatementResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "tempora";

sdk.statement.get(id).then((res: GetStatementResponse) => {
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

**Promise<[operations.GetStatementResponse](../../models/operations/getstatementresponse.md)>**

