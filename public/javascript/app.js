"use strict";
var KlassExample = (function() {
  var $__2;
  var privateFunctionSymbol;
  privateFunctionSymbol = Symbol();
  return (($traceurRuntime.createClass)(function() {
    console.log('hello world');
    this[privateFunctionSymbol]();
  }, ($__2 = {}, Object.defineProperty($__2, "publicFunction", {
    value: function() {
      console.log('public function');
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), Object.defineProperty($__2, privateFunctionSymbol, {
    value: function() {
      console.log('private function');
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2), {}));
})();
var c = new KlassExample();
c.publicFunction();
console.log(c);

//# sourceMappingURL=app.js.map