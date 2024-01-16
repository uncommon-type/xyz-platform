import localFont from 'next/font/local';

const roboto = localFont({
  src: './roboto/roboto-regular.woff2',
  weight: '400',
  style: 'normal',
  fallback: ['Arial'],
  declarations: [
    { prop: 'ascent-override', value: '105.32%' },
    { prop: 'descent-override', value: '28.98%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '98.24%' },
  ],
  display: 'swap',
});

const robotoLight = localFont({
  src: './roboto/roboto-light.woff2',
  weight: '300',
  style: 'normal',
  fallback: ['Arial'],
  declarations: [
    { prop: 'ascent-override', value: '107.06%' },
    { prop: 'descent-override', value: '29.45%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '96.65%' },
  ],
  display: 'swap',
});

const robotoMedium = localFont({
  src: './roboto/roboto-medium.woff2',
  weight: '500',
  style: 'normal',
  fallback: ['Arial'],
  declarations: [
    { prop: 'ascent-override', value: '91.62%' },
    { prop: 'descent-override', value: '24.11%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '101.26%' },
  ],
  display: 'swap',
});

const robotoSemibold = localFont({
  src: './roboto/roboto-semibold.woff2',
  weight: '600',
  style: 'normal',
  fallback: ['Arial'],
  declarations: [
    { prop: 'ascent-override', value: '112.84%' },
    { prop: 'descent-override', value: '31.04%' },
    { prop: 'line-gap-override', value: '0%' },
    { prop: 'size-adjust', value: '93.59%' },
  ],
  display: 'swap',
});

const poppins = localFont({
  src: './poppins/poppins-regular.woff2',
  weight: '400',
  style: 'normal',
  fallback: ['Arial'],
  declarations: [
    { prop: 'ascent-override', value: '92.83%' },
    { prop: 'descent-override', value: '30.94%' },
    { prop: 'line-gap-override', value: '8.84%' },
    { prop: 'size-adjust', value: '113.11%' },
  ],
  display: 'swap',
});

const poppinsLight = localFont({
  src: './poppins/poppins-light.woff2',
  weight: '275',
  style: 'normal',
  fallback: ['Arial'],
  declarations: [
    { prop: 'ascent-override', value: '94.89%' },
    { prop: 'descent-override', value: '31.63%' },
    { prop: 'line-gap-override', value: '9.04%' },
    { prop: 'size-adjust', value: '110.66%' },
  ],
  display: 'swap',
});

const poppinsMedium = localFont({
  src: './poppins/poppins-medium.woff2',
  weight: '500',
  style: 'normal',
  fallback: ['Arial'],
  declarations: [
    { prop: 'ascent-override', value: '91.82%' },
    { prop: 'descent-override', value: '30.61%' },
    { prop: 'line-gap-override', value: '8.74%' },
    { prop: 'size-adjust', value: '114.36%' },
  ],
  display: 'swap',
});

export { roboto, robotoLight, robotoMedium, robotoSemibold, poppins, poppinsLight, poppinsMedium };
