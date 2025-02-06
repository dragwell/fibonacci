'use strict';
function fib(n) {
  if(typeof n !== 'number')return null;
  switch (n) {
    case 0 : return 0;
    case 1 : return 1;
    default : return fib(n - 1) + fib(n - 2);
  }
}
const len = 40;
for(let i = 0; i <= len; i++)console.log(fib(i));