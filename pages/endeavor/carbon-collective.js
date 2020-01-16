import Header from '../../components/header'
import Footer from '../../components/footer'
import CustomHead from '../../components/newHeadAllPages';
import Meta from '../../utils/meta'
import DevProfile from '../../components/dev-profile';
import Image from '../../components/image';
import OutLink from '../../components/out-link';

export default () => (
    <>
        <CustomHead />
        <Meta
            pageTitle="CARBON COLLECTIVE"
            description="Collecting and indexing the best links on the internet."
            img="https://carbonology.now.sh/hottubLogo.jpg"
        />
        <Header />
        <main className="wrap endeavor-page">
          <h1 className="endeavor-page__endeavor-text">ENDEAVOR:</h1>
          <Image lazy className="endeavor-page__img" alt="Carbon Collective" src="/images/logosTight/carboncollective.png" />
          <div className="endeavor-page__tray">
            <div className="endeavor-page__status">
              <p className="endeavor-page__status-text">STATUS:</p>
              <p className="endeavor-page__status-label endeavor-page__status-label--active">ACTIVE</p>
            </div>
            <OutLink className="endeavor-page__go-to c__btn" href="https://www.carboncollective.cc">VIEW</OutLink>
            <p className="endeavor-page__start">LAUNCHED: JULY 2019</p>
          </div>
          <div className="endeavor-page__media">
            <Image lazy className="endeavor-page__media-img" src="/images/carboncollective/squoosh.jpg" alt="" />
            <Image lazy className="endeavor-page__media-img" src="/images/carboncollective/home.jpg" alt="" />
          </div>
          <div className="endeavor-page__info-section">
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">DESCRIPTION</h2>
              <p className="c__copy endeavor-page__copy">
                Predecessor to Carbonology, Carbon Collective was originally created as a playground to experiment with different development technologies.
                The original goal was to create a place where I can easily save, document, and search for the most useful links I would find on the internet.
                Carbon Collective will be deprecated as soon as the platform is migrated to Carbonology.
              </p>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">COLLABORATORS</h2>
              <div className="endeavor-page__collaborators">
                <DevProfile className="endeavor-page__dev" name="Mike Carbone" role="Founder" imgSrc="/images/people/mike.jpg" outlink="https://twitter.com/crbnlgy" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </>
);
