import { Link } from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import {TiSocialInstagram, TiSocialFacebook, TiSocialTwitter} from 'react-icons/ti';
import { IoFlowerOutline } from "react-icons/io5";

import './Footer.css';

const Footer = () => {
    return (
        <Navbar fixed="bottom" className="footer">
            <NavbarBrand href="#top">
                <h3>Mohala <IoFlowerOutline /></h3>
            </NavbarBrand>
            <div>
                <Link to="/">
                    <TiSocialInstagram className="social-media" />
                </Link>
                <Link to="/">
                    <TiSocialFacebook className="social-media" />
                </Link>
                <Link to="/">
                    <TiSocialTwitter className="social-media" />
                </Link>
            </div>
        </Navbar>
    );
};

export default Footer;