# ClientInvoiceFees
(*.clientInvoiceFees*)

### Available Operations

* [create](#create) - Create client-invoice fees
* [list](#list) - List client-invoice fees

## create

Create client-invoice fees

### Example Usage

```typescript
import { Wingspan } from "wingspan";

(async() => {
  const sdk = new Wingspan();

  const res = await sdk.clientInvoiceFees.create({
    contactName: "string",
    email: "Jena.Nienow28@yahoo.com",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { ListClientInvoiceFeesRequest } from "wingspan/dist/sdk/models/operations";

(async() => {
  const sdk = new Wingspan();
const invoiceId: string = "string";

  const res = await sdk.clientInvoiceFees.list(invoiceId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `invoiceId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Unique identifier of an invoice                              |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListClientInvoiceFeesResponse](../../models/operations/listclientinvoicefeesresponse.md)>**

