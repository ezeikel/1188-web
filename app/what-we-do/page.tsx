import Services from '@/components/Services';
import H2 from '@/components/H2/H2';

const WhatWeDoPage = () => (
  <div className="grid justify-items-center gap-y-16 md:justify-items-start">
    <Services />
    <section className="grid gap-y-16 p-8 md:grid-cols-[1fr_1fr] md:grid-rows-[auto_1fr] md:justify-items-start md:col-span-full md:w-full md:px-16 md:pb-16">
      <H2 className="md:row-[1_/_span_1] md:col-span-full">
        What to expect from us
      </H2>
      <div className="grid justify-items-center gap-y-8 text-black md:justify-items-start md:col-[1_/_span_1] md:row-[2_/_-1]">
        <h3 className="text-2xl m-0">What we do</h3>
        <ul className="text-3xl grid justify-items-center gap-y-4 md:justify-items-start">
          <li className="text-center">World-class digital</li>
          <li className="text-center">Expect creativity</li>
          <li className="text-center">Hustle</li>
          <li className="text-center">Obsess over details</li>
          <li className="text-center">Value relationships</li>
          <li className="text-center">High-five</li>
          <li className="text-center">Make things, break things</li>
          <li className="text-center">Meme</li>
          <li className="text-center">Exceed expectations</li>
          <li className="text-center">Party</li>
        </ul>
      </div>
      <div className="grid justify-items-center gap-y-8 text-black opacity-70 md:justify-items-start md:col-[2_/_-1] md:row-[2_/_-1]">
        <h3 className="text-2xl m-0 line-through">What we don&apos;t</h3>
        <ul className="text-3xl grid justify-items-center gap-y-4 md:justify-items-start">
          <li className="text-center">Work late / weekends</li>
          <li className="text-center">Have a sales team</li>
          <li className="text-center">Resist cake</li>
          <li className="text-center">Sacrifice quality for profit</li>
          <li className="text-center">Fax</li>
          <li className="text-center">Lose at Mario Kart</li>
          <li className="text-center">Work for free</li>
          <li className="text-center">Egos</li>
          <li className="text-center">Impossible deadlines</li>
          <li className="text-center">Outsource</li>
        </ul>
      </div>
    </section>
  </div>
);

export default WhatWeDoPage;
