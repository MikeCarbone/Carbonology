import Link from 'next/link';

const Header = () => (
    <>
        <header className="header">
            <Link href="/">
                <a className="header__logo-link">
                    <h1 className="header__logo-text">Carbonology</h1>
                </a>
            </Link>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                        <Link href="/">
                            <a className="header__nav-list-link">Home</a>
                        </Link>
                    </li>
                    <li className="header__nav-list-item">
                        <Link href="/mission">
                            <a className="header__nav-list-link">Mission</a>
                        </Link>
                    </li>
                    <li className="header__nav-list-item">
                        <Link href="/endeavors">
                            <a className="header__nav-list-link">Endeavors</a>
                        </Link>
                    </li>
                    <li className="header__nav-list-item">
                        <Link href="/mission">
                            <a className="header__nav-list-link">Links</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
);

export default Header;
