import React, { useState} from 'react';
import List from './components/TodoList';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function App() {

  const [ todolist, setTodoList ] = useState(["Test"])
  const [ text, setText ] = useState([""])
  const onTextChange = ({target: { value }}) => {
    setText(value)
  }

  const AddTask = () => {

    setTodoList([
      ...todolist,
      text
    ])
    // clear text
    setText("")
  }

  const removeTodo = (index) => {
    let todo = [...todolist]
    todo.splice(index, 1)
    setTodoList(todo)
  }

  return (

    <Container>
      <h1> Todo App</h1>
      <div>
        <input type="text" value={ text } onChange={ onTextChange } />
        <button onClick={ AddTask }>Add task</button>
      </div>
      <List todolist={todolist} removeTodo={removeTodo} />
    </Container>
  )
}

export default App;
