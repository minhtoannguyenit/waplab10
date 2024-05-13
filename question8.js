// 8. Review IIFE, bind, apply, call methods first, what's the value of result in the console?
const result = (function(exports, module){
  exports = module.exports;
  exports.firstname = 'John';
  module.exports.lastname = 'Smith';
  exports = {
    getFullName: function(){
      console.log('John Smith')
    }
  }
  return module.exports;
// }).apply(null, [null, {exports: {}}]);
// }).call(null, null, {exports: {}});
}).bind(null, null, {exports: {}})();
console.log(result);

// Answer: 
// apply: { firstname: 'John', lastname: 'Smith' }
// call: { firstname: 'John', lastname: 'Smith' }
// bind: { firstname: 'John', lastname: 'Smith' }
