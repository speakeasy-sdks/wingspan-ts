# bulkInvoiceBatchItem

### Available Operations

* [create](#create) - Create a bulk invoice batch item
* [get](#get) - Get a bulk invoice batch item
* [update](#update) - Update a bulk invoice batch item

## create

Create a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { CreateBulkInvoiceBatchItemResponse } from "openapi/dist/sdk/models/operations";
import { BulkInvoiceItemCreateAcceptedPaymentMethods, InvoiceStatusBulkInvoiceItemCreate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkInvoiceBatchItem.create({
  bulkInvoiceItemCreate: {
    acceptedPaymentMethods: [
      BulkInvoiceItemCreateAcceptedPaymentMethods.Manual,
    ],
    amount: 5518.16,
    bulkInvoiceBatchId: "sint",
    bulkInvoiceItemMergeKey: "accusantium",
    bulkInvoiceItemReference: "mollitia",
    clientEmail: "reiciendis",
    clientExternalId: "mollitia",
    creditFeeHandling: "eum",
    dueDate: "dolor",
    invoiceNotes: "necessitatibus",
    invoiceStatus: InvoiceStatusBulkInvoiceItemCreate.Draft,
    labels: "quasi",
    lineItemDescription: "iure",
    lineItemDetail: "doloribus",
    memberClientId: "debitis",
    paidDate: "eius",
    projectName: "maxime",
    reimbursableExpense: false,
    sendDate: "facilis",
  },
  batchId: "in",
}).then((res: CreateBulkInvoiceBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateBulkInvoiceBatchItemRequest](../../models/operations/createbulkinvoicebatchitemrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateBulkInvoiceBatchItemResponse](../../models/operations/createbulkinvoicebatchitemresponse.md)>**


## get

Get a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetBulkInvoiceBatchItemResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.bulkInvoiceBatchItem.get({
  batchId: "architecto",
  batchItemId: "architecto",
}).then((res: GetBulkInvoiceBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetBulkInvoiceBatchItemRequest](../../models/operations/getbulkinvoicebatchitemrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetBulkInvoiceBatchItemResponse](../../models/operations/getbulkinvoicebatchitemresponse.md)>**


## update

Update a bulk invoice batch item

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdateBulkInvoiceBatchItemResponse } from "openapi/dist/sdk/models/operations";
import { BulkInvoiceItemUpdateAcceptedPaymentMethods, InvoiceStatusBulkInvoiceItemUpdate } from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.bulkInvoiceBatchItem.update({
  bulkInvoiceItemUpdate: {
    acceptedPaymentMethods: [
      BulkInvoiceItemUpdateAcceptedPaymentMethods.LessThanNilGreaterThan,
    ],
    amount: 3523.12,
    bulkInvoiceBatchId: "expedita",
    bulkInvoiceItemMergeKey: "nihil",
    bulkInvoiceItemReference: "repellat",
    clientEmail: "quibusdam",
    clientExternalId: "sed",
    creditFeeHandling: {
      clientAbsolutePercentage: 8681.26,
      clientPays: 375.59,
      memberPays: 1624.93,
    },
    dueDate: "praesentium",
    invoiceNotes: "natus",
    invoiceStatus: InvoiceStatusBulkInvoiceItemUpdate.Open,
    labels: "quo",
    lineItemDescription: "illum",
    lineItemDetail: "pariatur",
    memberClientId: "maxime",
    paidDate: "ea",
    projectName: "excepturi",
    reimbursableExpense: "ea",
    sendDate: "accusantium",
  },
  batchId: "ab",
  batchItemId: "maiores",
}).then((res: UpdateBulkInvoiceBatchItemResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateBulkInvoiceBatchItemRequest](../../models/operations/updatebulkinvoicebatchitemrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateBulkInvoiceBatchItemResponse](../../models/operations/updatebulkinvoicebatchitemresponse.md)>**

