function Local(store){
  if(store&&toString.call(store)!=='[object Object]'){
    throw new Error('Not is object');
  }
  var local = {};

  var has = function(o, prop){
    return o.hasOwnProperty(prop);
  }

  var is = function(x, y){
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  };

  var storage = {
    set: function(k, v){
      if(has(k)&&is(local[k],v)){
        return;
      }
      local[k] = v;
      localStorage.setItem(k, v);
    },
    get: function(k){
      return k ? local[k]: local;
    },
    clear: function(){
      local = {};
      localStorage.clear();
    }
  }

  for(var item in localStorage){
    if(has(localStorage, item)){
      local[item] = localStorage.getItem(item);
    }
  }

  if (store) {
    storage.clear();
    for(var key in store){
      storage.set(key, store[key]);
    }
  }
  return storage;
}
