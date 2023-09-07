# payrollSettings

### Available Operations

* [get](#get) - Get payroll settings
* [update](#update) - Update payroll settings

## get

Get payroll settings

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { GetPayrollSettingsResponse } from "openapi/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.payrollSettings.get({
  id: "43cf789f-fafe-4da5-be5a-e6e0ac184c2b",
}).then((res: GetPayrollSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetPayrollSettingsRequest](../../models/operations/getpayrollsettingsrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetPayrollSettingsResponse](../../models/operations/getpayrollsettingsresponse.md)>**


## update

Update payroll settings

### Example Usage

```typescript
import { Wingspan } from "openapi";
import { UpdatePayrollSettingsResponse } from "openapi/dist/sdk/models/operations";
import {
  CardProcessingFeesCalculationSettings1099,
  FundingSourceCurrency,
  IntervalFrequencyUpdate,
  OffPlatformPaymentsCalculationSettings1099,
  ReimbursableExpensesCalculationSettings1099,
  StatusPayrollSettingsUpdate,
  StatusScheduleDateUpdate,
  TypeFundingSource,
  WorkflowPayrollSettingsUpdate,
} from "openapi/dist/sdk/models/shared";

const sdk = new Wingspan();

sdk.payrollSettings.update({
  payrollSettingsUpdate: {
    calculationSettings1099: {
      cardProcessingFees: CardProcessingFeesCalculationSettings1099.LessThanNilGreaterThan,
      offPlatformPayments: OffPlatformPaymentsCalculationSettings1099.Include,
      reimbursableExpenses: ReimbursableExpensesCalculationSettings1099.Include,
      stateTaxId: "quod",
      thresholdAmount: 5524.4,
    },
    enablePlannedPayroll: false,
    enableProcessDaysBeforeDue: "molestiae",
    frequency: "laborum",
    fundingSource: "perferendis",
    issue1099s: false,
    processDaysBeforeDue: 1023.16,
    scheduleDates: [
      {
        date: "dolore",
        invoiceTemplateId: "sunt",
        status: StatusScheduleDateUpdate.LessThanNilGreaterThan,
      },
    ],
    status: StatusPayrollSettingsUpdate.Draft,
    workflow: WorkflowPayrollSettingsUpdate.SingleStage,
  },
  id: "e5505575-6f5d-456d-8bd0-af2dfe13db4f",
}).then((res: UpdatePayrollSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdatePayrollSettingsRequest](../../models/operations/updatepayrollsettingsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdatePayrollSettingsResponse](../../models/operations/updatepayrollsettingsresponse.md)>**

