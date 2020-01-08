import HeaderTwo from '../components/header_two'
import Footer from '../components/footer'
import CustomHead from '../components/newHeadAllPages';
import { NextSeo } from 'next-seo';
import ShareBar from '../components/share-bar';

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
        <HeaderTwo />
        <main className="article">
            <div className="article__head">
                <img alt="" className="article__img" draggable="false" src="/kids_bw.jpg" />
                <div className="article__head-left wrap">
                    <h1 className="article__title">MISSION</h1>
                    <p className="article__subtitle"><strong>Carbonology</strong> - A collective of powerful minds, products, and resources that strives to understand and optimize the business-building process through creation.</p>
                    <a href="#text" className="article__btn c__btn">READ MORE</a>
                </div>
            </div>
            <div id="text" className="article__text wrap">
                <p className="article__published">Published on January 8th, 2020</p>
                <ShareBar className="article__share-bar" />
                <p className="article__copy c__copy">Each day, someone has a brilliant idea for a new product or service that could solve a problem they’ve encountered. We’ve all had one-- an a-ha! moment that captures our imagination for a while. Most will forget about the idea, many will write it down, some will pursue its creation, and few will succeed.</p>
                <p className="article__copy c__copy">Carbonology’s mission is clear and simple: we are trying to fully understand the process of going from idea to business. With each new endeavor under this collective, we’re trying to reduce the friction of going from that “a-ha!” moment to a profit-making business, and in turn, increase the chance of success for each new endeavor.</p>
                <p className="article__copy c__copy">To be clear, we aren’t here solely to create businesses that succeed. We’re here to learn about <span className="c__copy-italics">the process</span> of creating successful businesses. As a byproduct of this iterative learning experience, we create companies that succeed. The true value of Carbonology won’t be the businesses it produces nor the resources it gathers, but the community it inspires and the documented knowledge it accumulates.</p>
                <p className="article__copy c__copy">Here, we take pride in our failures and the lessons we’ve learned from them. Each failure is a building block that takes us closer to our next success. Without failure, we’d have no concept of what it means to succeed.</p>
                <p className="article__copy c__copy">Hopefully with the creation and development of Carbonology, we’ll inspire a new entrepreneur, maker, or inventor to pursue the creation of their a-ha! moment and join us on the journey to further understand the process of ideating, preparing, and executing the creation of a successful business.</p>
            </div>
        </main>
        <Footer />
    </>
);
