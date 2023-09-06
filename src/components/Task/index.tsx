import { TbTrash } from "react-icons/tb"
import { Container } from "./styles";
import { useState } from "react";

interface TaskProps {
  description : string,
  onDelete: () => void
}

export function Task({ description, onDelete }: TaskProps) {

  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container checked={isChecked}>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
      />

      <div>
        <p>
          {description}
        </p>
      </div>

      <button onClick={onDelete}>
        <TbTrash size={18} />
      </button>
    </Container>
  )
}