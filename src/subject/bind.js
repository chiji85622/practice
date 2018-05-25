// 实现es5中的bind

Function.prototype.bind = Function.prototype.bind || function () {
  const self = this;
  const context = [].shift.call(arguments);
  const args = [].slice.call(arguments);
  return function() {
    console.log(arguments);
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  };
};

//测试  
function a(m, n, o){  
  return this.name + ' ' + m + ' ' + n + ' ' + o;  
}  

var b = {name : 'kong'};  

console.log(a.bind(b, 7, 8)(9));     