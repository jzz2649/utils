/**
 *@func fill 填充
 *@param {string} [s] 填充字符串
 *@param {string} [v] 被填充字符串
 *@param {int} [l] 填充到此长度
 *@param {string} [d] 填充的方向
 *@return {string}
 */

function fill(s, v, l, d){
    var _l = l - v.length,
        _l = _l > 0 ? _l : 0;
        v = d === 'left' ? s.repeat(_l) + v.slice(0, l)
                         : v.slice(0, l) + s.repeat(_l);
    return v;
}

/**
 *@func strjson 连接字符串
 *@param {array} [arr] 字符串数组
 *@return {string}
 */

function strjoin(arr){
    return arr.join('');
}

/**
 *@func isempty 是否为空
 *@param {array} [arr] 字符串数组
 *@return {boolean}
 */

function isempty(str){
    return str.trim() === '';
}
