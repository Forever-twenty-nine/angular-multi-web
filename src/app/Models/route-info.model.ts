
export interface RouteInfo {
    path: {
        en: string;
        es: string;
    };
    labels: {
        en: string;
        es: string;
    };
    routePrefix: {
        en: string;
        es: string;
    };
    title: {
        en: string;
        es: string;
    };
    Children?: RouteInfo[];
}
