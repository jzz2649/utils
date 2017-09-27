
import { isObject, isArray } from './type.js';
import { isEmpty } from './empty.js';

/**
 *@func filterValue 过滤值为空的对象
 *@param {object|array} [o] 对象或数组
 *@return {object|array}
 */

filterValue(o){
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
