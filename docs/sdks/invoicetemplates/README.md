# InvoiceTemplates
(*.invoiceTemplates*)

### Available Operations

* [list](#list) - List invoiceTemplates

## list

List invoiceTemplates

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.invoiceTemplates.list();


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

**Promise<[operations.ListInvoiceTemplatesResponse](../../models/operations/listinvoicetemplatesresponse.md)>**

