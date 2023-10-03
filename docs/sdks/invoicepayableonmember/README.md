# InvoicePayableOnMember
(*invoicePayableOnMember*)

### Available Operations

* [get](#get) - Get invoice on member by payableId

## get

Get invoice on member by payableId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetInvoicePayableOnMemberRequest, GetInvoicePayableOnMemberResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "female";

sdk.invoicePayableOnMember.get(id).then((res: GetInvoicePayableOnMemberResponse) => {
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

**Promise<[operations.GetInvoicePayableOnMemberResponse](../../models/operations/getinvoicepayableonmemberresponse.md)>**

