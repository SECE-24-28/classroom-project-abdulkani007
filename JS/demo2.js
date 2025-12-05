console.log("===== ARRAY METHODS DEMO =====");

// Initial array
let arr = [10, 20, 30, 40, 50];
console.log("Initial:", arr);

// 1. push()
arr.push(60);
console.log("push(60):", arr);

// 2. pop()
let popVal = arr.pop();
console.log("pop():", arr, "Removed:", popVal);

// 3. shift()
let shiftVal = arr.shift();
console.log("shift():", arr, "Removed:", shiftVal);

// 4. unshift()
arr.unshift(5);
console.log("unshift(5):", arr);

// 5. slice()
let sliced = arr.slice(1, 3);
console.log("slice(1,3):", sliced);

// 6. splice() - remove
let spliceRemove = arr.splice(2, 1); 
console.log("splice(2,1) removed:", spliceRemove, "Remaining:", arr);

// 7. splice() - add
arr.splice(2, 0, 25);
console.log("splice(2,0,25) added:", arr);

// 8. indexOf()
console.log("indexOf(40):", arr.indexOf(40));

// 9. includes()
console.log("includes(30):", arr.includes(30));

// 10. join()
console.log("join('-'):", arr.join("-"));

// 11. map()
let mapArr = arr.map(n => n * 2);
console.log("map(n*2):", mapArr);

// 12. filter()
let filterArr = arr.filter(n => n > 20);
console.log("filter(n>20):", filterArr);

// 13. reduce()
let sum = arr.reduce((a, b) => a + b, 0);
console.log("reduce(sum):", sum);

// 14. find()
let findVal = arr.find(n => n > 20);
console.log("find(n>20):", findVal);

// 15. findIndex()
let findIndexVal = arr.findIndex(n => n === 40);
console.log("findIndex(40):", findIndexVal);

// 16. sort()
let sortArr = [...arr].sort((a, b) => a - b);
console.log("sort:", sortArr);

// 17. reverse()
let revArr = [...arr].reverse();
console.log("reverse:", revArr);

// 18. concat()
let arr2 = [100, 200];
let combined = arr.concat(arr2);
console.log("concat:", combined);

// 19. flat()
let nested = [1, [2, [3, 4]]];
console.log("flat(2):", nested.flat(2));

// 20. every()
console.log("every(n>0):", arr.every(n => n > 0));

// 21. some()
console.log("some(n>40):", arr.some(n => n > 40));

// 22. fill()
let fillArr = new Array(5).fill("A");
console.log("fill('A'):", fillArr);

// 23. toString()
console.log("toString():", arr.toString());

// 24. Array.isArray()
console.log("isArray(arr):", Array.isArray(arr));
