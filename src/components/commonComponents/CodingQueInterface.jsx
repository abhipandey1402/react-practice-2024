import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css';
import styled from 'styled-components';

const CodingQueInterface = ({ queComp, queDesc, codeEditorComp, codeCompilation, theme, seqOrder }) => {
    const navigate = useNavigate();
    const [sizes, setSizes] = useState(['49.5%', '49.5%']);
    const [sizes2, setSizes2] = useState(['70%', '30%']);

    const layoutCSS = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    };

    const rowCSS = {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    };

    const contentCSS = {
        padding: '10px',
        height: '100%',
        boxSizing: 'border-box',
    };

    return (
        <MainBox>
            <SplitPane split="vertical" sizes={sizes} onChange={setSizes} style={{ display: 'flex', gap: '2rem' }}>
                <Pane minSize='10%' maxSize='90%'>
                    <div className='leftBox' style={{ ...layoutCSS }}>
                    <Button onClick={() => navigate("/javascript-practice")}>Back to Problems</Button>
                        <div style={contentCSS} className='questionBox'>{queComp && queComp} <br/> {queDesc && queDesc}</div>
                    </div>
                </Pane>
                <Pane minSize='10%' maxSize='90%'>
                    <div style={{ ...layoutCSS, ...rowCSS }} className='rightBox'>
                        <SplitPane split="horizontal" sizes={sizes2} onChange={setSizes2}>
                            <Pane minSize='50%' maxSize='75%'>
                                <div style={{ ...contentCSS, backgroundColor: theme ? 'white' : '#1E1E1E' }} className='rightBox1' >{codeEditorComp && codeEditorComp}</div>
                            </Pane>
                            <Pane minSize='25%' maxSize='50%'>
                                <div style={{ ...contentCSS, backgroundColor: theme ? 'white' : 'var(--backgroundColor)' }} className='rightBox2'>
                                    {codeCompilation && codeCompilation}
                                </div>
                            </Pane>
                        </SplitPane>
                    </div>
                </Pane>
            </SplitPane>
        </MainBox>
    );
};

export default CodingQueInterface;

const MainBox = styled.div`
height: calc(100vh - 2rem);
width: calc(100vw - 2rem);
display: flex;
padding: 1rem 1rem;

.leftBox {
    border: 0.08rem solid grey;
    background-color: var(--white);
    border-radius: 0.75rem;
    overflow: auto;
    margin: 0 0.5rem 0 0;
    padding: 1rem;
    box-sizing: border-box;

    .questionBox {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .seqOrder {
        font-weight: 600;
    }
    

    &::-webkit-scrollbar {
        width: 0.2rem;
    }
    
      &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 0.2rem;
        margin: 0.5rem 0;
    }
    
      &::-webkit-scrollbar-thumb {
        background: grey;
        width: 0.2rem;
        border-radius: 0.2rem;
    }
    
    & {
      scrollbar-width: none;
    } 
}


.rightBox {
    background-color: var(--white);
    margin: 0 0 0 0.5rem;
    height: 96%;
    box-sizing: border-box;
}

.rightBox1 {
    border: 0.08rem solid grey;
    border-radius: 0.75rem;
    background-color: var(--white);
    // margin: 0 0 0.5rem 0;
    box-sizing: border-box;
    padding: 0 0 1rem 0;
}


.rightBox2 {
    border: 0.08rem solid grey;
    border-radius: 0.75rem;
    margin: 0.2rem 0 0 0;
    box-sizing: border-box;
    padding: 0 0 1rem 0;
}

`

const Button = styled.button`
  background: linear-gradient(to bottom right, #6366F1, #A78BFA);
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 20px;
  transition: background 0.3s;
//   position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  z-index: 10000;
  align-self: start;

  &:hover {
  background: linear-gradient(to bottom right, #EC4899, #A78BFA, #6366F1);
  }
`;