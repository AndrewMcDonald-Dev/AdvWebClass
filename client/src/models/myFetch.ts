/* B"H
 */

const API_URL = "http://localhost:3004/api/";

export const api = (
    url: string,
    body?: any,
    method?: string,
    headers?: HeadersInit
) => {
    let options: RequestInit = {
        method: method || "GET",
        headers,
    };

    if (body) {
        options = {
            method: method || "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...options.headers,
            },
            cache: "no-cache",
            body: JSON.stringify(body),
        };
    }

    return fetch(API_URL + url, options).then((response) => response.json());
};
