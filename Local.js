function Local(store){
  var local = Object.create(null);
  var length = 0;
  var event = [];
  var change = function(){
    for(var i=0, l = event.length; i<l; i++){
      event[i].call(storage, storage);
    }
  }
  var keys = function(obj, fn){
    for(var k in obj){
      if(hasOwnProperty.call(obj, k)){
        fn(k);
      }
    }
  }
  var copy = function(obj){
    var set = {};
    keys(obj, function(k){
      set[k] = obj[k];
    })
    return set;
  }
  var storage = {
    set: function(k, v) {
      if(typeof v !== 'string'){
        v = String(v);
      }
      if(local[k] === v){
        return;
      }
      if(local[k] === undefined){
        ++length;
      }
      local[k] = v;
      localStorage.setItem(k, v);
      change();
    },
    get: function(k) {
      if(local[k] === undefined){
        return null;
      }
      return local[k];
    },
    getAll: function(){
      return copy(local);
    },
    remove: function(k) {
      if(local[k] === undefined){
        return;
      }
      --length;
      delete local[k];
      localStorage.removeItem(k);
      change();
    },
    clear: function() {
      if(length === 0){
        return;
      }
      length = 0;
      local = Object.create(null);
      localStorage.clear();
      change();
    },
    on: function(fn){
      var index = event.indexOf(fn);
      if(index > -1){
        return;
      }
      event.push(fn);
    },
    off: function(fn){
      var index = event.indexOf(fn);
      if(index > -1){
        event.splice(index, 1);
      }
    }
  }
  Object.defineProperty(storage, 'length', {
    get: function(){
      return length;
    }
  })
  
  keys(localStorage, function(k){
    storage.set(k, localStorage.getItem(k));
  })
  if(typeof store === 'object' && store !== null){
    keys(store, function(k){
      storage.set(k, store[k]);
    })
  }
  return storage;
}
