'use client'

import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const QuizSection = styled.section`
  padding: 4rem 0;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

const QuizTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`

const QuizCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
`

const Question = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const AnswerButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`

const Result = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: bold;
`

const quizData = [
  {
    question: "What is the primary greenhouse gas responsible for global warming?",
    answers: ["Carbon dioxide", "Methane", "Water vapor", "Ozone"],
    correct: 0
  },
  {
    question: "Which of the following is NOT a renewable energy source?",
    answers: ["Solar", "Wind", "Nuclear", "Geothermal"],
    correct: 2
  },
  {
    question: "What percentage of the Earth's surface is covered by oceans?",
    answers: ["50%", "60%", "70%", "80%"],
    correct: 2
  }
]

const EcoQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (index: number) => {
    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1)
    }

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  return (
    <QuizSection id="quiz">
      <QuizTitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Eco Quiz Challenge
      </QuizTitle>
      {!showResult ? (
        <QuizCard
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Question>{quizData[currentQuestion].question}</Question>
          {quizData[currentQuestion].answers.map((answer, index) => (
            <AnswerButton
              key={index}
              onClick={() => handleAnswer(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {answer}
            </AnswerButton>
          ))}
        </QuizCard>
      ) : (
        <Result
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          You scored {score} out of {quizData.length}!
        </Result>
      )}
    </QuizSection>
  )
}

export default EcoQuiz

