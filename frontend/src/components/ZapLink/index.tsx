import icon from '../../assets/img/Logo_whatsapp.png';
import './styles.css';

function ZapLink() {
    return (
        <div className="platinum-zaplink">
            <img src={icon} alt="Contato" />
            <a href="https://api.whatsapp.com/send?phone=5511997126332&text=Platinum%20Contabil"></a>
        </div>
    )
}

export default ZapLink
