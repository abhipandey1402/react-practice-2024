import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import temperatureConverter from '../../../src/images/temperatureConverter.png'


const TemperatureConverter = () => {
  const navigate = useNavigate();
  const [inputTempType, setInputTempType] = useState('f');
  const [inputTempValue, setInputTempValue] = useState(0);
  const [outputTempValue, setOutputTempValue] = useState('');

  useEffect(() => {
    handleCovert();
  }, [inputTempType, inputTempValue])

  const handleCovert = () => {
    if (inputTempType === "f") {
      let outputTemp = ((inputTempValue - 32) * (5 / 9));
      setOutputTempValue(outputTemp.toFixed(2));
    } else {
      let outputTemp = inputTempValue - 273.15;
      setOutputTempValue(outputTemp.toFixed(2));
    }
  }

  const handleChangeInput = (e) => {
    setInputTempValue(e.target.value);
  }

  const handleChangeType = (e) => {
    setInputTempType(e.target.value);
  }

  return (
    <Box>
      <Button onClick={() => navigate('/')}>Back to HomePage</Button>
      <img className='mainImg' src={temperatureConverter} />
      <Content>
        <TempBox>
          <h2 className='title'>Temperature converter: 21 mins</h2>
          <div className='topBox'>
            <label>
              Degrees
              <input type='number' value={inputTempValue} onChange={(e) => handleChangeInput(e)} />
            </label>
            <label>
              Type
              <select onChange={(e) => handleChangeType(e)}>
                <option value='f'>Ferhenheit</option>
                <option value='k'>Kelvin</option>
              </select>
            </label>
          </div>
          <div className='bottomBox'>
            <label>
              Result
              <span className='result'>{outputTempValue} ℃</span>
            </label>
          </div>
        </TempBox>
      </Content>
    </Box>
  )
}

export default TemperatureConverter

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

const TempBox = styled.div`
display: flex;
flex-direction: column;
width: 500px;
border: 0.1rem solid white;
border-radius: 0.5rem;
padding: 2rem 2rem;
box-sizing: border-box;
align-items: center;
gap: 1rem;

.title {
font-size: 1rem;
font-weight: 600;
}

.topBox {
display: flex;
width: 85%;
justify-content: space-between;

}

.bottomBox {
display: flex;
width: 85%;
align-items: flex-start;


.result {
font-size: 1rem;
font-weight: 600;
}
}

label {
display: flex;
flex-direction: column;
gap: 0.5rem;
font-size: 0.9rem;
font-weight: 500;

select, input {
padding: 0.5rem 0.75rem;
border: none;
border-radius: 0.25rem;
outline: none;
font-size: 1rem;
font-weight: 500;

}

option {
display: block;
line-height: 3rem;
}

}

`