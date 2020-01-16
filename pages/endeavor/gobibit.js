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
            pageTitle="GOBIBIT"
            description="A citation generator built for students, by students."
            img="https://carbonology.now.sh/hottubLogo.jpg"
        />
        <Header />
        <main className="wrap endeavor-page">
          <h1 className="endeavor-page__endeavor-text">ENDEAVOR:</h1>
          <Image lazy className="endeavor-page__img" src="/images/gobibit/banner.png" alt="Gobibit" />
          <div className="endeavor-page__tray">
            <div className="endeavor-page__status">
              <p className="endeavor-page__status-text">STATUS:</p>
              <p className="endeavor-page__status-label endeavor-page__status-label--inactive">INACTIVE</p>
            </div>
            <OutLink className="endeavor-page__go-to c__btn" href="http://www.gobibit.com">VIEW</OutLink>
            <p className="endeavor-page__start">LAUNCHED: AUGUST 2017</p>
          </div>
          <div className="endeavor-page__info-section">
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">DESCRIPTION</h2>
              <p className="c__copy endeavor-page__copy">
                goBibit is a citation generator designed to parse links and easily deliver MLA, APA, or Chicago citations.
                As the first endeavor in the Collective, goBibit was our first time learning about building a consumer service from scratch, addressing the need for a simple, ad-free solution for creating citations and bibliographies.
                Working in software proved to be a formiddable challenge, and the spaghetti code proved difficult to maintain and update, leading to its eventual deprecation.
                Still used by few, goBibit lives on at its original domain.
                goBibit taught us many lessons and is a proud addition as it nears the end of its days.
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
