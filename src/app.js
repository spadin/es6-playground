var KlassExample = (function() {
  var privateFunctionSymbol;
  privateFunctionSymbol = Symbol()

  return class {
    constructor() {
      console.log('hello world')
      this[privateFunctionSymbol]()
    }
        publicFunction() {
            console.log('public function')
      }
    [privateFunctionSymbol]() {
      console.log('private function')
    }
  }
})()

var c = new KlassExample()
c.publicFunction();
console.log(c);
