import { Component } from "react";
import Link from "next/link";
import Slider from "react-slick";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
  padding: var(--spacing-large);
  color: var(--color-black);
  display: grid;
  grid-row-gap: var(--spacing-large);
  overflow-x: hidden;
  @media (min-width: 968px) {
    overflow-x: hidden;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto 1fr;
    grid-row-gap: var(--spacing-large);
    grid-column-gap: var(--spacing-large);
  }
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
  font-size: 4rem;
  margin: 0;
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
  position: relative;
  &:after {
    position: relative;
    content: "";
    display: block;
    position: absolute;
    background-color: var(--color-primary);
    height: 6px;
    width: 10rem;
    bottom: -6px;
    left: 0;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-slide {
    > div + div {
      margin-top: var(--spacing-huge);
    }
  }
  @media (min-width: 968px) {
    grid-column: 1 / span 3;
    grid-row: 3 / -1;
  }
`;

const SliderNav = styled.div`
  display: none;
  @media (min-width: 968px) {
    grid-column: 4 / -1;
    grid-row: 3 / -1;
    display: grid;
    justify-content: center;
    grid-row-gap: var(--spacing-medium);
  }
`;

const SliderNavTitle = styled.h4`
  font-size: 1.4rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
`;

const SliderNavLinks = styled.ul`
  display: grid;
  grid-row-gap: var(--spacing-medium);
`;

const SliderNavLinkTitle = styled.h3`
  transition: color 0.3s ease-in-out;
  .active & {
    position: relative;
    color: var(--color-black);
    &:after {
      background-color: var(--color-primary);
    }
  }
  &:after {
    content: "";
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
  @media (min-width: 968px) {
    color: #d3d3d3;
    font-size: 3rem;
    margin: 0;
  }
`;

const SliderNavLink = styled.li`
  transition: color 0.3s ease-in-out;
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
    font-size: 1.8rem;
    &:hover {
      background-color: #6043ed;
      border-color: #6043ed;
      cursor: pointer;
    }
  }
`;

const Slide = styled.div`
  display: grid !important; /*TODO: Remove */
  grid-template-rows: auto auto 1fr auto;
  grid-row-gap: var(--spacing-large);
  outline: none;
  place-items: center;
  @media (min-width: 968px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto auto 1fr auto;
    justify-items: start;
    svg {
      grid-row: 1 / span 1;
      grid-column: 1 / -1;
    }
  }
`;

const SlideTitle = styled.h3`
  margin: 0;
  font-size: 3rem;
  @media (min-width: 968px) {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
  }
`;

const SlideCopy = styled.p`
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin: 0;
  @media (min-width: 968px) {
    grid-column: 1 / span 3;
    grid-row: 3 / span 3;
  }
`;

class Services extends Component {
  state = {
    activeSlide: 0,
    sliderData: [
      {
        icon: {
          category: 'fal',
          name: 'tablet',
          color: '#3B3B3B',
          size: '5x'
        },
        title: 'Platforms & Apps',
        copy: `Creating platforms &amp; apps is what we are most passionate
        about. Liquid has worked with a number of different exustries to
        create market leading platforms, from property portals to
        community spaces.`,
        buttonLink: '#',
        buttonCopy: 'Read More',
      },
      {
        icon: {
          category: 'fal',
          name: 'browser',
          color: '#3B3B3B',
          size: '5x'
        },
        title: 'Websites',
        copy: `We specialise in the design &amp; development of websites that
        work – for your users and you. Powered by sophisticated backend
        systems and APIs, they generate leads, sales, enquiries and
        whatever else your online goals may be.`,
        buttonLink: '#',
        buttonCopy: 'Read More',
      },
      {
        icon: {
          category: 'fal',
          name: 'mobile',
          color: '#3B3B3B',
          size: '5x'
        },
        title: 'Mobile',
        copy: `Mobile first – always! With the opportunity to reach users at any
        given moment, we deliver expert mobile strategy, responsive design
        and mobile application development.`,
        buttonLink: '#',
        buttonCopy: 'Read More',
      },
      {
        icon: {
          category: 'fal',
          name: 'map-marked-alt',
          color: '#3B3B3B',
          size: '5x'
        },
        title: 'Digital Strategy',
        copy: `Analysis, research and insight to position brands at the forefront
        of digital.`,
        buttonLink: '#',
        buttonCopy: 'Read More',
      },
      {
        icon: {
          category: 'fal',
          name: 'fill-drip',
          color: '#3B3B3B',
          size: '5x'
        },
        title: 'Design & UX',
        copy: `Let our team of talented designers craft your digital experience.
        We create beautiful, functional and delicious design solutions
        and, we're proud of it!`,
        buttonLink: '#',
        buttonCopy: 'Read More',
      },
      {
        icon: {
          category: 'fal',
          name: 'paper-plane',
          color: '#3B3B3B',
          size: '5x'
        },
        title: 'Marketing',
        copy: `Our experienced team, along with our proven platforms, will help
        build your business. With proven results on the board, we not only
        offer solutions, we deliver game changing ideas.`,
        buttonLink: '#',
        buttonCopy: 'Read More',
      }
    ]
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
      responsive: [
        {
          breakpoint: 968,
          settings: {
            rows: 6
          }
        }
      ],
      // TODO: For some reason next is out of sync to actual active state of carousel. Setting +1 worked but need to go back to zero too
      beforeChange: next => this.setState({ activeSlide: next === 5 ? 0 : next + 1 })
    };

    return (
      <Wrapper>
        <SubTitle>Services</SubTitle>
        <Title>What we're good at.</Title>
        <StyledSlider {...settings}>
          {
            this.state.sliderData.map((slide, i) => (
              <Slide key={i}>
                <FontAwesomeIcon
                  icon={[slide.icon.category, slide.icon.name]}
                  color={slide.icon.color}
                  size={slide.icon.size}
                />
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideCopy>{slide.copy}</SlideCopy>
                <Link href={slide.buttonLink}>
                  <StyledAnchor>{slide.buttonCopy}</StyledAnchor>
                </Link>
              </Slide>
            ))
          }
        </StyledSlider>
        <SliderNav>
          <SliderNavTitle>The Expertise</SliderNavTitle>
          <SliderNavLinks>
            {
              this.state.sliderData.map((slide, i) => (
                <SliderNavLink className={this.state.activeSlide === i ? "active" : null} key={i}>
                  <SliderNavLinkTitle>{slide.title}</SliderNavLinkTitle>
                </SliderNavLink>
              ))
            }
          </SliderNavLinks>
        </SliderNav>
      </Wrapper>
    );
  }
}

export default Services;
