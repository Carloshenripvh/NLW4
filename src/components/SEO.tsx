

const title = 'Moveit';

const description = 'Moveit, aumentando sua produtividade e mantendo sua saúde.';

const SEO = {
  title,
  description,
  canonical: 'https://henri.host/',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://henri.host/',
    title,
    description,
    images: [
      {
        url: 'https://imgbox.com/GC2HArVI',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@henri_soft',
    site: '@henri-soft',
    cardType: 'summary_large_image',
  },
};

export default SEO;