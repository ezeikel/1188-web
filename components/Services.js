import { Component } from 'react';
import Link from "next/link";
import Slider from 'react-slick';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: var(--spacing-large);
  color: var(--color-black);
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto 1fr;
  grid-row-gap: var(--spacing-medium);
  grid-column-gap: var(--spacing-large);
`;

const SubTitle = styled.h4`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
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
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
`;

const StyledSlider = styled(Slider)`
  grid-column: 1 / span 3;
  grid-row: 3 / -1;
`;

const SliderNav = styled.div`
  grid-column: 4 / -1;
  grid-row: 3 / -1;
  display: grid;
  justify-content: center;
  grid-row-gap: var(--spacing-medium);
  h3 {
    color: #d3d3d3;
    font-size: 3rem;
    font-weight: normal;
    margin: 0;
  }
`;

const SliderNavTitle = styled.h4`
  font-size: 1.4rem;
  margin: 0;
`;

const SliderNavLinks = styled.ul`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  li h3 {
    transition: color 0.3s ease-in-out;
  }
  li h3:after {
    content: '';
    position: absolute;
    background: transparent;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    top: 50%;
    transform: translateY(-50%);
    left: -30px;
    transition: background-color 0.3s ease-in-out;
  }
  li.active h3 {
    position: relative;
    color: var(--color-black);
    &:after {
      background-color: var(--color-primary);
    }
  }
`;

const StyledAnchor = styled.a`
  border: 3px solid var(--color-tertiary);
  border-radius: 4px;
  color: var(--color-white);
  background-color: var(--color-tertiary);
  font-size: 2.2rem;
  font-weight: bold;
  padding: var(--spacing-medium) var(--spacing-large);
  color: var(--color-white);
  display: grid;
  place-items: center;
  @media (min-width: 768px) {
    grid-column: 1 / span 1;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #6043ed;
      border-color: #6043ed;
      cursor: pointer;
    }
  }
`;

const Slide = styled.div`
  display: grid !important; /*TODO: Remove */
  grid-row-gap: var(--spacing-large);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr auto;
  h3, p {
    margin: 0;
  }
  h3 {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
  }
  p {
    font-size: 1.88rem;
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
  }
`;

class Services extends Component {
  state = {
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };

    return (
      <Wrapper>
        <SubTitle>Services</SubTitle>
        <Title>What we're good at.</Title>
        <StyledSlider {...settings}>
          <Slide>
            <h3>Platforms &amp; Apps</h3>
            <p>
              Creating platforms &amp; apps is what we are most passionate
              about. Liquid has worked with a number of different industries to
              create market leading platforms, from property portals to
              community spaces.
            </p>
            <Link href="#">
              <StyledAnchor>Read More</StyledAnchor>
            </Link>
          </Slide>
          <Slide>
            <h3>Websites</h3>
            <p>
              We specialise in the design &amp; development of websites that
              work – for your users and you. Powered by sophisticated backend
              systems and APIs, they generate leads, sales, enquiries and
              whatever else your online goals may be.
            </p>
            <Link href="#">
              <StyledAnchor>Read More</StyledAnchor>
            </Link>
          </Slide>
          <Slide>
            <h3>Mobile</h3>
            <p>
              Mobile first – always! With the opportunity to reach users at any
              given moment, we deliver expert mobile strategy, responsive design
              and mobile application development.
            </p>
            <Link href="#">
              <StyledAnchor>Read More</StyledAnchor>
            </Link>
          </Slide>
          <Slide>
            <h3>Digital Strategy</h3>
            <p>
              Analysis, research and insight to position brands at the forefront
              of digital.
            </p>
            <Link href="#">
              <StyledAnchor>Read More</StyledAnchor>
            </Link>
          </Slide>
          <Slide>
            <h3>Design &amp; UX</h3>
            <p>
              Let our team of talented designers craft your digital experience.
              We create beautiful, functional and delicious design solutions
              and, we're proud of it!
            </p>
            <Link href="#">
              <StyledAnchor>Read More</StyledAnchor>
            </Link>
          </Slide>
          <Slide>
            <h3>Marketing</h3>
            <p>
              Our experienced team, along with our proven platforms, will help
              build your business. With proven results on the board, we not only
              offer solutions, we deliver game changing ideas.
            </p>
            <Link href="#">
              <StyledAnchor>Read More</StyledAnchor>
            </Link>
          </Slide>
        </StyledSlider>
        <SliderNav>
          <SliderNavTitle>The Expertise</SliderNavTitle>
          <SliderNavLinks>
            <li className={this.state.activeSlide === 0 ? 'active' : null}>
              <h3>Platform &amp; Apps</h3>
            </li>
            <li className={this.state.activeSlide === 1 ? 'active' : null}>
              <h3>Websites</h3>
            </li>
            <li className={this.state.activeSlide === 2 ? 'active' : null}>
              <h3>Mobile</h3>
            </li>
            <li className={this.state.activeSlide === 3 ? 'active' : null}>
              <h3>Digital Strategy</h3>
            </li>
            <li className={this.state.activeSlide === 4 ? 'active' : null}>
              <h3>Design &amp; UX</h3>
            </li>
            <li className={this.state.activeSlide === 5 ? 'active' : null}>
              <h3>Marketing</h3>
            </li>
          </SliderNavLinks>
        </SliderNav>
      </Wrapper>
    );
  }
};

export default Services;
