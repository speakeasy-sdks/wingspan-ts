# statement

### Available Operations

* [download](#download) - Download bank statement pdf
* [get](#get) - Get bank statement

## download

Download bank statement pdf

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { DownloadStatementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.statement.download({
  id: "62cba3f8-941a-4ebc-8b80-a6924d3b2ecf",
}).then((res: DownloadStatementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.DownloadStatementRequest](../../models/operations/downloadstatementrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.DownloadStatementResponse](../../models/operations/downloadstatementresponse.md)>**


## get

Get bank statement

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetStatementResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.statement.get({
  id: "cc8f8950-10f5-4dd3-96fa-1804e54c82f1",
}).then((res: GetStatementResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetStatementRequest](../../models/operations/getstatementrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetStatementResponse](../../models/operations/getstatementresponse.md)>**

