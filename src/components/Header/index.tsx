import logoImg from '../../assets/$.svg';
import { Container, Content, Logo } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="My money" />
          <h1>Minha grana</h1>
        </Logo>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}
