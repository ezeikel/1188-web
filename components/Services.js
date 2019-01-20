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
  fade: true,
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
        <h3>Platforms &amp; Apps</h3>
        <p>
          Creating platforms &amp; apps is what we are most passionate about.
          Liquid has worked with a number of different industries to create
          market leading platforms, from property portals to community spaces.
        </p>
        <a href="#">Read More</a>
      </div>
      <div>
        <h3>Websites</h3>
        <p>
          We specialise in the design &amp; development of websites that work –
          for your users and you. Powered by sophisticated backend systems and
          APIs, they generate leads, sales, enquiries and whatever else your
          online goals may be.
        </p>
        <a href="#">Read More</a>
      </div>
      <div>
        <h3>Mobile</h3>
        <p>
          Mobile first – always! With the opportunity to reach users at any
          given moment, we deliver expert mobile strategy, responsive design and
          mobile application development.
        </p>
        <a href="#">Read More</a>
      </div>
      <div>
        <h3>Digital Strategy</h3>
        <p>
          Analysis, research and insight to position brands at the forefront of
          digital.
        </p>
        <a href="#">Read More</a>
      </div>
      <div>
        <h3>Design &amp; UX</h3>
        <p>
          Let our team of talented designers craft your digital experience. We
          create beautiful, functional and delicious design solutions and, we're
          proud of it!
        </p>
        <a href="#">Read More</a>
      </div>
      <div>
        <h3>Marketing</h3>
        <p>
          Our experienced team, along with our proven platforms, will help build
          your business. With proven results on the board, we not only offer
          solutions, we deliver game changing ideas.
        </p>
        <a href="#">Read More</a>
      </div>
    </Slider>
  </Wrapper>
);

export default Services;
