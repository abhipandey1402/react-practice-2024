import React, { useState } from 'react'
import CodingQueInterface from '../components/commonComponents/CodingQueInterface'
import CodeEditor from '../components/commonComponents/CodeEditor'
import CodeCompilation from '../components/commonComponents/CodeCompilation'
import { useNavigate, useParams } from 'react-router'
import { getJavascriptPracticeQuestionById, javascriptPracticeQuestions } from '../utils/javascriptPracticeQuestions'
import styled from 'styled-components'


const JavaScriptPracticeQuestions = () => {
    const navigate = useNavigate();
    const { questionId } = useParams();
    console.log(questionId)
    const [data, setData] = useState(getJavascriptPracticeQuestionById(parseInt(questionId)));

    console.log(data);
    const [input, setInput] = useState(``);
    const [language, setLanguage] = useState("javascript");
    const [languageExtension, setLanguageExtension] = useState('txt');
    const [theme, setTheme] = useState(false);

    const updateInput = (newInput) => {
        setData({ ...data, input: newInput });
    };

    return (
        <div>
            <CodingQueInterface
                queComp={<div className="questionText">{data?.question}</div>}
                queDesc={<div className="questionText">{data?.description}</div>}
                codeEditorComp={<CodeEditor input={data?.input} updateInput={updateInput} language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} setLanguageExtension={setLanguageExtension} />}
                codeCompilation={<CodeCompilation input={data?.input} language={language} theme={theme} languageExtension={languageExtension} />}
                theme={theme}
                seqOrder={data?.seqOrder}
            />
        </div>
    )
}

export default JavaScriptPracticeQuestions
