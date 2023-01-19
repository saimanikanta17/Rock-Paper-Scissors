import {RuleButton, RuleImage, RulesButtonsContainer} from './styledComponents'

const RulesButtons = props => {
  const {gameChoice, choicesList} = props

  const clickRock = () => {
    gameChoice(0)
  }

  const clickScissor = () => {
    gameChoice(1)
  }

  const clickPaper = () => {
    gameChoice(2)
  }

  return (
    <RulesButtonsContainer>
      <RuleButton type="button" onClick={clickRock} data-testid="rockButton">
        <RuleImage src={choicesList[0].imageUrl} alt={choicesList[0].id} />
      </RuleButton>
      <RuleButton
        type="button"
        onClick={clickScissor}
        data-testid="scissorsButton"
      >
        <RuleImage src={choicesList[1].imageUrl} alt={choicesList[1].id} />
      </RuleButton>
      <RuleButton type="button" onClick={clickPaper} data-testid="paperButton">
        <RuleImage src={choicesList[2].imageUrl} alt={choicesList[2].id} />
      </RuleButton>
    </RulesButtonsContainer>
  )
}

export default RulesButtons
