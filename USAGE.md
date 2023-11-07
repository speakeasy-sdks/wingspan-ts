<!-- Start SDK Example Usage -->


```typescript
import { Wingspan } from "wingspan";

(async () => {
    const sdk = new Wingspan();

    const res = await sdk.serviceStatus.get();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->