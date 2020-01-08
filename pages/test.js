import { NextSeo } from 'next-seo';
 
export default () => (
  <>
    <NextSeo
      title="DOOR NUMBER 3"
      description="Door number 3 or Door number 2?"
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: 'DOOR NUMBER 3',
        description: 'Door number 3 or Door number 2?',
        images: [
          {
            url: 'https://source.unsplash.com/800x600',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://source.unsplash.com/900x800',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://source.unsplash.com/900x800' },
          { url: 'https://source.unsplash.com/900x800' },
        ],
        site_name: 'A test',
      }}
      twitter={{
        handle: '@carbnology',
        site: '@site',
        cardType: 'summary_large_image',
        image: 'https://source.unsplash.com/900x800'
      }}
    />
    <p>SEO Added to Page</p>
  </>
);
