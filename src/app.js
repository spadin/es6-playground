var privateFunctionSymbol;
privateFunctionSymbol = Symbol()

export default class App {
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
