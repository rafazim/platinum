import icon from '../../assets/img/Platinum.png';
import ZapLink from '../ZapLink';
import { BASE_URL } from '../../utils/request';
import insta from '../../assets/img/download.jpg';
import './styles.css';

function Header() {
    return (
        <header>

            <div className="platinum-logo-container">
                <div className="platinum-logo">
                    <img src={icon} alt="Platinum" />
                </div>
                <h1>PLATINUM CONTABILIDADE</h1>
            </div>

            <menu className='platinum-menu'>
                <div className="platinum-menu-inicio">
                    <a href={`${ BASE_URL }/index.html`} target={"_blank"} rel="noopener noreferrer"><text>Início</text></a>
                </div>
            </menu>


            <div className='platinum-social-media'>
                <div className="platinum-social-media-instagram">
                    <a href='https://www.instagram.com/platinumcontabil/' target={"_blank"} rel="noopener noreferrer"><img src={insta} alt="Instagram" /></a>
                </div>
                <div className="platinum-social-media-zaplink">
                    <ZapLink />
                </div>
            </div>

        </header>
    )
}

export default Header;
