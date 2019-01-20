import styled from 'styled-components';
import Slider from 'react-slick';

const Wrapper = styled.div`
  padding: var(--spacing-large);
  color: var(--color-black);
  overflow-x: hidden;
`;

const SubTitle = styled.h4`
  text-transform: uppercase;
  color: #b3b3b3;
  font-size: 1.3rem;
  letter-spacing: 1.5px;
  font-weight: normal;
  margin: 0;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  margin: 0;
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true
};

const Services = () => (
  <Wrapper>
    <SubTitle>Expertise</SubTitle>
    <Title>What we're good at.</Title>
    <Slider {...settings}>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
      <div>
        <img src="http://placekitten.com/g/400/200" />
      </div>
    </Slider>
  </Wrapper>
);

export default Services;
