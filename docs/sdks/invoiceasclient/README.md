# InvoiceAsClient
(*invoiceAsClient*)

### Available Operations

* [create](#create) - Create invoice as client

## create

Create invoice as client

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CreateInvoiceAsClientResponse } from "wingspan/dist/sdk/models/operations";
import { CurrencyClientInvoiceCreateRequest } from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.invoiceAsClient.create({
  clientCompany: "bluetooth Extended",
  clientEmail: "blue",
  clientEmailCC: [
    "shred",
  ],
  clientFirstName: "technology East",
  clientLastName: "evolve",
  creditFeeHandling: {
    clientAbsolutePercentage: 7926.2,
    clientPays: 8559.52,
    memberPays: 8165.88,
  },
  currency: CurrencyClientInvoiceCreateRequest.Cad,
  dueDate: "Polestar mobile",
  lineItems: [
    {
      costPerUnit: 6562.56,
      description: "Grass-roots 3rd generation data-warehouse",
      detail: "South Intelligent Fish",
      discount: "Fiat",
      integration: {
        quickbooks: "Account",
      },
      labels: "Profound",
      quantity: 1325.85,
      reimbursableExpense: "animated",
      totalCost: 8424.64,
      unit: "lumen",
    },
  ],
  memberId: "Senior Mouse West",
}).then((res: CreateInvoiceAsClientResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [shared.ClientInvoiceCreateRequest](../../models/shared/clientinvoicecreaterequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateInvoiceAsClientResponse](../../models/operations/createinvoiceasclientresponse.md)>**

