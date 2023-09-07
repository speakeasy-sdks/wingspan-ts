# payClientInvoice

### Available Operations

* [post](#post) - Pay client-invoice

## post

Pay client-invoice

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { PostPayClientInvoiceResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payClientInvoice.post({
  payRequest: {
    accountId: "nulla",
    paymentMethodId: "officia",
    plaidPublicToken: "sed",
  },
  invoiceId: "voluptatem",
}).then((res: PostPayClientInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PostPayClientInvoiceRequest](../../models/operations/postpayclientinvoicerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PostPayClientInvoiceResponse](../../models/operations/postpayclientinvoiceresponse.md)>**

