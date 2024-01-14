/* eslint-disable camelcase */
import Header from 'components/shared/header';

import 'styles/global.css';

import {
  roboto,
  roboto_light,
  roboto_medium,
  roboto_semibold,
  poppins,
  poppins_light,
  poppins_medium,
} from '../styles/fonts/fonts';

// eslint-disable-next-line react/prop-types
const RootLayout = ({ children }) => (
  <html
    lang="en"
    className={`${roboto.variable} ${roboto_light.variable} ${roboto_medium.variable} ${roboto_semibold.variable} ${poppins.variable} ${poppins_light.variable} ${poppins_medium.variable}`}
  >
    <body>
      <Header />
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
