import { Header } from "./components/Header"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Wrapper, Container } from "./App.styles"
import { Input } from "./components/Input"

export function App() {
  return (
    <Wrapper>
      <Header />

      <Container>
        <Input />
        <section>
          <div>
            <p>Tarefas criadas 5</p>

            <div>
              <p>Concluídas 2 de 5</p>
            </div>
          </div>

          <div>
            <input type="checkbox" />
            <p>Fazer o desafio To-Do</p>
            <button>
              
              Apagar
            </button>
          </div>
        </section>
      </Container>
    </Wrapper>
  )
}

