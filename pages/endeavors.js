import Header from '../components/header'
import Footer from '../components/footer'
import CustomHead from '../components/newHeadAllPages';
import { NextSeo } from 'next-seo';
import EndeavorTray from '../components/endeavor-tray'

export default () => (
    <>
        <CustomHead />
        <NextSeo
            title="MISSION | Carbonology"
            description="Welcome to the creator's collective."
            canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'ENDEAVORS | Carbonology',
                description: 'Door number 3 or Door number 2?',
                images: [
                {
                    url: 'https://carbonology.now.sh/mission_carbonology.jpg',
                    width: 1053,
                    height: 700,
                    alt: 'Endeavors, Carbonology',
                }
                ],
                site_name: 'Endeavors',
            }}
            twitter={{
                handle: '@carbnology',
                site: '@site',
                cardType: 'summary_large_image',
                image: 'https://carbonology.now.sh/mission_carbonology.jpg'
            }}
        />
        <Header />
        <main>
            <EndeavorTray className="endeavor-tray--no-top-border" />
        </main>
        <Footer />
    </>
);
