# ClientInvoiceFees

### Available Operations

* [create](#create) - Create client-invoice fees
* [list](#list) - List client-invoice fees

## create

Create client-invoice fees

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateClientInvoiceFeesResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoiceFees.create({
  contactName: "hic",
  email: "Leo.Purdy@hotmail.com",
}).then((res: CreateClientInvoiceFeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.TestInvoiceCreate](../../models/shared/testinvoicecreate.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateClientInvoiceFeesResponse](../../models/operations/createclientinvoicefeesresponse.md)>**


## list

List client-invoice fees

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { ListClientInvoiceFeesRequest, ListClientInvoiceFeesResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const invoiceId: string = "porro";

sdk.clientInvoiceFees.list(invoiceId).then((res: ListClientInvoiceFeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of an invoice                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListClientInvoiceFeesResponse](../../models/operations/listclientinvoicefeesresponse.md)>**

