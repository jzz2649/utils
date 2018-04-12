function creEle(type, props, children){
  var node = document.createElement(type);
  var childs = children!=null?[].concat(children):[];

  function cd(child) {
    if(child instanceof HTMLElement){
      return child;
    }
    return document.createTextNode(String(child));
  }

  if(props!=null){
    for(var key in props){
      node[key] = props[key];
    }
  }

  for(var i=0; i<childs.length; i++){
    node.appendChild(cd(childs[i]))
  }

  return node;
}
