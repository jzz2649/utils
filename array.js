function reduce(callback,initValue){
    var index = 0;
    if(typeof initValue === 'undefined'){
        initValue = this[0];
        index = 1;
    }
    if(typeof initValue === 'undefined'){
        throw new Error('Reduce of empty array with no initial value');
    }
    var total = initValue;
    for(var i=index; i<this.length;i++){
        total = callback(total,this[i],i,this);
    }
    return total;
}

function map(callback){
    var arr = [];
    for(var i=0;i<this.length;i++){
        arr.push(callback(this[i],i,this));
    }
    return arr;
}

function filter(callback){
    var arr = [];
    for(var i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            arr.push(this[i]);
        }
    }
    return arr;
}

function flat(n){
  var list = [];
  if(n==null) n = 1;
  for(var i = 0; i < this.length; i++){
    if(n&&toString.call(this[i]) === '[object Array]'){
      list = list.concat(flat.call(this[i],n-1));
    }else{
      list.push(this[i]);
    }
  }
  return list;
}

function flatMap(callback){
    return flat.call(map.call(this, function(v, i, arr){
        return callback(v, i, arr);
    }))
}

function each(list, callback, type) {
    var start = 0;
    var end = list.length - 1;
    while (end >= start) {
        var index = start;
        if (type) {
            index = end;
            end -= 1;
        } else {
            start += 1;
        }
        if (callback(list[index], index, list)) {
            return;
        }
    }
}

function forEach(callback) {
    each(this, function(item, index, list){
        callback(item, index, list);
    })
}
