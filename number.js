import { paramToArray } from './convert.js';
import { isEmpty } from './empty.js';
import { isString, isObject, isArray, isFun, isNumber } from './type.js';

function add(){
    var numbers = paramToArray(arguments);
    var s = 0;
    for(var i = 0; i < numbers.length; i++){
        s += numbers[i];
    }
    return s;
}

function AnyToNumber(any) {
    switch(true){
        case isEmpty(any):
        case isFun(any):
        case isArray(any):
        case isObject(any):
            return 0;
        break;
        case isString(any):
            return parseFloat(any);
        break;
        case isNumber(any):
            return any;
        break;
    }
}
