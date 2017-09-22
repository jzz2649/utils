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

function strIsEmpty(str){
	return str.trim() === '';
}

function objIsEmpty(obj){
	for(var i in obj){
		return false;
	}
	return true;
}

function arrIsEmpty(arr){
	for(var i = 0; i < arr.lenth; i++){
		return false;
	}
	return true;
}

function isEmpty(o){
	if(o === undefined || o === null) return true;
	if(isString(o) && strIsEmpty(o)) return true;
	if(isObject(o) && objIsEmpty(o)) return true;
	if(isArray(o) && arrIsEmpty(o)) return true;
	if(isNaN(o)) return true;
	return false;
}
