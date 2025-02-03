import * as lodash from "lodash";

const superCodeKebab = lodash.kebabCase(`Hallo Supercode`);
console.log(superCodeKebab);

//* writing a basic function to see how it will work when build runs
function add(a: number, b: number) {
  return a + b;
}
console.log(add(4, 6));
