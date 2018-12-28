import { Component, createRef } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import NProgress from "nprogress";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
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
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  padding: var(--spacing-medium) var(--spacing-large);
  height: var(--header-height);
  background-color: ${({ sticky }) =>
    sticky ? "var(--color-white)" : "transparent"};
  box-shadow: ${({ sticky }) =>
    sticky ? "rgba(0, 0, 0, 0.1) 0px 2px 1.5rem 0px" : "none"};
  @media (min-width: 768px) {
    padding: var(--spacing-large);
    position: ${({ sticky, home }) => (home ? sticky ? "fixed" : "absolute" : "static")};
    top: 0;
    left: 0;
    right: 0;
  }
`;

const Logo = styled.div`
  display: grid;
  place-items: center;
  z-index: 1;
  margin: 0;
  width: 100px;
  img, a {
    width: 100%;
  }
  @media (min-width: 768px) {
    text-align: center;
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
    sticky: false,
    dragging: false
  };

  targetRef = createRef();
  targetElement = null;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.targetElement = this.targetRef.current;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearAllBodyScrollLocks();
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    }, () => {
      if (this.state.active) {
        disableBodyScroll(this.targetElement);
      } else {
        enableBodyScroll(this.targetElement);
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
      <Wrapper active={this.state.active} sticky={this.state.sticky} home={this.props.home} ref={this._header} >
        <Logo active={this.state.active}>
          <Link href="/">
            <a>
              <img src="/static/logos/1188.svg" />
            </a>
          </Link>
        </Logo>
        <Nav active={this.state.active} sticky={this.state.sticky} home={this.props.home} ref={this.targetElement} />
        <Hamburger active={this.state.active} toggleActive={this.toggleActive} sticky={this.state.sticky} />
      </Wrapper>
    );
  }
};

export default Header;
