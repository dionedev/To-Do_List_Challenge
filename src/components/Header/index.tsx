import Logo from "../../assets/rocket.svg"
import { Container } from "./styles"

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo da aplicação com imagem de um foguete" />
      <strong>to</strong><strong>do</strong>
    </Container>
  )
}