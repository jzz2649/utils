function padEnd(str, len, padString) {
    len = len >> 0;
    padString = padString !== undefined ? padString : '';
    if (len <= str.length || !padString.length) {
        return str;
    }
    while (str.length < len) {
        str += padString;
    }
    return str.slice(0, len);
}

function padStart(str, len, padString) {
    len = len >> 0;
    padString = padString !== undefined ? padString : '';
    if (len <= str.length || !padString.length) {
        return str;
    }
    while (str.length < len) {
        str = padString + str;
    }
    return str.slice(str.length - len);
}
