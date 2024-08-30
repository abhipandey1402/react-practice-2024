import React, { useState } from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { executeCodeCompilation } from '../../functions/executeCodeCompilation';


const CodeCompilation = ({ input, theme, language, languageExtension }) => {
    // const [stdInput, setStdInput] = useState("");
    const [output, setOutput] = useState('');
    const [stdError, setStdError] = useState('');
    const [isStdError, setIsStdError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // const [executionUiMode, setExecutionUiMode] = useState('testcase');

    // const toggleMode = (mode) => {
    //     setExecutionUiMode(mode)
    // }

    const handleExecution = async () => {
        try {
            // setExecutionUiMode('testResult');
            setIsLoading(true);
            setOutput('');
            setIsStdError(false);
            setStdError('');
            const res = await executeCodeCompilation(language, `index${languageExtension}`, input)
            if (res) {
                setIsLoading(false);
            }
            if (res?.data?.stdout !== null) {
                setOutput(res?.data?.stdout);
                setIsStdError(false);
                setIsLoading(false);
            }
            if (res?.data?.stderr !== null) {
                setStdError(res?.data?.stderr);
                setIsStdError(true);
                setIsLoading(false);
            }
        } catch (error) {
            toast.error("Error", error);
            setIsLoading(false);
        }
    }

    console.log(output);
    console.log(stdError);

    return (
        <Box theme={theme ? '#fff' : '#1E1E1E'} textColor={theme ? '#1E1E1E' : '#fff'}>
            <div className='top'>
                <span className='textLeftBox'>
                    {/* <span className='btn' onClick={() => toggleMode('testcase')} style={{ backgroundColor: executionUiMode === 'testcase' && 'var(--lightOrange)', color: executionUiMode === 'testcase' && 'white' }}>Testcase</span> */}
                    {/* | */}
                    <span className='btn'>Code Output</span>
                </span>
                <button className='runBtn' onClick={handleExecution}>Run</button>
            </div>
            <hr style={{ width: '100%' }} />
            <div className='contentBox'>
                {
                    isLoading ?
                        <LoaderBox>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-circle"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                        </LoaderBox>
                        :
                        // (executionUiMode === 'testcase' && !isLoading) ?
                        //     <div className='testcaseBox'>
                        //         <label>
                        //             Input:
                        //             <textarea className='inputBox' value={stdInput} onChange={(e) => setStdInput(e.target.value)} />
                        //         </label>
                        //     </div>
                        //     :
                        (!isLoading && !isStdError) ?
                            <div className='testResultBox'>
                                {/* <label>
                                    Input:
                                    <textarea className='inputBox' value={stdInput} disabled={true} />
                                </label> */}
                                <label>
                                    Output:
                                    <textarea className='inputBox' value={output} disabled={true} rows={5} />
                                </label>
                            </div>
                            : (!isLoading && isStdError) ?
                                <span className='errorBox'>
                                    <span className='title'>Error</span>
                                    <span className='text'>{stdError}</span>
                                </span>
                                : <></>
                }
            </div>
        </Box>
    )
}

export default CodeCompilation


const Box = styled.div`
width: 100%;
height: 100%;
background-color: var(--backgroundColor);
color: var(--color);
display: flex;
flex-direction: column;
gap: 0.25rem;

.top {
    padding: 0rem 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 2rem;

    .textLeftBox {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .btn {
            padding: 0.3rem 0.5rem;
            font-weight: 600;
            border-radius: 0.25rem;
        }
    }

    .runBtn {
        padding: 0.3rem 0.5rem;
        border: 0.05rem solid grey;
        border-radius: 0.2rem;
        cursor: pointer;
        background-color: var(--backgroundColor);
        color: var(--color);
    }
}

.contentBox {
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-bottom: 1rem;
    height: 100%;

    .testcaseBox {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
            font-weight: 500;
            font-size: 0.9rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0.5rem;
        }
        .inputBox {
            font-size: 0.9rem;
            padding: 0.25rem 0.5rem;
            min-height: 1.75rem;
            width: 90%;
            border: 0.05rem solid grey;
            outline-color: var(--lightOrange);
            background-color: var(--backgroundColor);
            color: var(--color);
        }
    }

    &::-webkit-scrollbar {
        width: 0.4rem;
    }
    
      &::-webkit-scrollbar-track {
        background: lightgrey;
        border-radius: 0.4rem;
    }
    
      &::-webkit-scrollbar-thumb {
        background: grey;
        width: 0.4rem;
        border-radius: 0.4rem;
    }
    
    & {
      scrollbar-width: 0.4rem;
    } 

    .testResultBox {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
            font-weight: 500;
            font-size: 0.9rem;
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0.5rem;
        }
        .inputBox {
            font-size: 0.9rem;
            padding: 0.25rem 0.5rem;
            min-height: 2rem;
            width: 90%;
            border: 0.05rem solid grey;
            outline-color: var(--lightOrange);
            background-color: var(--backgroundColor);
            color: var(--color);



            &::-webkit-scrollbar {
                width: 0.4rem;
            }
            
              &::-webkit-scrollbar-track {
                background: lightgrey;
                border-radius: 0.4rem;
            }
            
              &::-webkit-scrollbar-thumb {
                background: grey;
                width: 0.4rem;
                border-radius: 0.4rem;
            }
            
            & {
              scrollbar-width: 0.3rem;
            } 
        }
    }

    .errorBox {
        background-color: var(--backgroundColor);
        color: #F63636;
        padding: 0.5rem;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        overflow: auto;

        .title {
            font-size: 1rem;
            font-weight: 600;
        }

        .text {
            font-size: 0.8rem;
            line-height: 1rem;
            font-weight: 600;
            font-family: var(--font);
        }
    }
}

`

const LoaderBox = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: var(--backgroundColor);
color: var(--color);


`