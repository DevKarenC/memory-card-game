// use the Fisher-Yates Shuffle Algorithm for random shuffle (shuffle is done in-place)
const randomizeCard = (arr) => {
  let nums = arr.length,
    t,
    i;
  while (nums) {
    i = Math.floor(Math.random() * nums--);
    t = arr[nums];
    arr[nums] = arr[i];
    arr[i] = t;
  }
  return arr;
};

export default randomizeCard;
