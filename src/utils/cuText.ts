export const cutText = (string: string, maxLength = 30, ellipsis = true) => {
    let result = string;
    if (result && result.length > maxLength) {
        result = result.substring(0, maxLength);
        if (ellipsis) {
            result += '...';
        }
    }
    return result;
};
