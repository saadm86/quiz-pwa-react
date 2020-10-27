import React, { useContext } from "react";

import { QuizContext } from "../globalstate/context";


export default function AnswerCard() {


  const [[, answers], , , , [loading, gameOver],[checkAnswer],[,userAnswer]] = useContext(QuizContext);

  return (
    <>
      {!loading && !gameOver && (
        <div>
          
            {answers.map((answer: any, id: any) => (
            <button disabled={userAnswer ? true : false} value={answer} onClick = {checkAnswer} key={id}>
              
            {answer} 
              
            </button>
            ))}
        
        </div>
      )}
    </>
  );
}
