import Header from '../../components/header'
import Footer from '../../components/footer'
import CustomHead from '../../components/newHeadAllPages';
import ShareBar from '../../components/share-bar';
import Meta from '../../utils/meta'


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
          <img className="endeavor-page__img" alt="Hot Tub" src="/logosTight/carboncollective.png" draggable="false" />
          <div className="endeavor-page__tray">
            <div className="endeavor-page__status">
              <p className="endeavor-page__status-text">STATUS:</p>
              <p className="endeavor-page__status-label endeavor-page__status-label--active">ACTIVE</p>
            </div>
            <a className="endeavor-page__go-to c__btn" href="https://hottub.app" target="_blank" rel="noopenner noreferrer">VIEW</a>
            <p className="endeavor-page__start">LAUNCHED: JANUARY 2020</p>
          </div>
          <div className="endeavor-page__info-block">
            <h2>DESCRIPTION</h2>
            <h2>COLLABORATORS</h2>
            <h2>LESSONS</h2>
            <p></p>
          </div>
        </main>
        <Footer />
    </>
);
