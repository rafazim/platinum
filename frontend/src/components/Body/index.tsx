import contabil from '../../assets/img/contabilidade.jpg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

function PBody() {
    return (
        <body>

            <div className="platinum-container-start">
                <div className="platinum-first">
                    <h1>Platinum Contabil te dá boas-vindas</h1>
                    <h2>A atenção que sua empresa precisa.</h2>
                </div>
                <div className="platinum-second">
                    <img src={contabil} />

                </div>
            </div>



        </body>
    )
}

export default PBody;