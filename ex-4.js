//Exercise#4 : Debugging 2

//Start coding here

function removeDuplicates(array) {
  let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array.indexOf(i) !== -1) {
        uniqueArray.push(i);
      };
    };
  return uniqueArray;
};

let numbers = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(numbers));