// Create a random pick function
// Parameter : an Array
// Return : a random item of that array
export const pickRandomArrayItem = myArrayParameter => {
  var item =
    myArrayParameter[Math.floor(Math.random() * myArrayParameter.length)];
  return item;
};

/*
  works the same :

  export {pickRandomArrayItem, ...other Functions maybe?};

*/
