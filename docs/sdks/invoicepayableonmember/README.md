# invoicePayableOnMember

### Available Operations

* [get](#get) - Get invoice on member by payableId

## get

Get invoice on member by payableId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetInvoicePayableOnMemberResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.invoicePayableOnMember.get({
  id: "9da757a5-9ecf-4ef6-aef1-caa3383c2beb",
}).then((res: GetInvoicePayableOnMemberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetInvoicePayableOnMemberRequest](../../models/operations/getinvoicepayableonmemberrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetInvoicePayableOnMemberResponse](../../models/operations/getinvoicepayableonmemberresponse.md)>**

