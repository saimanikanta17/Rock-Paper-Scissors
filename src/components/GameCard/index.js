import {Component} from 'react'

import {GameContainer, ScoreBar, ScoreCard, Score} from './styledComponents'

import RulesButtons from '../RulesButtons'

import GameResult from '../GameResult'

import Rules from '../Rules'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameCard extends Component {
  state = {
    score: 0,
    isPlayed: false,
    playerImage: '',
    opponentChoice: '',
    result: '',
  }

  gameChoice = index => {
    const {score} = this.state
    const opponentIndex = Math.floor(Math.random() * 3)
    const playerChoice = choicesList[index].id
    const opponentChoice = choicesList[opponentIndex].id
    let point = 0
    let status = 'IT IS DRAW'

    if (playerChoice === 'ROCK' && opponentChoice === 'SCISSORS') {
      point = 1
      status = 'YOU WON'
    } else if (playerChoice === 'ROCK' && opponentChoice === 'PAPER') {
      point = -1
      status = 'YOU LOSE'
    } else if (playerChoice === 'SCISSORS' && opponentChoice === 'PAPER') {
      point = 1
      status = 'YOU WON'
    } else if (playerChoice === 'SCISSORS' && opponentChoice === 'ROCK') {
      point = -1
      status = 'YOU LOSE'
    } else if (playerChoice === 'PAPER' && opponentChoice === 'ROCK') {
      point = 1
      status = 'YOU WON'
    } else if (playerChoice === 'PAPER' && opponentChoice === 'SCISSORS') {
      point = -1
      status = 'YOU LOSE'
    }
    const total = score + point
    this.setState({
      score: total,
      isPlayed: true,
      playerImage: choicesList[index].imageUrl,
      opponentChoice: choicesList[opponentIndex].imageUrl,
      result: status,
    })
  }

  playAgain = () => {
    this.setState({isPlayed: false})
  }

  render() {
    const {score, isPlayed, playerImage, opponentChoice, result} = this.state
    return (
      <GameContainer>
        <ScoreBar>
          <h1>
            ROCK <br />
            PAPER <br />
            SCISSORS <br />
          </h1>
          <ScoreCard>
            <p>Score</p>
            <Score>{score}</Score>
          </ScoreCard>
        </ScoreBar>
        {isPlayed ? (
          <GameResult
            playerImage={playerImage}
            opponentChoice={opponentChoice}
            playAgain={this.playAgain}
            result={result}
          />
        ) : (
          <RulesButtons
            gameChoice={this.gameChoice}
            choicesList={choicesList}
          />
        )}
        <Rules />
      </GameContainer>
    )
  }
}

export default GameCard
