import Link from 'next/link';

const HeaderTwo = props => (
    <>
        <header className="header-two">
            <Link href="/">
                <a className="header-two__logo-link">
                    <h1 className="header-two__logo-text">Carbonology</h1>
                </a>
            </Link>
            <Link href="/">
                <a className="header-two__return">Home</a>
            </Link>
        </header>
    </>
);

export default HeaderTwo;
