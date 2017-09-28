
import { isObject, isArray } from './type.js';
import { isEmpty } from './empty.js';

/**
 *@func filterValue 过滤值为空的对象
 *@param {object|array} [o] 对象或数组
 *@return {object|array}
 */

function filterValue(o){
    var d;
    if(isObject(o)){
        d = {};
        for(var i in o){
            if(!isEmpty(o[i])){
                d[i] = o[i];
            }
        }
    }else if(isArray(o)){
        d = [];
        for(var i = 0; i < o.length; i++){
            if(!isEmpty(o[i])){
                d.push(o[i]);
            }
        }
    }
    return d;
}

/**
 *@func getValue 获取对象的值
 *@param {object} [obj] 对象
 *@return {function} [...args] 属性
 */

function getValue(obj) {
    return function(){
        var arr = Array.prototype.slice.call(arguments);
        return arr.length > 1 ? arr.reduce(function(result, props, index){
            index === 1 && (result = obj[result]);
            result = result ? result[props] : undefined;
            return result;
        }) : obj[arr[0]];
    }
}
