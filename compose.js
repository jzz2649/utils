/**
 *reference redux.js
 *from https://github.com/reactjs/redux/
 */

function compose(args) {
    var funcs = Array.prototype.slice.call(arguments)

    if (funcs.length === 0) {
        return function(arg){
            return arg
        }
    }

    if (funcs.length === 1) {
        return funcs[0]
    }

    return funcs.reduce(function(a, b){
        return function(args){
            return a(b(args))
        }
    })
}
