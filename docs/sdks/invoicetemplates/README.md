# InvoiceTemplates

### Available Operations

* [list](#list) - List invoiceTemplates

## list

List invoiceTemplates

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListInvoiceTemplatesResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.invoiceTemplates.list().then((res: ListInvoiceTemplatesResponse) => {
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

**Promise<[operations.ListInvoiceTemplatesResponse](../../models/operations/listinvoicetemplatesresponse.md)>**

