import { ordersMock as orders } from "../../mocks/orders";
import OrdersBoard from "../OrdersBoard";

import { Container } from "./styles";

export default function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparo"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto"
        orders={[]}
      />
    </Container>
  )
}
