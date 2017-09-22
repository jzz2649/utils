function formatDate(timestamp, type){
    var year, month, day, hours, minute, second, d, t;
    var type = type || 'YY-MM-DD hh:mm:ss';
    var date = new Date(timestamp||null);
    var fill = function (s, v, l){
        var len = v.length;
        var _l = l - len,
            _l = _l > 0 ? _l : 0;
        return s.repeat(_l) + v.slice(0, l);
    }
    var len2 = function(v){
        var v = v ? v.toString() : '';
        return fill('0', v, 2);
    }
    var _formatDate = function(d, t){
        var date = d ? (year + d + month + d + day) : '';
        var time = t ? (hours + t + minute + t + second) : '';
        return (date+' '+time).trim();
    }
    year = date.getFullYear();
    month = len2(date.getMonth() + 1);
    day = len2(date.getDate());
    hours = len2(date.getHours());
    minute = len2(date.getMinutes());
    second = len2(date.getSeconds());
    d = /^YY(.)MM.DD/.test(type) ? RegExp.$1 : undefined;
    t = /hh(.)mm.ss$/.test(type) ? RegExp.$1 : undefined;
    if(!d && !t) throw new Error('args type error,for example YY-MM-DD hh:mm:ss');
    return _formatDate(d, t);
}
