import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="Entradas" />
        </header>
        <strong>R$2800,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={saidasImg} alt="Saidas" />
        </header>
        <strong>- R$800,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$2000,00</strong>
      </div>
    </Container>
  );
}
