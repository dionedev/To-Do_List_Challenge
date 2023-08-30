import { AiOutlinePlusCircle } from "react-icons/ai";
import { FormContainer } from "./styles";

export function Input() {
  return (
    <FormContainer>
      <input placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        Criar
        <AiOutlinePlusCircle size={20} />
      </button>
    </FormContainer>
  )
}