// 实现es5中的bind
// Function.property.bind||
// Function.property.bind = Function.property.bind || function () {
//   const self = this;
//   const context = [].shift.call(arguments);
//   const args = [].slice.call(arguments);
//   return function() {
//     console.log(arguments);
//     return self.apply(context, [args].concat.call([], [].slice.call(arguments)));
//   };
// };

Function.prototype.my_bind = function(context){  
  var args = Array.prototype.slice.call(arguments, 1);  
  //args [7, 8]  
  var self = this;  
  return function(){  
      var innerArgs = Array.prototype.slice.call(arguments);  
      //innerArgs [9]  
      var finalArgs = args.concat(innerArgs);  
      //finalArgs [7, 8, 9]  
      return self.apply(context, finalArgs);  
  }  
}  

//测试  
function a(m, n, o){  
  return this.name + ' ' + m + ' ' + n + ' ' + o;  
}  

var b = {name : 'kong'};  

a.my_bind(b, 7, 8)(9);      