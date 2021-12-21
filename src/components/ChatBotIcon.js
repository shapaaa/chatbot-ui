
import styled, { css } from "styled-components";
import BotIcon from "../assets/Icons/BotIcon";

const Wrapper = styled.div`
  position: absolute;
  width: 67px;
  height: 67px;
  ${( { button } ) => !button && css`
  left: 38px;
  top: 165px;
  `}
  z-index: 2;
  background: linear-gradient(180deg, #FF7600 0%, #FF5C00 100%);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  ${( { button } ) => button && css`
  right:5vw;
  bottom: 100px;
  cursor: pointer;
  &:hover{
    opacity:.9;
  }
  `}
  `
const ChatBotIcon = ( { button, handleClick } ) => {
  return (
    <Wrapper onClick={handleClick} button={button}><BotIcon /></Wrapper>
  )
}
export default ChatBotIcon;