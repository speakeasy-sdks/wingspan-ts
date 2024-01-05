# InvoiceAsClient
(*invoiceAsClient*)

### Available Operations

* [create](#create) - Create invoice as client

## create

Create invoice as client

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { CurrencyClientInvoiceCreateRequest } from "wingspan/dist/sdk/models/shared";

async function run() {
  const sdk = new Wingspan();

  const res = await sdk.invoiceAsClient.create({
    clientEmail: "string",
    clientEmailCC: [
      "string",
    ],
    creditFeeHandling: {},
    dueDate: "string",
    lineItems: [
      {
        discount: {},
        integration: {
          quickbooks: {},
        },
        labels: {
          "key": "string",
        },
      },
    ],
    memberId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.ClientInvoiceCreateRequest](../../sdk/models/shared/clientinvoicecreaterequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateInvoiceAsClientResponse](../../sdk/models/operations/createinvoiceasclientresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
