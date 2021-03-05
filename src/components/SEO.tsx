import { NextSeo } from 'next-seo';

const Page = () => (
  <>
    <NextSeo
      title="Moveit"
      description="Feito na NLW 4, moveit é aplicação no estilo promodoro"
      openGraph={{
        url: 'https://www.henri.host/',
        title: 'Moveit',
        description: 'Melhore sua produtividade com desafios que melhoraram sua vida.',
        images: [
          {
            url: 'https://github.com/martins-rafael/moveIt/blob/main/.github/cover.png',
            width: 800,
            height: 600,
            alt: 'Imagem moveit ',
          },
          {
            url: 'https://github.com/martins-rafael/moveIt/blob/main/.github/cover.png',
            width: 900,
            height: 800,
            alt: 'Imagem moveit',
          },
        ],
        site_name: 'Moveit',
      }}
      twitter={{
        handle: '@henri-soft',
        site: '@henri-soft',
        cardType: 'summary_large_image',
      }}
    />
    <p>SEO Added to Page</p>
  </>
);

export default Page;