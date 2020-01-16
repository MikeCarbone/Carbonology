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
            pageTitle="PLUTO"
            description="A social network committed to meaningful relationships."
            img="https://carbonology.now.sh/hottubLogo.jpg"
        />
        <Header />
        <main className="wrap endeavor-page">
          <h1 className="endeavor-page__endeavor-text">ENDEAVOR:</h1>
          <Image lazy className="endeavor-page__img" alt="Pluto" src="/images/logosTight/plutoLogo.png" />
          <div className="endeavor-page__tray">
            <div className="endeavor-page__status">
              <p className="endeavor-page__status-text">STATUS:</p>
              <p className="endeavor-page__status-label endeavor-page__status-label--active">IN DEVELOPMENT</p>
            </div>
            <OutLink className="endeavor-page__go-to endeavor-page__go-to--hidden c__btn" href="https://www.plutosocial.io">VIEW</OutLink>
            <p className="endeavor-page__start">NOT YET LAUNCHED</p>
          </div>
          <div className="endeavor-page__info-section">
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">DESCRIPTION</h2>
              <p className="c__copy endeavor-page__copy">
                Pluto is a social network focused on fostering meaningful connections.
                Dissuaded by the toxicity, mental unhealthiness, and overwhelming sense of loneliness current networks instill, Pluto looks to bring social networking back to its roots, away from social networks' existing state and towards a secure, positive space to connect with those close to you.
                It's time to focus on what matters most: you.
                As the team's senior project at Drexel University, Pluto plans to launch by Spring 2020.
              </p>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">COLLABORATORS</h2>
              <div className="endeavor-page__collaborators">
                <DevProfile className="endeavor-page__dev" name="Sarah Bray" role="Project Manager" imgSrc="/images/people/sarah.png" outlink="#" />
                <DevProfile className="endeavor-page__dev" name="Mike Carbone" role="Back-End Developer" imgSrc="/images/people/mike.jpg" outlink="https://twitter.com/crbnlgy" />
                <DevProfile className="endeavor-page__dev" name="Veronica Lin" role="UX Designer" imgSrc="/images/people/veronica.png" outlink="#" />
                <DevProfile className="endeavor-page__dev" name="Rob Nashed" role="UI Designer" imgSrc="/images/people/rob.png" outlink="#" />
                <DevProfile className="endeavor-page__dev" name="Woo Sung" role="Design Technologist" imgSrc="/images/people/woo.png" outlink="https://www.linkedin.com/in/wooyoung-song-661345136/" />
                <DevProfile className="endeavor-page__dev" name="Clay Tercek" role="Front-End Developer" imgSrc="/images/people/clay.png" outlink="#" />
              </div>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">RELATED LINKS</h2>
              <OutLink className="c__text-link endeavor-page__out-link" href="https://drexel-pluto.github.io/contract-book/#/">CONTRACT BOOK</OutLink>
              <OutLink className="c__text-link endeavor-page__out-link" href="https://www.pluto417.com">USER RESEARCH</OutLink>
            </div>
          </div>
        </main>
        <Footer />
    </>
);
