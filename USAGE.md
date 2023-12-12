<!-- Start SDK Example Usage [usage] -->
```typescript
import { Wingspan } from "wingspan";

async function run() {
    const sdk = new Wingspan();

    const res = await sdk.serviceStatus.get();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->