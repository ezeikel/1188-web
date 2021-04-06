import { FunctionComponent } from "react";
import styled from "styled-components";
import NextImageWrapper from "./NextImageWrapper";

type PersonCardProps = {
  person: {
    name: string;
    role: string;
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  flex: 0 1 auto;
  display: grid;
  justify-items: start;
  align-items: center;
  margin-top: var(--spacing-medium);
  font-weight: normal;
  color: var(--color-black);
`;

const Role = styled.span`
  flex: 0 1 auto;
  display: grid;
  justify-items: start;
  align-items: center;
  font-weight: lighter;
  color: var(--color-black);
`;

const PersonCard: FunctionComponent<PersonCardProps> = ({ person }) => (
  <Wrapper>
  {/* <Photo
    src={`/images/${member.name.toLowerCase().replace(/\s/g, "-")}.jpg`}
  /> */}
  <NextImageWrapper
    src={`/images/${person.name.toLowerCase().replace(/\s/g, "-")}.jpg`}
    alt="team member image"
    layout="fill"
    objectFit="cover"
    objectPosition="top center"
    placeholder="blurred"
  />
  <Name>{person.name}</Name>
  <Role>{person.role}</Role>
</Wrapper>
);

export default PersonCard;