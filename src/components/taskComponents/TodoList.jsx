import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import todoList from '../../../src/images/todoList.png'
import { toast } from 'react-toastify'


const TodoList = () => {
  const navigate = useNavigate();
  const [taskValue, setTaskValue] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setTaskValue(e.target.value);
  }

  const handleAddToList = (value) => {
    if(!value){
      toast.warning("Please input task value", 2000);
      return;
    }
    setTaskList([...taskList, value]);
    setTaskValue('');
  }

  return (
    <Box>
      <Button onClick={() => navigate('/')}>Back to HomePage</Button>
      <img className='mainImg' src={todoList} />
      <Content>
        <TodoBox>
          <Title>Todo List: 18 mins</Title>
          <input value={taskValue} onChange={(e) => handleTextChange(e)} className='input' />
          <button className='btn' onClick={() => handleAddToList(taskValue)}>Add Task</button>

          <ul>
            {taskList?.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
        </TodoBox>
      </Content>
    </Box>
  )
}

export default TodoList

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 2rem;
width: 95%;
min-height: 100vh;
padding: 1rem 2.5%;
background-color: var(--backgroundColor);
color: var(--color);


.mainImg {
width: 200px;
height: 100px;
}
`
const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;

`

const Button = styled.button`
  background: linear-gradient(to bottom right, #6366F1, #A78BFA, #EC4899);
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background 0.3s;

  &:hover {
  background: linear-gradient(to bottom right, #EC4899, #A78BFA, #6366F1);
  }
`;


const TodoBox = styled.div`
display: flex;
flex-direction: column;
width: 500px;
align-items: center;
gap: 0.5rem;
border: 0.1rem solid white;
border-radius: 0.5rem;

.input {
width: 75%;
padding: 0.25rem 0.5rem;
margin-bottom: 1rem;
border: none;
outline: none;
border-radius: 0.25rem;
}

ul {
display: flex;
flex-direction: column;
width: 85%;
align-items: flex-start;
box-sizing: border-box;
}

.btn {
font-size: 0.9rem;
font-weight: 600;
color: var(--backgroundColor);
background-color: white;
border: none;
border-radius: 0.5rem;
padding: 0.5rem 0.75rem;
cursor: pointer;

}

`

const Title = styled.h3`
font-size: 1.25rem;
font-weight: 600;



`