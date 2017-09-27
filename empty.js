import { isString, isObject, isArray, isNaN } from './type.js';

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
    for(var i = 0; i < arr.length; i++){
        return false;
    }
    return true;
}

function isEmpty(o){
    switch(true){
        case o === undefined || o === null:
        case isString(o) && strIsEmpty(o):
        case isObject(o) && objIsEmpty(o):
        case isArray(o) && arrIsEmpty(o):
        case isNaN(o): return true;
        default: return false;
    }
}

export { isEmpty };