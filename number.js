import { paramToArray } from './convert.js';

function add(){
    var numbers = paramToArray(arguments);
    var s = 0;
    for(var i = 0; i < numbers.length; i++){
        s += numbers[i];
    }
    return s;
}
