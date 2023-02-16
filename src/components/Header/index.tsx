import logoImg from '../../assets/$.svg';
import { Container, Content, Logo } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="My money" />
          <h1>Minha grana</h1>
        </Logo>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
