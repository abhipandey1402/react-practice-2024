import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import signupForm from '../../../src/images/signupForm.png'
import { toast } from 'react-toastify'


const SignupForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSignup = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      toast.warning("Please fill all fields", 2000);
      return;
    }

    if (password !== confirmPassword) {
      toast.warning("Password and confirm Password should be same", 2000);
      return;
    }

    toast.success("Signed Up Successfully");
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <Box>
      <Button onClick={() => navigate('/')}>Back to HomePage</Button>
      <img className='mainImg' src={signupForm} />
      <Content>
        <SignupFormBox onSubmit={(e) => handleSignup(e)}>
          <h2 className='title'>Sign up Form: 11 mins</h2>

          <input placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} className='input' />
          <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='input' />
          <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' />
          <input placeholder='Confirm Password' type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='input' />

          <button className='btn'>Sign up</button>
        </SignupFormBox>
      </Content>
    </Box>
  )
}

export default SignupForm

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

const SignupFormBox = styled.form`
display: flex;
flex-direction: column;
width: 500px;
align-items: center;
gap: 1rem;

.title {
font-size: 1rem;
font-weight: 600;

}

.input {
width: 75%;
padding: 0.5rem 0.75rem;
border: none;
outline: none;
border-radius: 0.25rem;
font-size: 1rem;

}

.btn {
padding: 0.5rem 0.75rem;
border: none;
border-radius: 0.25rem;
background-color: white;
color: var(--backgroundColor);
font-size: 1rem;
font-weight: 600;
cursor: pointer;
}

`