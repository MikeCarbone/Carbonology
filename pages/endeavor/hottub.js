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
            pageTitle="HOTTUB"
            description="Discover your location. Unidentified posts based on your location."
            img="https://carbonology.now.sh/hottubLogo.jpg"
        />
        <Header />
        <main className="wrap endeavor-page">
          <h1 className="endeavor-page__endeavor-text">ENDEAVOR:</h1>
          <Image lazy className="endeavor-page__img" alt="Hot Tub" src="/images/logosTight/hottubLogo.png" />
          <div className="endeavor-page__tray">
            <div className="endeavor-page__status">
              <p className="endeavor-page__status-text">STATUS:</p>
              <p className="endeavor-page__status-label endeavor-page__status-label--active">ACTIVE</p>
            </div>
            <OutLink className="endeavor-page__go-to c__btn" href="https://hottub.app">VIEW</OutLink>
            <p className="endeavor-page__start">LAUNCHED: JANUARY 2020</p>
          </div>
          <div className="endeavor-page__media">
            <Image lazy className="endeavor-page__media-img" src="/images/hottub/five.jpg" alt="" draggable="false" />
            <Image lazy className="endeavor-page__media-img" src="/images/hottub/corner.jpg" alt="Your location, your feed" draggable="false" />
          </div>
          <div className="endeavor-page__info-section">
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">DESCRIPTION</h2>
              <p className="c__copy endeavor-page__copy">Social media mobile application for iOS, queries unidentified posts based on the user's location.</p>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">COLLABORATORS</h2>
              <div className="endeavor-page__collaborators">
                <DevProfile className="endeavor-page__dev" name="Kevin Carbone" role="Co-founder | Development" imgSrc="/images/people/kevin.jpg" outlink="#" />
                <DevProfile className="endeavor-page__dev" name="Mike Carbone" role="Co-founder | Development" imgSrc="/images/people/mike.jpg" outlink="https://twitter.com/crbnlgy" />
                <DevProfile className="endeavor-page__dev" name="Nick Carbone" role="Co-founder | Creative" imgSrc="/images/people/nick.jpg" outlink="#" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </>
);
