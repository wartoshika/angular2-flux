import { HTTP_PROVIDERS } from "@angular/http";

export * from "./app.component";
export * from "./list";

export const APP_PROVIDERS = [
    ...HTTP_PROVIDERS
];