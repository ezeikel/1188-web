import Link from 'next/link'
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
`;

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Title>Hello Next.js</Title>
  </div>
)

export default Index
