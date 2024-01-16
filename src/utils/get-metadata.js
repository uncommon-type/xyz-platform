const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
const SITE_NAME = 'XYZ platform';
const DEFAULT_IMAGE_PATH = '/images/social-previews/social-share.png';

const getMetadata = ({
  title,
  description,
  robotsNoindex,
  pathname,
  imagePath = DEFAULT_IMAGE_PATH,
  type = 'website',
} = {}) => {
  const canonicalUrl = SITE_URL + pathname;
  const imageUrl = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;
  const robots = robotsNoindex === 'noindex' ? { index: false } : null;

  return {
    title: title || `We are ${SITE_NAME}`,
    manifest: `${SITE_URL}/manifest.webmanifest`,
    description,
    robots,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(SITE_URL),
    icons: {
      shortcut: ['/images/favicon/icon.ico'],
      apple: [
        {
          url: '/images/favicon/favicon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          url: '/images/favicon/favicon-72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          url: '/images/favicon/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          url: '/images/favicon/favicon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          url: '/images/favicon/favicon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          url: '/images/favicon/favicon-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          url: '/images/favicon-384x384.png',
          sizes: '384x384',
          type: 'image/png',
        },

        {
          url: '/images/favicon/favicon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    openGraph: {
      type,
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: 'XYZ platform',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
};

export default getMetadata;
