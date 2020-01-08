const Footer = () => (
    <footer className="footer">
      <div className="footer__copy">
        <div className="footer__wrapper">
          <p className="footer__copywrite">© {new Date().getFullYear()} Carbonology&trade;</p>
          <a className="footer__twitter c__link" href="https://twitter.com/crbnlgy" target="_blank" rel="noopener noreferrer">Follow on Twitter</a>
          <p className="footer__love">
            Built with <span role="img" className="emoji" aria-label="love">🔥</span> by <a className="footer__love-link c__text-link" href="https://twitter.com/crbnlgy" target="_blank" rel="noopener noreferrer">Mike Carbone</a>
          </p>
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
