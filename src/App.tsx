import React from 'react';
import './App.css';
import AnswerCard from './components/AnswerCard';
import NextButton from './components/NextButton';
import QuestionCard from './components/QuestionCard';
import StartButton from './components/StartButton';
import Header from './components/Header';
import Score from './components/Score';
import { QuizType } from './components/QuizType';
import {QuizProvider} from './globalstate/context'

function App() {
  
  return (
    <div className="App">
      <QuizProvider>
        <Header />
        <QuizType />
        <StartButton />
        <Score />
        <QuestionCard />
        <AnswerCard />
        <NextButton />
      </QuizProvider>
    </div>
  );
}

export default App;
