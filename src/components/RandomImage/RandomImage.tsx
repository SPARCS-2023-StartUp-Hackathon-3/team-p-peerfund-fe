import styled from 'styled-components';

interface IRandomImageProps {
  num: number;
}

const RandomImage = styled.div`
  backgroundimage: url(https://unsplash.it/150/200?image=${(props: IRandomImageProps) => props.num});
`;

export default RandomImage;
