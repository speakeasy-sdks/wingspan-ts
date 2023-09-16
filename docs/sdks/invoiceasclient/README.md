# InvoiceAsClient

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
  clientCompany: "et",
  clientEmail: "saepe",
  clientEmailCC: [
    "ipsum",
  ],
  clientFirstName: "veritatis",
  clientLastName: "nobis",
  creditFeeHandling: {
    clientAbsolutePercentage: 7316.94,
    clientPays: 5844.76,
    memberPays: 456.14,
  },
  currency: CurrencyClientInvoiceCreateRequest.LessThanNilGreaterThan,
  dueDate: "dolorem",
  lineItems: [
    {
      costPerUnit: 2921.47,
      description: "labore",
      detail: "adipisci",
      discount: {
        amount: 1002.94,
        description: "quae",
        percentage: 164.29,
      },
      integration: {
        quickbooks: {
          expenseAccountId: "consequatur",
          itemId: "est",
        },
      },
      labels: {
        "porro": "doloribus",
      },
      quantity: 2817.3,
      reimbursableExpense: false,
      totalCost: 5864.1,
      unit: "qui",
    },
  ],
  memberId: "quae",
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

