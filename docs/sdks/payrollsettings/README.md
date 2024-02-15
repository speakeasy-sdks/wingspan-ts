# PayrollSettings
(*payrollSettings*)

### Available Operations

* [get](#get) - Get payroll settings
* [update](#update) - Update payroll settings

## get

Get payroll settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { GetPayrollSettingsRequest } from "wingspan/dist/sdk/models/operations";

async function run() {
  const sdk = new Wingspan();
const id: string = "<value>";

  const res = await sdk.payrollSettings.get(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | Unique identifier                                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetPayrollSettingsResponse](../../sdk/models/operations/getpayrollsettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

Update payroll settings

### Example Usage

```typescript
import { Wingspan } from "wingspan";
import { UpdatePayrollSettingsRequest } from "wingspan/dist/sdk/models/operations";
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

async function run() {
  const sdk = new Wingspan();
const id: string = "<value>";
const payrollSettingsUpdate: PayrollSettingsUpdate = {
  calculationSettings1099: {
    stateTaxId: {
      "key": "<value>",
    },
  },
  frequency: {},
  fundingSource: {
    fundingSourceCurrency: FundingSourceCurrency.Cad,
    fundingSourceId: "<value>",
    fundingSourceType: TypeFundingSource.InternalAccount,
  },
  scheduleDates: [
    {},
  ],
};

  const res = await sdk.payrollSettings.update(id, payrollSettingsUpdate);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | Unique identifier                                                                |
| `payrollSettingsUpdate`                                                          | [shared.PayrollSettingsUpdate](../../sdk/models/shared/payrollsettingsupdate.md) | :heavy_minus_sign:                                                               | N/A                                                                              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdatePayrollSettingsResponse](../../sdk/models/operations/updatepayrollsettingsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
