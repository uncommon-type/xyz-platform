/* eslint-disable camelcase */
import PropTypes from 'prop-types';

import Header from 'components/shared/header';

import 'styles/main.css';

import {
  roboto,
  roboto_light,
  roboto_medium,
  roboto_semibold,
  poppins,
  poppins_light,
  poppins_medium,
} from '../styles/fonts/fonts';

const RootLayout = ({ children }) => (
  <html
    lang="en"
    className={`${roboto.variable} ${roboto_light.variable} ${roboto_medium.variable} ${roboto_semibold.variable} ${poppins.variable} ${poppins_light.variable} ${poppins_medium.variable}`}
  >
    <body>
      <div className="container">
        <Header />
        <main className="last:pb-space-xl">{children}</main>
      </div>
    </body>
  </html>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
