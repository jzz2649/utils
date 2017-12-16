function type(obj) {
    return Object.prototype.toString.call(obj);
}

function isArray(arr) {
    return type(arr) === '[object Array]';
}

function isNumber(num) {
    return type(num) === '[object Number]';
}

function isNaN(nan) {
    if(isNumber(nan)){
        if(!parseInt(nan)&&parseInt(nan)!==0){
            return true;
        }
    }
    return false;
}

function isString(str) {
    return type(str) === '[object String]';
}

function isFun(fun) {
    return type(fun) === '[object Function]';
}

function isObject(obj) {
    return type(obj) === '[object Object]';
}

function isBoolean(boolean) {
    return type(boolean) === '[object Boolean]';
}

export { isArray, isNumber, isNaN, isString, isFun, isObject, isBoolean };
