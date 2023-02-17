
type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'


export const returnCorrectRequest = (
    method: Method,
    body: unknown
): RequestInit => {
    if(method === 'GET'){
        return {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
    return {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
    }
}

export async function sendApiRequest<T>(url: string, method: Method, body: unknown = {}): Promise<T>{
    const response = await fetch(url, returnCorrectRequest(method, body))
    if(!response.ok){
        const message = `An error has occurred ${response.status}`
        throw new Error(message)
    }
    return await response.json() as Promise<T>;
}