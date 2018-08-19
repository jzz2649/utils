/**
 * @param {object} attr 
 * @param {object} prop
 * @return {void} 
 */

function merge(attr, prop){
  for(var key in prop){
    if(isObject(prop[key])){
      merge(attr[key], prop[key]);
    }else{
      attr[key] = prop[key];
    }
  }
}

/**
 * @param {any} el
 * @return {HTMLElement}
 */

function toEle(el) {
  if (el instanceof HTMLElement) {
    return el;
  }
  return document.createTextNode(String(el));
}

/**
 * @param {string} type
 * @param {object} props
 * @param {...string|HTMLElement} childrens
 * @return {HTMLElement}
 */

function creEle(type, props, childrens){
  var node = document.createElement(type);
  var childs = [].slice.call(arguments,2);

  if(isArray(childs[0])) childs = childs[0];

  merge(node, props);

  for (var i = 0; i < childs.length; i++) {
    node.appendChild(toEle(childs[i]));
  }

  return node;
}

/**
 * @param {string} el
 * @param {object} props
 * @param {...string|HTMLElement} childrens
 * @return {HTMLElement}
 */

function cloneEle(el, props, childrens) {
  var node = el.cloneNode(true);
  var childs = [].slice.call(arguments, 2);

  if (isArray(childs[0])) childs = childs[0];

  merge(node, props);

  for (var i = 0; i < childs.length; i++) {
    node.appendChild(toEle(childs[i]));
  }

  return node;
}