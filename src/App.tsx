import { useState } from "react"
import { Header } from "./components/Header"
import { Task } from "./components/Task"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { v4 as uuidv4 } from 'uuid'
import { 
  Wrapper, 
  Main, 
  TaskSection,
  TaskInput 
} from "./App.styles"

interface Tasks {
  id: string,
  description : string
}

export function App() {
  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState<Tasks[]>([
    
  ])

  function handleAddNewTask() {
    if(taskInput.trim() !== "") {
      const newTask: Tasks = {
        id: uuidv4(),
        description: taskInput
      }

      setTasks([...tasks, newTask])
      setTaskInput("")
    }
  }

  function handleDeleteTask(id: string) {
    const updateTasks = tasks.filter(task => task.id !== id)
    setTasks(updateTasks)
  }

  return (
    <Wrapper>
      <Header />
      <Main>
        <TaskInput>
          <input 
            placeholder="Adicione uma nova tarefa"
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
          />

          <button type="submit" onClick={handleAddNewTask}>
            Criar
            <AiOutlinePlusCircle size={20} />
          </button>
        </TaskInput>

        <TaskSection>
          <div className="task-counter">
            <div className="task-counter-created">
              <strong>Tarefas criadas <span>5</span></strong>
            </div>

            <div className="task-counter-completed">
              <strong>Concluídas <span>2 de 5</span></strong>
            </div>
          </div>

          {
            tasks.map(task => {
              return (
                <Task 
                  key={task.id}
                  description={task.description}
                  onDelete={() => handleDeleteTask(task.id)}
                />
              )
            })
          }

        </TaskSection>
      </Main>
    </Wrapper>
  )
}

