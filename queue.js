function queue(callback){
  var start = true;
  var list = [];
  return function(value){
    list.push(value);
    if(start){
    start = false;
    requestAnimationFrame(function(){
      start = true;
      var _list = list;
      list = [];
      callback(_list);
    })
    }
  }
}
