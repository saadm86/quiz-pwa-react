import React, { createContext, useState } from "react";
import { ApiCall } from "../utils/API";
import { Quiz } from "../utils/API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export const QuizContext = createContext<any>([]);

export type Props = {
  children?: any;
};

export const QuizProvider: React.FC<Props> = ({ children }) => {
  const [quiz, setQuiz] = useState<Quiz[]>([
    {
      category: " ",
      correct_answer: " ",
      difficulty: " ",
      incorrect_answers: [],
      question: " ",
      type: [],
      answers: [],
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState<number>(1);
  const [difficulty, setDifficulty] = useState<string>("");
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const amountCallBack = (amount: number) => {
    setAmount(+amount);
  };

  const difficultyCallBack = (difficulty: string) => {
    setDifficulty(difficulty);
  };

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const quizData = await ApiCall(amount, difficulty);
    setQuiz(quizData);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = quiz[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: quiz[number].question,
        answer,
        correct,
        correctAnswer: quiz[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next question if not the last question
    const nextQ = number + 1;
    if (nextQ === amount) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <QuizContext.Provider
      value={[
        [quiz[number].question, quiz[number].answers],
        [amountCallBack, difficultyCallBack],
        [startQuiz],
        [score],
        [loading, gameOver],
        [checkAnswer, nextQuestion],
        [userAnswers, userAnswers ? userAnswers[number] : undefined, number, amount]
      ]}
    >
      {children}
    </QuizContext.Provider>
  );
};
