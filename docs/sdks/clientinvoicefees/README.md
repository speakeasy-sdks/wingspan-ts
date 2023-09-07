# clientInvoiceFees

### Available Operations

* [create](#create) - Create client-invoice fees
* [list](#list) - List client-invoice fees

## create

Create client-invoice fees

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateClientInvoiceFeesResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoiceFees.create({
  contactName: "quo",
  email: "Destini.Daugherty@hotmail.com",
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
import { Wingspan } from "openapi";
import { ListClientInvoiceFeesResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.clientInvoiceFees.list({
  invoiceId: "cupiditate",
}).then((res: ListClientInvoiceFeesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.ListClientInvoiceFeesRequest](../../models/operations/listclientinvoicefeesrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.ListClientInvoiceFeesResponse](../../models/operations/listclientinvoicefeesresponse.md)>**

