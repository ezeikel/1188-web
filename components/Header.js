import { Component, createRef } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import NProgress from "nprogress";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Wrapper = styled.header`
  position: ${({ sticky }) => sticky ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  padding: var(--spacing-large);
  height: 100px;
  background-color: ${({ sticky }) => sticky ? 'var(--color-white)' : 'transparent'};
  box-shadow: ${({ sticky }) => sticky ? 'rgba(0, 0, 0, 0.1) 0px 2px 1.5rem 0px' : 'non'};;
`;

const Logo = styled.div`
  display: grid;
  place-items: center;
  z-index: 1;
  margin: 0;
  width: 100px;
  @media (min-width: 768px) {
    text-align: center;
    cursor: pointer;
  }
`;

class Header extends Component {
  // TODO: Reinstate once nextjs supports hooks
  //const [active, toggleActive] = useState(false);
  constructor(props) {
    super(props);
    this._header = createRef();
  }

  state = {
    active: false,
    sticky: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    }, () => {
      if (this.state.active) {
        document.documentElement.classList.add('no-scroll');
        document.ontouchend = (e) => {
          e.preventDefault();
        };
      } else {
        document.documentElement.classList.remove('no-scroll');
        document.ontouchend = null;
      }
    });
  };

  handleScroll = () => {
    if (!this._header.current) {
      return;
    }

    const el = this._header.current;
    const elementTop = el.offsetTop;
    const elementBottom = elementTop + el.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.outerHeight

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      el.classList.remove('is-sticky')
      this.setState({
        sticky: false
      });
    } else {
      el.classList.add('is-sticky');
      this.setState({
        sticky: true
      });
    }
  }

  render() {
    return (
      <Wrapper active={this.state.active} ref={this._header} sticky={this.state.sticky} >
        <Logo active={this.state.active}>
          <Link href="/">
            <img src="/static/logos/1188.svg" />
          </Link>
        </Logo>
        <Nav active={this.state.active} sticky={this.state.sticky} />
        <Hamburger active={this.state.active} toggleActive={this.toggleActive} sticky={this.state.sticky} />
      </Wrapper>
    );
  }
};

export default Header;
