# payrollSettings

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
const id: string = "laborum";

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
const id: string = "sed";
const payrollSettingsUpdate: PayrollSettingsUpdate = {
  calculationSettings1099: "commodi",
  enablePlannedPayroll: false,
  enableProcessDaysBeforeDue: "voluptas",
  frequency: {
    daily: "suscipit",
    dayInInterval: 9602.57,
    endDate: "debitis",
    every: 724.34,
    interval: IntervalFrequencyUpdate.LessThanNilGreaterThan,
    startDate: "perferendis",
    twicePerMonth: false,
  },
  fundingSource: {
    fundingSourceCurrency: FundingSourceCurrency.Usd,
    fundingSourceId: "sed",
    fundingSourceType: TypeFundingSource.Account,
  },
  issue1099s: "necessitatibus",
  processDaysBeforeDue: 2155.29,
  scheduleDates: [
    "occaecati",
  ],
  status: StatusPayrollSettingsUpdate.Expired,
  workflow: WorkflowPayrollSettingsUpdate.LessThanNilGreaterThan,
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

