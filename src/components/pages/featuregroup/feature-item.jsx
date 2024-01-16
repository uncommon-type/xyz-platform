import clsx from 'clsx';
import PropTypes from 'prop-types';

import { poppinsLight, robotoLight } from 'styles/fonts/fonts';

const baseClasses = 'absolute left-[21%] bottom-[min(3.5rem,15vh)] -translate-x-[50%] rounded-lg';

const FeatureItem = ({ title = '', subtitle = '', content = '', className = '' }) => (
  <li className="card flow flex flex-col w-[min(100%,21.125rem)]">
    <div className="card__stats flow offset relative">
      <h2
        className={`relative ${poppinsLight.className} text-3xl tracking-tightest lining-nums proportional-nums bg-medium-gradient text-transparent bg-clip-text`}
      >
        {title}
      </h2>
      <span className={clsx(baseClasses, className)} />
      <p className={`text-xl ${robotoLight.className} leading-4.5 tracking-widest`}>{subtitle}</p>
    </div>

    <div className="card__details flow flex flex-col flex-grow">
      <hr className="divider m-[0] w-full max-w-[none] translate-y-[none] translate-x-[none] border-0 border-t border-y-[0.0625rem] border-grey-90/10" />
      <p
        className={`flex items-start text-grey-94 ${robotoLight.className} text-md leading-snug tracking-wide`}
      >
        {content}
      </p>
    </div>
  </li>
);

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default FeatureItem;
