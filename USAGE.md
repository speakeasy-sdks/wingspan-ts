<!-- Start SDK Example Usage -->


```typescript
import { Wingspan } from "wingspan";
import { Calculate1099Response } from "wingspan/dist/sdk/models/operations";

const sdk = new Wingspan();

sdk.oneThousandAndNinetyNine.calculate({
  memberClientId: "green Practical",
  year: 7783.47,
}).then((res: Calculate1099Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->