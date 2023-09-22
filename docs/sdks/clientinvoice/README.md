# ClientInvoice

### Available Operations

* [get](#get) - Get client-invoice by invoiceId
* [update](#update) - Update client-invoice by invoiceId

## get

Get client-invoice by invoiceId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetClientInvoiceRequest, GetClientInvoiceResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "minus";

sdk.clientInvoice.get(id).then((res: GetClientInvoiceResponse) => {
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

**Promise<[operations.GetClientInvoiceResponse](../../models/operations/getclientinvoiceresponse.md)>**


## update

Update client-invoice by invoiceId

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdateClientInvoiceRequest, UpdateClientInvoiceResponse } from "wingspan/dist/sdk/models/operations";
import { ClientInvoiceUpdateRequest, FeeHandlingConfig, StatusClientInvoiceUpdateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "quam";
const clientInvoiceUpdateRequest: ClientInvoiceUpdateRequest = {
  creditFeeHandling: "vero",
  status: StatusClientInvoiceUpdateRequest.Overdue,
};

sdk.clientInvoice.update(id, clientInvoiceUpdateRequest).then((res: UpdateClientInvoiceResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | Unique identifier                                                                      |
| `clientInvoiceUpdateRequest`                                                           | [shared.ClientInvoiceUpdateRequest](../../models/shared/clientinvoiceupdaterequest.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateClientInvoiceResponse](../../models/operations/updateclientinvoiceresponse.md)>**

