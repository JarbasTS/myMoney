import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de website</td>
            <td className="deposit">R$1.300</td>
            <td>Desenvolvimento</td>
            <td>18/01/2023</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>Casa</td>
            <td>29/01/2023</td>
          </tr>
          <tr>
            <td className="title">Apostas esportivas</td>
            <td className="deposit">R$13.000</td>
            <td>Investimentos</td>
            <td>13/02/2023</td>
          </tr>
          <tr>
            <td className="title">Jogo do bicho</td>
            <td className="deposit">R$7.500</td>
            <td>Investimentos</td>
            <td>07/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
