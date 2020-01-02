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
    var arr = [];
    for(var i=0; i < arr.length; i++){
        arr.push(callback(arr[i], i, arr));
    }
    return arr;
}

function filter(arr, callback){
    var arr = [];
    for(var i=0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            arr.push(arr[i]);
        }
    }
    return arr;
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
    return flat(arr, map(arr, function(v, i, arr){
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
