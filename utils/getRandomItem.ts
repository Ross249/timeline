import { Info } from "../interfaces/info";

const getRandomItem = (arr: Info[], count: number = 10): Info[] => {
  let randomSample: Info[] = [];
  for (let i = 0; i < count; i++) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    randomSample.push(item);
  }
  return randomSample;
};

export default getRandomItem;
