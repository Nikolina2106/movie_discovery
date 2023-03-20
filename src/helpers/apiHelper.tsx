import {API_KEY, BASE_URL} from '../config';

export const getRequest = async (
    endpoint: string,
    query?: string
): Promise<{data: string; success: boolean} | {data: any; success: boolean}> => {
    let url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
    if (query && query.length > 0) url += query;
    try {
        const response = await fetch(url, {
            method: 'GET',
        });
        const responseText = await response.text();

        try {
            const responseJson = JSON.parse(responseText);
            return {success: true, data: responseJson};
        } catch (e) {
            return {success: false, data: responseText};
        }
    } catch (error) {
        return {success: false, data: error};
    }
};
