# invoiceAsClient

### Available Operations

* [create](#create) - Create invoice as client

## create

Create invoice as client

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateInvoiceAsClientResponse } from "openapi/dist/sdk/models/operations";
import { CurrencyClientInvoiceCreateRequest } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.invoiceAsClient.create({
  clientCompany: "accusamus",
  clientEmail: "voluptatibus",
  clientEmailCC: [
    "distinctio",
  ],
  clientFirstName: "omnis",
  clientLastName: "delectus",
  creditFeeHandling: "praesentium",
  currency: CurrencyClientInvoiceCreateRequest.LessThanNilGreaterThan,
  dueDate: "magnam",
  lineItems: [
    {
      costPerUnit: 8363.64,
      description: "quos",
      detail: "commodi",
      discount: {
        amount: 4156.08,
        description: "totam",
        percentage: 9366.18,
      },
      integration: "nam",
      labels: {
        "voluptatem": "ipsam",
      },
      quantity: 4259.46,
      reimbursableExpense: "quasi",
      totalCost: 2476.85,
      unit: "maiores",
    },
  ],
  memberId: "enim",
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

