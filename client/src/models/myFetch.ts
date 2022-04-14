const API_URL = "http://localhost:3004/api/";

export const api = (url: string, method: string, body?: any) => {
    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (body) options.body = JSON.stringify(body);

    return fetch(API_URL + url, options).then((res) => res.json());
};
