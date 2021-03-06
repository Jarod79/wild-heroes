import { useState } from 'react';
import Navbar from '../Navbar/NavBar';
import QuizGame from './QuizGame';
import CardsQuiz from './CardsQuiz';
import QuizResult from './QuizResult';
import QuizProgressBar from './ProgressBar';
import BtrGame from './BtrGame';
import normalQuiz from '../../img/normal-quiz.jpg';
import riddlerImg from '../../img/riddler-quiz.jpg';
import RiddlerProgressBar from './RiddlerProgressBar';
import RiddlerQuizResult from './RiddlerQuizResult';
import './quiz.css';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [chooseCard, setChooseCard] = useState(true);
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const [chooseGame, setChooseGame] = useState(true);
  const [normalGame, setNormalGame] = useState(false);
  const [btr, setBtr] = useState(false);

  return (
    <div className="container-quiz">
      <Navbar />
      {chooseGame && (
        <div className="container_choose-quiz">
          <div className="choose-quiz">
            <h2>Choose your game</h2>
          </div>
        </div>
      )}
      {chooseGame && (
        <div className="container-btn-game">
          <div
            role="presentation"
            className="choose-game"
            onClick={() => {
              setChooseGame(false);
              setNormalGame(true);
            }}
          >
            <img src={normalQuiz} alt="Superhero" />
            <h2>Normal Quiz</h2>
          </div>
          <div
            role="presentation"
            className="choose-game"
            onClick={() => {
              setChooseGame(false);
              setBtr(true);
            }}
          >
            <img src={riddlerImg} alt="Riddler" />
            <h2>Beat The Riddler</h2>
          </div>
        </div>
      )}
      {normalGame && <QuizProgressBar score={score} />}
      {normalGame && !chooseCard && numberQuestion < 11 && (
        <QuizGame
          index={index}
          setIndex={setIndex}
          numberQuestion={numberQuestion}
          setNumberQuestion={setNumberQuestion}
          score={score}
          setScore={setScore}
        />
      )}
      {normalGame && numberQuestion < 11 && (
        <CardsQuiz
          score={score}
          setScore={setScore}
          setChooseCard={setChooseCard}
          chooseCard={chooseCard}
          index={index}
        />
      )}
      {btr && <RiddlerProgressBar score={score} />}
      {btr && numberQuestion < 11 && (
        <BtrGame
          index={index}
          setIndex={setIndex}
          numberQuestion={numberQuestion}
          setNumberQuestion={setNumberQuestion}
          score={score}
          setScore={setScore}
        />
      )}
      {normalGame && numberQuestion > 10 && (
        <QuizResult
          score={score}
          setNumberQuestion={setNumberQuestion}
          setScore={setScore}
        />
      )}
      {btr && numberQuestion > 10 && (
        <RiddlerQuizResult
          score={score}
          setNumberQuestion={setNumberQuestion}
          setScore={setScore}
        />
      )}
    </div>
  );
};

export default Quiz;
