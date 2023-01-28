import randomNumber from './randomNumber';
import generateIndexImage from './generateIndexImage';

const generateRandomImage = (max: number, min = 0) => {
  return generateIndexImage(randomNumber(max, min));
};

export default generateRandomImage;
