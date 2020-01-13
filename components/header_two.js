import Link from 'next/link';

const HeaderTwo = props => {
    const logoText = (props.dark)
        ?
        (
            <a className="header-two__logo-link">
                <h1 className="header-two__logo-text header-two__logo-text--dark">Carbonology</h1>
            </a>
        )
        :
        (
            <a className="header-two__logo-link">
                <h1 className="header-two__logo-text">Carbonology</h1>
            </a>
        );
    return(
        <>
            <header className="header-two">
                <Link href="/">
                    {logoText}
                </Link>
                <Link href="/">
                    <a className="header-two__return">Home</a>
                </Link>
            </header>
        </>
    )
}

export default HeaderTwo;
