import styled from 'styled-components'

export const GameContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 10px;
  font-family: 'Bree Serif';
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreBar = styled.div`
  width: 600px;
  color: #ffffff;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 12px;
`
export const ScoreCard = styled.div`
  background-color: #ffffff;
  color: #223a5f;
  height: 100px;
  width: 150px;
  border-radius: 15px;
  text-align: center;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
`
export const Score = styled.p`
  font-family: 'Roboto';
`
