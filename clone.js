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

function isFun(fun) {
    return type(fun) === '[object Function]';
}

function isObject(obj) {
    return type(obj) === '[object Object]';
}

function clone(obj) {
    var o;
    if(isArray(obj)){
        o = [];
        for(var i=0;i<obj.length;i++){
            o.push(clone(obj[i]));
        }
    } else if(isObject(obj)){
        o = {};
        for(var k in obj){
            o[k] = clone(obj[k]);
        }
    } else {
        o = obj;
    }
    return o;
}
