import icon from '../../assets/img/Platinum.png';
import ZapLink from '../ZapLink';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="platinum-logo-container">
                <img src={icon} alt="Platinum" />
            </div>
            <div className='platinum-zaplink'>
                <ZapLink />
            </div>
        </header>
    )
}

export default Header;
