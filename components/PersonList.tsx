import { FunctionComponent } from "react";
import styled from "styled-components";
import PersonCard from "./PersonCard";;

type PersonListProps = {
  heading: string;
  people: any[]; // TODO: change to array of type People
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: calc(-1 * var(--spacing-large));
    margin-top: calc(-1 * var(--spacing-large));

    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  }

  li {
    display: flex;
    flex: 0 0 300px;
    height: 450px;
    margin-left: var(--spacing-large);
    margin-top: var(--spacing-large);

    > div {
      flex: 1 0 auto;
    }
  }
`;

const Heading = styled.h2`
  font-size: 3.2rem;
  margin: 0;
  position: relative;
  color: var(--color-black);
  margin-bottom: var(--spacing-large);
  &:after {
    position: relative;
    content: "";
    display: block;
    position: absolute;
    background-color: var(--color-primary);
    height: var(--spacing-small);
    width: 10rem;
    bottom: calc(-1 * var(--spacing-small));
    left: 0;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const PersonList: FunctionComponent<PersonListProps> = ({
  heading,
  people,
}) => (
  <Wrapper>
    <Heading>{heading}</Heading>
    <ul>
      {people.map((person, i) => (
        <li>
          <PersonCard person={person} key={i} />
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default PersonList;
