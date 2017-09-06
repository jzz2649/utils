function type(obj) {
    return Object.prototype.toString.call(obj);
}

function isArray(arr) {
    return type(arr) === '[object Array]';
}

function isObject(obj) {
    return type(obj) === '[object Object]';
}

function clone(obj) {
    var o = obj;
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
    }
    return o;
}
