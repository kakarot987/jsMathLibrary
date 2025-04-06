(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mathUtils = {}));
})(this, (function (exports) { 'use strict';

  // src/mathUtils.js

  function add(a, b) {
      return a + b;
    }
    
    function subtract(a, b) {
      return a - b;
    }
    
    function multiply(a, b) {
      return a * b;
    }
    
    function divide(a, b) {
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
    }

  exports.add = add;
  exports.divide = divide;
  exports.multiply = multiply;
  exports.subtract = subtract;

}));
