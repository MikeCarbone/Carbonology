import Header from '../components/header'
import Footer from '../components/footer'
import CustomHead from '../components/newHeadAllPages';
import EndeavorTray from '../components/endeavor-tray'
import Meta from '../utils/meta'

export default () => (
    <>
        <CustomHead />
        <Meta
            pageTitle="Mission"
            description=""
            img=""
        />
        <Header />
        <main>
            <EndeavorTray className="endeavor-tray--no-top-border" />
        </main>
        <Footer />
    </>
);
