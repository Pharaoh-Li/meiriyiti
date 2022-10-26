// const urlAlphabet =
// "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
// const nanoid = (size = 21) => {
// let id = "";
// // A compact alternative for `for (var i = 0; i < step; i++)`.
// let i = size;
// while (i--) {
//   // `| 0` is more compact and faster than `Math.floor()`.
//   id += urlAlphabet[(Math.random() * 64) | 0];
// }
// return id;
// };
// console.log(nanoid());


const str = 'adasfsdafasfdsadsf'

function fun1(str) {
  const obj = {}
  for(var i = 0;i < str.length;i ++) {
    const temp = str[i]
    obj[temp] ++ || (obj[temp] = 1)
  }
  return obj
}
function fun2(str) {
  return str.split('').reduce((a, b) => {
    if (a[b]) {
      a[b] ++
    } else {
      a[b] = 1
    }
    return a
  }, {})
}
function fun3(str) {
  return str.split('').reduce((a, b) => (a[b] ++ || (a[b] = 1), a), {})
}
console.log(fun1(str));
console.log(fun2(str));
console.log(fun3(str));
