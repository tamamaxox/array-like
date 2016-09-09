var extendFunction = require('./core/extendFunction');
var setMutator = extendFunction.setMutator;
var setAccessor = extendFunction.setAccessor;
var each = require("./core/each");
var ArrLike = require("./core/ArrLike");
require("./core/functions");
function Arr() {
    return new ArrLike(arguments);
}
Arr.setMutator = function(name,fn){
    return setMutator(ArrLike,'$'+name,fn);
};
Arr.setAccessor = function(name,fn){
    return setAccessor(ArrLike,'$'+name,fn);
};
module.exports = Arr;
