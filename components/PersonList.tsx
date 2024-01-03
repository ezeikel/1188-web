import PersonCard from './PersonCard';

type PersonListProps = {
  heading: string;
  people: any[]; // TODO: change to array of type People
};

const PersonList = ({ heading, people }: PersonListProps) => (
  <div className="flex flex-col">
    <h2 className="text-3xl m-0 relative text-black mb-8 after:content-[''] after:block after:absolute after:bg-primary after:h-2 after:w-2.5 after:bottom-[calc(-1_*_var(--spacing-small))] after:left-0 md:text-4xl">
      {heading}
    </h2>
    <ul className="flex flex-wrap justify-center ml-[calc(-1_*_var(--spacing-large))] mt-[calc(-1_*_var(--spacing-large))] md:justify-start">
      {people.map((person, i) => (
        <li className="flex flex-[0_0_300px] h-[450px] ml-8 mt-8">
          <PersonCard person={person} key={i} className="flex-[1_0_auto]" />
        </li>
      ))}
    </ul>
  </div>
);

export default PersonList;
