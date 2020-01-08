import Header from './header'
import Footer from './footer'
import CustomHead from './newHeadAllPages';
import { NextSeo } from 'next-seo';

export default () => (
    <>
        <CustomHead />
        <NextSeo
            title="MISSION | Carbonology"
            description="Welcome to the creator's collective."
            canonical="https://www.canonical.ie/"
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'DOOR NUMBER 3',
                description: 'Door number 3 or Door number 2?',
                images: [
                {
                    url: 'https://carbonology.now.sh/mission_carbonology.jpg',
                    width: 1053,
                    height: 700,
                    alt: 'Mission, Carbonology',
                }
                ],
                site_name: 'Mission',
            }}
            twitter={{
                handle: '@carbnology',
                site: '@site',
                cardType: 'summary_large_image',
                image: 'https://carbonology.now.sh/mission_carbonology.jpg'
            }}
        />
        <Header />
        <main className="plain-article">
            <div className="plain-article__head">
                <div className="plain-article__head-left wrap">
                    <h1 className="plain-article__title">MISSION</h1>
                    <p className="plain-article__subtitle"><strong>Carbonology</strong> - A collective of powerful minds, products, and resources that strives to understand and optimize the business-building process through creation.</p>
                </div>
                <img alt="" className="plain-article__img" draggable="false" src="/mission_no-text.jpg" />
            </div>
            <div className="plain-article__text wrap">
                <p className="plain-article__copy c__copy">Each day, someone has a brilliant idea for a new product or service that could solve a problem they’ve encountered. We’ve all had one-- an a-ha! moment that captures our imagination for a while. Most will forget about the idea, many will write it down, some will pursue its creation, and few will succeed.</p>
                <p className="plain-article__copy c__copy">We wonder why that filter exists. We have been conducting business since evolving from bartering and trading, yet the process still seems to be unclear. Why do so many fail? Why is creating a business not as formulaic as solving a math equation?</p>
                <p className="plain-article__copy c__copy">Carbonology’s mission is clear and simple: we are trying to fully understand the process of going from idea to business. With each new project under this collective, we’re trying to further understand the process of going from that “a-ha!” moment to a profit-making business.</p>
                <p className="plain-article__copy c__copy">To be clear, we aren’t here to create companies that succeed. We’re here to learn through the process of creating companies. As a byproduct of this iterative learning experience, we create companies that succeed.</p>
                <p className="plain-article__copy c__copy">As a matter of fact, we take pride in our failures and the lessons we’ve learned from them. Each failure is a building block that takes us closer to our next success.</p>
                <p className="plain-article__copy c__copy">Hopefully with the creation and development of Carbonology, we’ll inspire a new entrepreneur, maker, or inventor to pursue the creation of their a-ha! moment and join us on the journey to further understand the process of company-building.</p>
            </div>
        </main>
        <Footer />
    </>
);
