function formatDate(timestamp,type){
    var result,year,month,hours,minute,second;
    var type=type||'YY-MM-DD hh:mm:ss';
    var date = new Date(timestamp||null);
    var len2 = function(v){
        var v = v?v.toString():'';
        var result = '00';
        var len = v.length;
        if(len===1){
            result = '0'+v;
        }else if (len===2){
            result = v;
        }else if(len>2){
            result = v.slice(0,2);
        }
        return result;
    }
    var _formatDate = function(d,t){
        var date = '';
        var time = '';
        if(d){
            date = year+d+month+d+day;
        }
        if(t){
            time = hours+t+minute+t+second;
        }
        return (date+' '+time).trim();
    }
    year = date.getFullYear();
    month = len2(date.getMonth()+1);
    day = len2(date.getDate());
    hours = len2(date.getHours());
    minute = len2(date.getMinutes());
    second = len2(date.getSeconds());
    switch(type){
        case 'YY-MM-DD hh:mm:ss':
            result = _formatDate('-',':');
        break;
        case 'YY/MM/DD hh:mm:ss':
            result = _formatDate('/',':');
        break;
        case 'YY-MM-DD':
            result = _formatDate('-');
        break;
        case 'YY/MM/DD':
            result = _formatDate('/');
        break;
        case 'hh/mm/ss':
            result = _formatDate(undefined,'/');
        break;
        case 'hh-mm-ss':
            result = _formatDate(undefined,'-');
        break;
        case 'hh:mm:ss':
            result = _formatDate(undefined,':');
        break;
    }
    return result;
}
