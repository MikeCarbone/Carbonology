import Link from 'next/link';
import Image from '../components/image';

export default (props) => (
    <div id={`${props.id}`} className={`${props.className} endeavor-tray`}>
        <h1 className="endeavor-tray__title">Endeavors</h1>
        <div className="endeavor-tray__tray">
            <div className="endeavor-tray__endeavor">
                <Image lazy className="endeavor-tray__endeavor-img" src="/images/logosEqualSize/plutoLogo.png" alt="Pluto" />
                <Link href="/endeavor/pluto">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <Image lazy className="endeavor-tray__endeavor-img" src="/images/logosEqualSize/carboncollective.png" alt="carbon collective" />
                <Link href="/endeavor/carbon-collective">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <Image lazy className="endeavor-tray__endeavor-img" src="/images/logosEqualSize/hottubLogo.png" alt="Hot tub" />
                <Link href="/endeavor/hottub">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <Image lazy className="endeavor-tray__endeavor-img" src="/images/logosEqualSize/busbuddy.png" alt="Bus Buddy" />
                <Link href="endeavor/bus-buddy">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
            <div className="endeavor-tray__endeavor">
                <Image lazy className="endeavor-tray__endeavor-img" src="/images/logosEqualSize/gobibitLogo.png" alt="goBibit" />
                <Link href="/endeavor/gobibit">
                    <a className="c__text-link endeavor-tray__btn">
                        LEARN MORE
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

// goBibit
// Carbon Collective
// HotTub
// Pluto
// BusBuddy