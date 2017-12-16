
import { isObject, isArray } from './type.js';
import { isEmpty } from './empty.js';

/**
 *@func filterValue 过滤值为空的对象
 *@param {object|array} [o] 对象或数组
 *@return {object|array}
 */

function filterValue(o){
    var v, d = o;
    if(isObject(o)){
        d = {};
        for(var i in o){
            if(!isEmpty(v=filterValue(o[i]))){
                d[i] = v;
            }
        }
    }else if(isArray(o)){
        d = [];
        for(var i = 0; i < o.length; i++){
            if(!isEmpty(v=filterValue(o[i]))){
                d.push(v);
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
    return arr.reduce(function(result, props){
      return result ? result[props] : undefined;
    }, obj);
  }
}
