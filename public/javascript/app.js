var $__app__ = (function() {
  "use strict";
  var __moduleName = "app";
  var privateFunctionSymbol;
  privateFunctionSymbol = Symbol();
  var $__default = (function() {
    var $__1;
    var App = function App() {
      console.log('hello world');
      this[privateFunctionSymbol]();
    };
    return ($traceurRuntime.createClass)(App, ($__1 = {}, Object.defineProperty($__1, "publicFunction", {
      value: function() {
        console.log('public function');
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, privateFunctionSymbol, {
      value: function() {
        console.log('private function');
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__1), {});
  }());
  return {get default() {
      return $__default;
    }};
})();

//# sourceMappingURL=app.js.map