import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import pagination from '../../../src/images/pagination.png'


const Pagination = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Button onClick={() => navigate('/')}>Back to HomePage</Button>
      <img className='mainImg' src={pagination} />
      <Content>Pagination</Content>
    </Box>
  )
}

export default Pagination

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
