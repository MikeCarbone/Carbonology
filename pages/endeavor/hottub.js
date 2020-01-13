import Header from '../../components/header'
import Footer from '../../components/footer'
import CustomHead from '../../components/newHeadAllPages';
import Meta from '../../utils/meta'
import DevProfile from '../../components/dev-profile';

export default () => (
    <>
        <CustomHead />
        <Meta
            pageTitle="HOTTUB"
            description="A collective of powerful minds, products, and resources..."
            img="https://carbonology.now.sh/hottubLogo.jpg"
        />
        <Header />
        <main className="wrap endeavor-page">
          <h1 className="endeavor-page__endeavor-text">ENDEAVOR:</h1>
          <img className="endeavor-page__img" alt="Hot Tub" src="/logosTight/hottubLogo.png" draggable="false" />
          <div className="endeavor-page__tray">
            <div className="endeavor-page__status">
              <p className="endeavor-page__status-text">STATUS:</p>
              <p className="endeavor-page__status-label endeavor-page__status-label--active">ACTIVE</p>
            </div>
            <a className="endeavor-page__go-to c__btn" href="https://hottub.app" target="_blank" rel="noopenner noreferrer">VIEW</a>
            <p className="endeavor-page__start">LAUNCHED: JANUARY 2020</p>
          </div>
          <div className="endeavor-page__media">
            <img className="endeavor-page__media-img" src="/hottub/five.png" alt="" draggable="false" />
            <img className="endeavor-page__media-img" src="/hottub/corner.png" alt="Your location, your feed" draggable="false" />
          </div>
          <div className="endeavor-page__info-section">
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">DESCRIPTION</h2>
              <p className="c__copy endeavor-page__copy">Social media mobile application for iOS, queries unidentified posts based on the user's location.</p>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">COLLABORATORS</h2>
              <div className="endeavor-page__collaborators">
                <DevProfile className="endeavor-page__dev" name="Kevin Carbone" role="Co-founder | Development" imgSrc="/people/kevin.jpg" />
                <DevProfile className="endeavor-page__dev" name="Nick Carbone" role="Co-founder | Creative" imgSrc="/people/nick.jpg" />
                <DevProfile className="endeavor-page__dev" name="Mike Carbone" role="Co-founder | Development" imgSrc="/people/mike.jpg" outlink="https://twitter.com/crbnlgy" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
    </>
);
