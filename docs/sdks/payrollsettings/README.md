# PayrollSettings

### Available Operations

* [get](#get) - Get payroll settings
* [update](#update) - Update payroll settings

## get

Get payroll settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPayrollSettingsRequest, GetPayrollSettingsResponse } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();
const id: string = "dolore";

sdk.payrollSettings.get(id).then((res: GetPayrollSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPayrollSettingsResponse](../../models/operations/getpayrollsettingsresponse.md)>**


## update

Update payroll settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdatePayrollSettingsRequest, UpdatePayrollSettingsResponse } from "wingspan/dist/sdk/models/operations";
import {
  CalculationSettings1099,
  CardProcessingFeesCalculationSettings1099,
  FrequencyUpdate,
  FundingSource,
  FundingSourceCurrency,
  IntervalFrequencyUpdate,
  OffPlatformPaymentsCalculationSettings1099,
  PayrollSettingsUpdate,
  ReimbursableExpensesCalculationSettings1099,
  ScheduleDateUpdate,
  StatusPayrollSettingsUpdate,
  StatusScheduleDateUpdate,
  TypeFundingSource,
  WorkflowPayrollSettingsUpdate,
} from "wingspan/dist/sdk/models/shared";

const sdk = new Wingspan();
const id: string = "aliquam";
const payrollSettingsUpdate: PayrollSettingsUpdate = {
  calculationSettings1099: {
    cardProcessingFees: CardProcessingFeesCalculationSettings1099.LessThanNilGreaterThan,
    offPlatformPayments: OffPlatformPaymentsCalculationSettings1099.Exclude,
    reimbursableExpenses: ReimbursableExpensesCalculationSettings1099.Include,
    stateTaxId: {
      "blanditiis": "quas",
    },
    thresholdAmount: 9425.84,
  },
  enablePlannedPayroll: "culpa",
  enableProcessDaysBeforeDue: false,
  frequency: {
    daily: false,
    dayInInterval: 9402.1,
    endDate: "exercitationem",
    every: 7507.65,
    interval: IntervalFrequencyUpdate.Week,
    startDate: "rerum",
    twicePerMonth: "reiciendis",
  },
  fundingSource: "asperiores",
  issue1099s: false,
  processDaysBeforeDue: 4518.22,
  scheduleDates: [
    {
      date: "ab",
      invoiceTemplateId: "iste",
      status: StatusScheduleDateUpdate.Completed,
    },
  ],
  status: StatusPayrollSettingsUpdate.Cancelled,
  workflow: WorkflowPayrollSettingsUpdate.SingleStage,
};

sdk.payrollSettings.update(id, payrollSettingsUpdate).then((res: UpdatePayrollSettingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | Unique identifier                                                            |
| `payrollSettingsUpdate`                                                      | [shared.PayrollSettingsUpdate](../../models/shared/payrollsettingsupdate.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.UpdatePayrollSettingsResponse](../../models/operations/updatepayrollsettingsresponse.md)>**

