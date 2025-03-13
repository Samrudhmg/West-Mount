export interface ExtraFormFields {
    [key: string]: string | number | boolean;
}

export const routeFormConfig: Record<string, ExtraFormFields> = {
    "/": {},
};
