import SignupForm from '../signup-form/signup-form';

const HeroContent = () => (
  <div className="flex flex-col flex-wrap justify-center items-stretch font-roboto-light text-xl leading-normal tracking-wide">
    <article className="flow relative">
      <h1 className="mt-[min(10.5rem,30vh)] text-grey-98 font-poppins leading-4.5 tracking-tighter text-shadow">
        Unlock valuable insights from subscription data
      </h1>
      <span className="absolute bottom-[min(12rem,40vh)] left-[33%] -translate-x-[50%] -z-[1] w-[clamp(14.06rem,6.355rem+44.03vw,39.375rem)] h-[clamp(14.06rem,6.355rem+44.03vw,39.375rem)] rounded-lg bg-[rgb(var(--primary-1)/.15)] blur-[200px]" />
      <p className="text-grey-94 text-lg font-roboto-light font-light tracking-wider">
        Analyze your subscription ecosystem for cost optimization and risk management.
      </p>
      <SignupForm />
    </article>
  </div>
);

export default HeroContent;
