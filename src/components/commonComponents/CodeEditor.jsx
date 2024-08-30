import React, { useState, useEffect } from 'react'
import Editor, { useMonaco } from '@monaco-editor/react';
import styled from 'styled-components'
import { codingLanguages } from '../../utils/codingLanguages';

const CodeEditor = ({ input, updateInput, language, setLanguage, theme, setTheme, setLanguageExtension }) => {

    const handleCodeEditorChange = (value, event) => {
        updateInput(value);
    }

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);

        const language = codingLanguages.find(lang => lang.id === selectedLanguage);
        if (language) {
            const extension = language.extension;
            setLanguageExtension(extension);
        }
        updateInput('');
    };


    // useEffect(() => {
    //     if (monaco) {
    //         monaco.editor.setModelLanguage(monaco.editor.getModels()[0], setLanguage);
    //     }
    // }, [monaco, language]);


    return (
        <Box>
            <div className='top'>
                <LanguageSelector value={language} onChange={handleLanguageChange} style={{ backgroundColor: theme ? 'white' : '#1E1E1E', color: theme ? '#1E1E1E' : 'white' }}>
                    {
                        codingLanguages?.map((language, i) => (
                            <option value={language?.id} key={i}>{language?.name}</option>
                        ))
                    }
                </LanguageSelector>
            </div>
            <Editor
                theme={theme ? 'light' : 'vs-dark'}
                height="100%"
                language={language}
                value={input}
                onChange={handleCodeEditorChange}
            />
        </Box>
    )
}

export default CodeEditor

const Box = styled.div`
width: 100%;
height: 95%;
display: flex;
padding: 0;
margin: 0;
box-sizing: border-box;
flex-direction: column;
align-items: start;

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

`

const LanguageSelector = styled.select`
  margin-bottom: 0rem;
  border-color: transparent;
  font-size: 0.8rem;
  padding: 0.4rem 0.5rem;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  outline-color: transparent;
  margin-bottom: 0.5rem;


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
`;