/**
 * @param {string} type
 * @param {object} props
 * @param {...string|HTMLElement} childrens
 * @return {HTMLElement}
 */

function creEle(type, props, children) {
  var node = document.createElement(type);
  var childs = [].slice.call(arguments, 2);

  if (toString.call(childs[0]) === "[object Array]") {
    childs = childs[0];
  }

  function toEle(child) {
    if (child instanceof HTMLElement) {
      return child;
    }
    return document.createTextNode(String(child));
  }

  function merge(attr, prop) {
    for (var key in prop) {
      if (toString.call(prop[key]) === "[object Object]") {
        merge(attr[key], prop[key]);
      } else {
        attr[key] = prop[key];
      }
    }
  }

  merge(node, props);

  for (var i = 0; i < childs.length; i++) {
    node.appendChild(toEle(childs[i]));
  }

  return node;
}
