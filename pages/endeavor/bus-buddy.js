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
            pageTitle="BUS BUDDY"
            description="An Internet of Things solution to give parent's peace of mind with their child's morning commute to school."
            img="https://carbonology.now.sh/hottubLogo.jpg"
        />
        <Header />
        <main className="wrap endeavor-page">
          <h1 className="endeavor-page__endeavor-text">ENDEAVOR:</h1>
          <Image lazy className="endeavor-page__img" src="/images/logosTight/busbuddy.png" alt="Bus Buddy" />
          <div className="endeavor-page__tray">
            <div className="endeavor-page__status">
              <p className="endeavor-page__status-text">STATUS:</p>
              <p className="endeavor-page__status-label endeavor-page__status-label--inactive">INACTIVE</p>
            </div>
            <OutLink className="endeavor-page__go-to endeavor-page__go-to--hiddent c__btn" href="">VIEW</OutLink>
            <p className="endeavor-page__start">LAUNCHED: MARCH 2019</p>
          </div>
          <div className="endeavor-page__media">
            <Image lazy className="endeavor-page__media-img" src="/images/busbuddy/busbuddy-team.jpg" alt="" draggable="false" />
            <Image lazy className="endeavor-page__media-img" src="/images/busbuddy/banner.jpg" alt="Your location, your feed" draggable="false" />
          </div>
          <div className="endeavor-page__info-section">
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">DESCRIPTION</h2>
              <p className="c__copy endeavor-page__copy">
                Bus Buddy is an interactive mobile web-app designed for parents with elementary school level students to help battle against the long morning school commute.
                With this system, students will no longer have to wait at their bus stop, unaware of their bus’ arrival.
              </p>
              <p className="c__copy endeavor-page__copy">
                Bus Buddy is a hardware & software solution that uses an Internet of Things (IoT) approach to eliminate elementary school transportation uncertainties.
                The system works by using Raspberry PI technology with GPS and RFID sensors which allows students to scan their school IDs as they board their bus, allowing their parents to see where their bus is at any given morning or afternoon via the Bus Buddy app.
                Bus Buddy also sends parents SMS notifications when students have safely hopped on the bus, and when their bus is running late, a notification is sent with the updated ETA.
                A live map view with the Bus’ location is also available on the Bus Buddy app.
                Bus Buddy offers that peace of mind that parents are looking for while also alleviating frustration for students.
              </p>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">AWARDS</h2>
              <div className="endeavor-page__awards">
                <div className="endeavor-page__award">
                  <Image className="endeavor-page__award-img" src="/images/busbuddy/muse-silver.png" />
                  <OutLink className="endeavor-page__award-link c__text-link" href="https://museaward.com/winner-info.php?id=2276">VIEW AWARD</OutLink>
                </div>
                <div className="endeavor-page__award">
                  <Image className="endeavor-page__award-img" src="/images/busbuddy/gdusa.jpg" />
                </div>
              </div>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">COLLABORATORS</h2>
              <div className="endeavor-page__collaborators">
                <DevProfile className="endeavor-page__dev" name="Sarah Bray" role="UX/UI Research | Design" imgSrc="/images/people/sarah.png" outlink="https://www.linkedin.com/in/sarah-bray-0b910b11b/" />
                <DevProfile className="endeavor-page__dev" name="Mike Carbone" role="Project Manager | Lead Developer" imgSrc="/images/people/mike.jpg" outlink="https://twitter.com/crbnlgy" />
                <DevProfile className="endeavor-page__dev" name="Yuang Li" role="Developer | UI Designer" imgSrc="/images/people/king.png" outlink="#" />
                <DevProfile className="endeavor-page__dev" name="Craig Melendes" role="Content Manager | UX Research" imgSrc="/images/people/king.png" outlink="#" />
              </div>
            </div>
            <div className="endeavor-page__info-block">
              <h2 className="endeavor-page__text-title">RELATED LINKS</h2>
              <a className="c__text-link endeavor-page__out-link" href="http://digm.drexel.edu/idm/2019/03/20/bus-buddy/" target="_blank" rel="noopener noreferrer">CASE STUDY</a>
            </div>
          </div>
        </main>
        <Footer />
    </>
);
