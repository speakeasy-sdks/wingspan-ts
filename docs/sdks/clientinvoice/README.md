# clientInvoice

### Available Operations

* [get](#get) - Get client-invoice by invoiceId
* [update](#update) - Update client-invoice by invoiceId

## get

Get client-invoice by invoiceId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetClientInvoiceResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoice.get({
  id: "556146c3-e250-4fb0-88c4-2e141aac366c",
}).then((res: GetClientInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetClientInvoiceRequest](../../models/operations/getclientinvoicerequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetClientInvoiceResponse](../../models/operations/getclientinvoiceresponse.md)>**


## update

Update client-invoice by invoiceId

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateClientInvoiceResponse } from "openapi/dist/sdk/models/operations";
import { StatusClientInvoiceUpdateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.clientInvoice.update({
  clientInvoiceUpdateRequest: {
    creditFeeHandling: {
      clientAbsolutePercentage: 8296.03,
      clientPays: 8605.52,
      memberPays: 3790.34,
    },
    status: StatusClientInvoiceUpdateRequest.PaymentInTransit,
  },
  id: "14429074-7477-48a7-bd46-6d28c10ab3cd",
}).then((res: UpdateClientInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateClientInvoiceRequest](../../models/operations/updateclientinvoicerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateClientInvoiceResponse](../../models/operations/updateclientinvoiceresponse.md)>**

