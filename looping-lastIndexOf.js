function lastIndexOf(array, value) {
  let match = false
  let index;
  for (let i = (array.length - 1); i > -1; i--) {
    if(value === array[i]) {
      match = true;
      index = i;
    }
  }
  if (match) {
    return index;
  } else {
    return -1;
  }
}

function lastIndexOf(numbers, target) {
  let foundMatch = false;
  let result = 0;
  for(let i = numbers.length - 1; i >= 0; i--) {
    if(numbers[i] === target) {
      result = i;
      foundMatch = true;
      break;
    }
  }
  if(foundMatch) {
    return result;
  } else {
    return -1;
  }
}
