/**
 * @param {string} key
 * @param {number} count
 * @param {function} callback
 * @return undefined
 */

function gloop(key, count, callback){
  if(!window[key]) window[key] = 0;
  if(window[key] < count) {
    callback(window[key]);
    window[key] += 1;
    loop(key, count, callback);
  }
}

/**
 * @param {function} callback
 * @return undefined
 */

function mloop(callback){
  var result = callback();
  if(!result){
    requestAnimationFrame(function(){
      mloop(callback);
    })
  }
}