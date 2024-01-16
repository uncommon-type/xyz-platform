import Image from 'next/image';

import bottomLeftShape from './images/bottom-left-shape.svg';
import bottomRightShape from './images/bottom-right-shape.svg';
import heroImg from './images/hero.png';
import topLeftShape from './images/top-left-shape.svg';

const HeroImage = () => (
  <div className="relative aspect-[716/797] max-w-[716px] min-w-[50px] ml-[50%] -translate-x-[50%] w-screen">
    <Image
      src={heroImg}
      alt=""
      width={716}
      height="auto"
      quality={100}
      className="hero-img"
      priority
    />
    <Image
      src={topLeftShape}
      alt=""
      width={0}
      height={0}
      className="absolute left-[38%] top-[min(1rem,22%,9vh)] -translate-x-[56%] w-[min(65%,29.69rem)] h-[min(65%,29.69rem)] opacity-50 blur-[50px]"
    />
    <Image
      src={bottomLeftShape}
      alt=""
      width={0}
      height={0}
      className="absolute left-[33%] top-[min(32rem,59%,73vh)] -translate-x-[50%] w-[min(45%,27.06rem)] h-[min(45%,29.8rem)] opacity-40 blur-[50px]"
    />
    <Image
      src={bottomRightShape}
      alt=""
      width={0}
      height={0}
      className="absolute left-[62%] top-[min(42rem,60%,75vh)] -translate-x-[50%] w-[min(35%,29.69rem)] h-[min(35%,29.06rem)] opacity-40 blur-[50px]"
    />
    <span className="absolute left-[55%] top-[min(7rem,15%,15vh)] -translate-x-[50%] w-[min(40%,13.125rem)] h-[min(40%,13.125rem)] rounded-lg bg-secondary-3/[.30] blur-[50px]" />
    <span className="absolute left-[32%] top-[min(40rem,40%,51vh)] -translate-x-[50%] w-[min(20%,13.125rem)] h-[min(20%,13.125rem)] rounded-lg bg-secondary-3/[.10] blur-[50px]" />
    <span className="absolute left-[77%] top-[min(39rem,75%,90vh)] -translate-x-[68%] w-[min(20%,7.875rem)] h-[min(20%,7.875rem)] rounded-lg bg-grey-90/[.4] blur-[50px]" />
    <span className="absolute left-[77%] top-[min(50rem,63%,72vh)] -translate-x-[68%] w-[min(38%,18.25rem)] h-[min(38%,18.25rem)] rounded-lg bg-grey-90/[.15] blur-[50px] z-[1000]" />
  </div>
);

export default HeroImage;
