/* eslint-disable camelcase */
import localFont from 'next/font/local';

const roboto = localFont({
  src: './roboto/roboto-regular.woff2',
  weight: '400',
  style: 'normal',
  fallback: ['Arial'],
  variable: '--font-roboto',
  declarations: [
    { prop: 'ascent-override', value: '105.32%' },
    { prop: 'descent-override', value: '28.98%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '98.24%' },
  ],
  fontDisplay: 'swap',
});

const roboto_light = localFont({
  src: './roboto/roboto-light.woff2',
  weight: '300',
  style: 'normal',
  fallback: ['Arial'],
  variable: '--font-roboto-light',
  declarations: [
    { prop: 'ascent-override', value: '107.06%' },
    { prop: 'descent-override', value: '29.45%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '96.65%' },
  ],
  fontDisplay: 'swap',
});

const roboto_medium = localFont({
  src: './roboto/roboto-medium.woff2',
  weight: '500',
  style: 'normal',
  fallback: ['Arial'],
  variable: '--font-roboto-medium',
  declarations: [
    { prop: 'ascent-override', value: '91.62%' },
    { prop: 'descent-override', value: '24.11%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '101.26%' },
  ],
  fontDisplay: 'swap',
});

const roboto_semibold = localFont({
  src: './roboto/roboto-semibold.woff2',
  weight: '600',
  style: 'normal',
  fallback: ['Arial'],
  variable: '--font-roboto-semibold',
  declarations: [
    { prop: 'ascent-override', value: '112.84%' },
    { prop: 'descent-override', value: '31.04%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '93.59%' },
  ],
  fontDisplay: 'swap',
});

const poppins = localFont({
  src: './poppins/poppins-regular.woff2',
  weight: '400',
  style: 'normal',
  fallback: 'Arial',
  variable: '--font-poppins',
  declarations: [
    { prop: 'ascent-override', value: '92.83%' },
    { prop: 'descent-override', value: '30.94%' },
    { prop: 'line-gap-override', value: '8.84%' },
    { prop: 'size-adjust', value: '113.11%' },
  ],
  fontDisplay: 'swap',
});

const poppins_light = localFont({
  src: './poppins/poppins-light.woff2',
  weight: '275',
  style: 'normal',
  fallback: ['Arial'],
  variable: '--font-poppins-light',
  declarations: [
    { prop: 'ascent-override', value: '94.89%' },
    { prop: 'descent-override', value: '31.63%' },
    { prop: 'line-gap-override', value: '9.04%' },
    { prop: 'size-adjust', value: '110.66%' },
  ],
  fontDisplay: 'swap',
});

const poppins_medium = localFont({
  src: './poppins/poppins-medium.woff2',
  weight: '500',
  style: 'normal',
  fallback: ['Arial'],
  variable: '--font-poppins-medium',
  declarations: [
    { prop: 'ascent-override', value: '91.82%' },
    { prop: 'descent-override', value: '30.61%' },
    { prop: 'line-gap-override', value: '8.74%' },
    { prop: 'size-adjust', value: '114.36%' },
  ],
  fontDisplay: 'swap',
});

export {
  roboto,
  roboto_light,
  roboto_medium,
  roboto_semibold,
  poppins,
  poppins_light,
  poppins_medium,
};
