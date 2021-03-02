export const getApiUrl = (endpoint: string) => {
    const baseApiUrl = localStorage.getItem('apiUrl');
    return `${baseApiUrl}/api/web/${endpoint}`;
};
