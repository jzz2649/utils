import { isArray, isObject } from './type.js';

function clone(obj) {
    var o = obj;
    if(isObject(obj)){
        o = {};
        for(var k in obj){
            o[k] = clone(obj[k]);
        }
    } else if(isArray(obj)){
        o = [];
        for(var i=0;i<obj.length;i++){
            o.push(clone(obj[i]));
        }
    }
    return o;
}

function assign(a, b){
    var o = clone(a);
    if(isObject(o) && isObject(b)){
        for(var i in b){
            if(!o[i] || !o.hasOwnProperty(i)){
                o[i] = clone(b[i]);
            }else {
                o[i] = assign(o[i], b[i]);
            }
        }
    }else if(isArray(o) && isArray(b)){
        for(var i=0; i<b.length; i++){
            o[i] = assign(o[i], b[i]);
        }
    }else {
        return b;
    }
    return o;
}
