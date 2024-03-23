import { ordersMock as orders } from "../../mocks/orders";
import OrdersBoard from "../OrdersBoard";

import { Container } from "./styles";

export default function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🤫"
        title="Fila de epsera"
        orders={orders}
      />
      <OrdersBoard
        icon="🦕"
        title="Fila de espera!"
        orders={[]}
      />
      <OrdersBoard
        icon="🐜"
        title="Entregue"
        orders={[]}
      />
    </Container>
  )
}
