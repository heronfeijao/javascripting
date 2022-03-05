function howManyHundreds(bottles) {
  if (bottles % 100 === 0) {
    return bottles / 100;
  } else {
    return Math.floor(bottles/100);
  }
}

console.log(howManyHundreds(100))