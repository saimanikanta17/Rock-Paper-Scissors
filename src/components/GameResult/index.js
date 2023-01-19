import {
  RuleImage,
  RulesButtonsContainer,
  ResultContainer,
  PlayButton,
} from './styledComponents'

const GameResult = props => {
  const {playerImage, opponentChoice, playAgain, result} = props
  const clickPlayAgain = () => {
    playAgain()
  }

  return (
    <ResultContainer>
      <RulesButtonsContainer>
        <RuleImage src={playerImage} alt="your choice" />
        <RuleImage src={opponentChoice} alt="opponent choice" />
      </RulesButtonsContainer>
      <p>{result}</p>
      <PlayButton type="button" onClick={clickPlayAgain}>
        PLAY AGAIN
      </PlayButton>
    </ResultContainer>
  )
}

export default GameResult
