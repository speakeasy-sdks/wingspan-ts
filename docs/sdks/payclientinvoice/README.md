# PayClientInvoice

### Available Operations

* [post](#post) - Pay client-invoice

## post

Pay client-invoice

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { PostPayClientInvoiceRequest, PostPayClientInvoiceResponse } from "wingspan/dist/sdk/models/operations";
import { PayRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const invoiceId: string = "maiores";
const payRequest: PayRequest = {
  accountId: "natus",
  paymentMethodId: "velit",
  plaidPublicToken: "voluptatibus",
};

sdk.payClientInvoice.post(invoiceId, payRequest).then((res: PostPayClientInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of an invoice                              |
| `payRequest`                                                 | [shared.PayRequest](../../models/shared/payrequest.md)       | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostPayClientInvoiceResponse](../../models/operations/postpayclientinvoiceresponse.md)>**

