function formatDate(timestamp, type){
    var year, month, day, hours, minute, second, d, t;
    var type = type || 'YY-MM-DD hh:mm:ss';
    var date = new Date(timestamp||null);
    var fill = function (s, v, l){
        var len = v.length;
        var _l = l-len,
            _l = _l > 0 ? _l : 0;
        return s.repeat(_l) + v.slice(0, l);
    }
    var len2 = function(v){
        var v = v ? v.toString() : '';
        return fill('0', v, 2);
    }
    var _formatDate = function(d, t){
        var date = '';
        var time = '';
        if (d) {
            date = year + d + month + d + day;
        }
        if (t) {
            time = hours + t + minute + t + second;
        }
        return (date+' '+time).trim();
    }
    year = date.getFullYear();
    month = len2(date.getMonth() + 1);
    day = len2(date.getDate());
    hours = len2(date.getHours());
    minute = len2(date.getMinutes());
    second = len2(date.getSeconds());
    if (type.length === 17) {
        d = type.slice(2, 3);
        t = type.slice(11, 12);
    } else if (type.length === 8) {
        if (~type.indexOf('YY')) {
            d = type.slice(2, 3);
        } else {
            t = type.slice(2, 3);
        }
    } else {
        throw new Error('args type error,for example YY-MM-DD hh:mm:ss');
    }
    return _formatDate(d, t);
}
