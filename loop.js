/**
 * @param {string} key
 * @param {number} count
 * @param {function} callback
 * @return {void}
 */

function gloop(key, count, callback){
  if(!window[key]) window[key] = 0;
  if(window[key] < count) {
    callback(window[key]++);
    gloop(key, count, callback);
  }
}

/**
 * @param {function} callback
 * @return {void}
 */

function mloop(callback){
  var result = callback();
  if(!result){
    requestAnimationFrame(function(){
      mloop(callback);
    })
  }
}