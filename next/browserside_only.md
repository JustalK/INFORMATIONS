# Browser side only

## Type of error

```
Error: Minified React error #200;
```

## Solution

Desactivate ssr and load the module with the dynamics :

```
import dynamic from "next/dynamic";
const Form = dynamic(() => import("path/to/FormModule"), { ssr: false });
```
