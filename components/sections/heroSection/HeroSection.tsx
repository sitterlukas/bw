import { FC } from 'react';

import { heroSectionData } from './heroSectionData';
import Feed from '../../feed/Feed';

const HeroSection: FC = () => (
  <div className='flex flex-3 flex-wrap align-center justify-center dark:bg-black gap-2'>
    {heroSectionData.map((item) => (
      <Feed item={item} />
    ))}
  </div>
);

export default HeroSection;