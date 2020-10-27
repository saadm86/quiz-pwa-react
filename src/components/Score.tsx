import React, {useContext} from 'react'
import {QuizContext} from '../globalstate/context'

const Score = () => {

  const [,,,[score],[,gameOver]] = useContext(QuizContext)
 
  return (
    <>
      {!gameOver ? <p>Score: {score}</p> : null}
    </>
  )
}

export default Score
