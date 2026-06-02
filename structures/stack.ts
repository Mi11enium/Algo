


const stack = [];

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.push(40);

console.log(stack);


let as = "asdijf";

let as2 = as.slice(1,-1);

console.log(as2);

export function basicOp(operation: string, value1: number, value2: number): number {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2;
  } else {
    return 0
  }
}


let sum = 0;
let arr2 = [1, 2, 4, 5];

    arr2.forEach(el => {
        sum += el;
});


if (array.length === 0) {
    return 0;
  } else {
    let sum = 0;
    array.forEach(el => {
      sum += el;
    })
    return parse(sum / 2);
  }


  

