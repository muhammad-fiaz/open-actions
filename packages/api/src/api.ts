type RequestOptions = {
    headers?: { [key: string]: string };
    params?: { [key: string]: string | number };
    body?: any;
};

export class Api {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    private buildUrl(endpoint: string, params?: { [key: string]: string | number }): string {
        const url = new URL(`${this.baseURL}${endpoint}`);
        if (params) {
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key].toString()));
        }
        return url.toString();
    }

    private async request(endpoint: string, method: string, options?: RequestOptions): Promise<any> {
        const url = this.buildUrl(endpoint, options?.params);
        const headers = {
            'Content-Type': 'application/json',
            ...options?.headers,
        };

        const response = await fetch(url, {
            method,
            headers,
            body: options?.body ? JSON.stringify(options.body) : null,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
    }

    public get(endpoint: string, options?: RequestOptions): Promise<any> {
        return this.request(endpoint, 'GET', options);
    }

    public post(endpoint: string, options?: RequestOptions): Promise<any> {
        return this.request(endpoint, 'POST', options);
    }

    public put(endpoint: string, options?: RequestOptions): Promise<any> {
        return this.request(endpoint, 'PUT', options);
    }

    public delete(endpoint: string, options?: RequestOptions): Promise<any> {
        return this.request(endpoint, 'DELETE', options);
    }

    public createInstance(baseURL: string, defaultHeaders?: { [key: string]: string }): Api {
        return new Api(baseURL);
    }
}