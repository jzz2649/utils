function reduce(arr, callback, initValue){
    var index = 0;
    if(typeof initValue === 'undefined'){
        initValue = arr[0];
        index = 1;
    }
    if(typeof initValue === 'undefined'){
        throw new Error('Reduce of empty array with no initial value');
    }
    var total = initValue;
    for(var i=index; i < arr.length;i++){
        total = callback(total, arr[i], i, arr);
    }
    return total;
}

function map(arr, callback){
    var list = [];
    for(var i = 0; i < arr.length; i++){
        list.push(callback(arr[i], i, arr));
    }
    return list;
}

function filter(arr, callback){
    var list = [];
    for(var i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            list.push(arr[i]);
        }
    }
    return list;
}

function flat(arr, n){
  var list = [];
  if(n==null) n = 1;
  for(var i = 0; i < arr.length; i++){
    if(n && Object.prototype.toString.call(arr[i]) === '[object Array]'){
      list = list.concat(flat(arr[i], n - 1));
    }else{
      list.push(arr[i]);
    }
  }
  return list;
}

function flatMap(arr, callback){
    return flat(map(arr, function(v, i, arr){
        return callback(v, i, arr);
    }))
}

function each(list, callback, options) {
    var ops = {
        start: 0,
        end: list.length - 1,
        order: true
    }
    if (options) {
        for(var key in ops) {
            if(options[key] !== undefined) {
                ops[key] = options[key];
            }
        }
    }
    while (ops.end >= ops.start) {
        var index = ops.start;
        if (ops.order) {
            ops.start += 1;
        } else {
            index = ops.end;
            ops.end -= 1;
        }
        if (callback(list[index], index, list)) {
            return;
        }
    }
}

function forEach(arr, callback) {
    each(arr, function(item, index, list) {
        callback(item, index, list);
    })
}

function includes(arr, value, start) {
    start = start === undefined ? 0 : start < 0 ? arr.length + start : start;
    var result = false;
    each(arr, function(item) {
        if (item === value) {
            result = true;
            return true;
        }
    }, { start });
    return result;
}

function find(arr, callback) {
    var result;
    each(arr, function(item, i, list) {
        if (callback(item, i, list)) {
            result = item;
            return true;
        }
    })
    return result;
}

function some(arr, callback) {
    var result = false;
    each(arr, function(item, i, list) {
        if (callback(item, i, list)) {
            result = true
            return true;
        }
    })
    return result;
}

function every(arr, callback) {
    var result = true;
    each(arr, function(item, i, list) {
        if (!callback(item, i, list)) {
            result = false
            return true;
        }
    })
    return result;
}

function lastIndexOf(arr, value, fromIndex) {
    if (fromIndex == null) {
        fromIndex = arr.length - 1;
    }
    fromIndex = Math.min(fromIndex, arr.length - 1);
    if (fromIndex < 0) {
        fromIndex = Math.min(arr.length + fromIndex, arr.length - 1)
        if (fromIndex < 0) {
            return -1
        }
    }
    each(arr, function(item, i) {
        fromIndex = -1
        if (value === item) {
            fromIndex = i;
            return true;
        }
    }, {
        end: fromIndex,
        order: false
    })
    return fromIndex;
}
