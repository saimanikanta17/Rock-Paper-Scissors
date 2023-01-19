import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  RuleImage,
  RuleCloseBtn,
  RuleContainer,
  RuleBtn,
} from './styledComponents'

const Rules = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <RuleBtn type="button" className="trigger-button">
          Rules
        </RuleBtn>
      }
    >
      {close => (
        <>
          <RuleContainer>
            <RuleCloseBtn type="button" onClick={() => close()}>
              <RiCloseLine size="20px" fill="black" />
            </RuleCloseBtn>
            <RuleImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RuleContainer>
        </>
      )}
    </Popup>
  </div>
)
export default Rules
