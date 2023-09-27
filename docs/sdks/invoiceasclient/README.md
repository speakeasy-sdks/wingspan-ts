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
  clientCompany: "voluptatibus",
  clientEmail: "quisquam",
  clientEmailCC: [
    "vero",
  ],
  clientFirstName: "omnis",
  clientLastName: "quis",
  creditFeeHandling: "delectus",
  currency: CurrencyClientInvoiceCreateRequest.Cad,
  dueDate: "consectetur",
  lineItems: [
    {
      costPerUnit: 8788.7,
      description: "tenetur",
      detail: "dignissimos",
      discount: {
        amount: 7155.61,
        description: "quod",
        percentage: 4861.6,
      },
      integration: {
        quickbooks: {
          expenseAccountId: "vero",
          itemId: "ducimus",
        },
      },
      labels: "quibusdam",
      quantity: 8489.44,
      reimbursableExpense: "natus",
      totalCost: 7733.26,
      unit: "aut",
    },
  ],
  memberId: "voluptatibus",
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

