// Coercion

//  implicit coercion
//  explicit coercion

// falsy: 0,"",null, undefined, false, NaN

/* Explicit type coercion */

var x = 0.01;

console.log(String(x));
console.log(Boolean(x));
console.log(x.toString());

var y = "123.32";

console.log(Boolean(y));
console.log(Number(y));
console.log(parseInt(y));
console.log(parseFloat(y));
console.log(+y);

var z = false;

console.log(Number(z));
console.log(String(z));
