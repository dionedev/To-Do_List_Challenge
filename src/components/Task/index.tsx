import { useState } from "react";
import { TbTrash } from "react-icons/tb"
import { Container } from "./styles";

interface TaskProps {
  description: string
}

export function Task({ description }: TaskProps) {
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

      <button>
        <TbTrash size={18} />
      </button>
    </Container>
  )
}