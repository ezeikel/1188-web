import { FunctionComponent } from "react";
import styled from "styled-components";
import Image from "next/image";

type NextImageWrapperProps = {
  className?: string;
  src: string;
  alt: string;
  layout: string;
  objectFit?: string;
  objectPosition?: string;
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const NextImageWrapper: FunctionComponent<NextImageWrapperProps> = ({
  className,
  ...props
}) => (
  <Wrapper className={className}>
    <Image {...props} />  {/** tslint:disable-line **/}
  </Wrapper>
);

export default NextImageWrapper;
