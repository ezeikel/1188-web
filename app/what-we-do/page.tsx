import Services from '@/components/Services/Services';
import H2 from '@/components/H2/H2';
import { DONTS, DOS } from '../constants';

const WhatWeDoPage = () => (
  <div className=" flex flex-col justify-items-center gap-y-16 md:justify-items-start">
    <Services />
    <div className="flex flex-col gap-y-8 p-8">
      <H2>What to expect from us</H2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-[0_0_50%] flex flex-col justify-items-center gap-y-8 text-black md:justify-items-start md:col-[1_/_span_1] md:row-[2_/_-1]">
          <h3 className="text-2xl m-0 text-center font-bold">What we do</h3>
          <ul className="text-3xl flex flex-col justify-items-center gap-y-4 md:justify-items-start">
            {DOS.map((item) => (
              <li className="text-center" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-[0_0_50%] flex flex-col justify-items-center gap-y-8 text-black opacity-70 md:justify-items-start md:col-[2_/_-1] md:row-[2_/_-1]">
          <h3 className="text-2xl m-0 line-through text-center font-bold">
            What we don&apos;t
          </h3>
          <ul className="text-3xl flex flex-col justify-items-center gap-y-4 md:justify-items-start">
            {DONTS.map((item) => (
              <li className="text-center" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default WhatWeDoPage;
