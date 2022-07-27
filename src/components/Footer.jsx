import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer #4fc3f7 light-blue lighten-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;