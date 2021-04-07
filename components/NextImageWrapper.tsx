import { FunctionComponent } from "react";
import styled from "styled-components";
import Image, { ImageProps } from "next/image";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

const NextImageWrapper: FunctionComponent<ImageProps> = ({
  className,
  ...props
}) => (
  <Wrapper className={className}>
    <Image {...props} />
  </Wrapper>
);

export default NextImageWrapper;
