import PropTypes from 'prop-types';

import Header from 'components/shared/header';

import 'styles/main.css';

import { roboto, poppins } from '../styles/fonts/fonts';

const RootLayout = ({ children }) => (
  <html lang="en" className={`${roboto.className} ${poppins.className}`}>
    <body className={`${roboto.className}`}>
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
