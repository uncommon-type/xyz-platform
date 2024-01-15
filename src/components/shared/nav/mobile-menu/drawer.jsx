import PropTypes from 'prop-types';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import useEscapeKey from 'hooks/useEscapeKey';

import Button from '../../button/button';

const Drawer = ({ onDismiss, children }) => {
  useEscapeKey(onDismiss);

  return (
    <FocusLock returnFocus>
      <RemoveScroll>
        <div className="fixed z-[1] inset-0">
          <div className="absolute inset-0 bg-black/0.75 backdrop-blur-md animate-fade-in" />
          <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-between w-1/2 max-w-[300px] min-w-[200px] p-8 bg-black animate-slide-in">
            <div className="flex flex-col gap-10">{children}</div>
            <Button
              label="Close"
              size="sm"
              theme="purple"
              className="py-2.5 px-space-2xs"
              aria-label="Close menu"
              onClick={onDismiss}
            />
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
};

Drawer.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Drawer;
