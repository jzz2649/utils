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
 * @param {string} type
 * @param {object} props
 * @param {...string|HTMLElement} childrens
 * @return {HTMLElement}
 */

function creEle(type, props, childrens){
  var node = document.createElement(type);
  var childs = [].slice.call(arguments,2);

  function cd(child) {
    if (child instanceof HTMLElement) {
      return child;
    }
    return document.createTextNode(String(child));
  }

  merge(node, props);

  for (var i = 0; i < childs.length; i++) {
    node.appendChild(cd(childs[i]))
  }

  return node;
}