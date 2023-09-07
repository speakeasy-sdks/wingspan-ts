# clientInvoiceTemplates

### Available Operations

* [list](#list) - List client-invoice-templates

## list

List client-invoice-templates

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListClientInvoiceTemplatesResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoiceTemplates.list().then((res: ListClientInvoiceTemplatesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListClientInvoiceTemplatesResponse](../../models/operations/listclientinvoicetemplatesresponse.md)>**

