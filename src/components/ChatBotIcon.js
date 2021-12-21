
import styled, { css } from "styled-components";
import BotIcon from "../assets/Icons/BotIcon";
import { fadeEasy } from "./ChatBot";

const Wrapper = styled.div`
  position: absolute;
  width: 67px;
  height: 67px;
  z-index: 1;
  background: linear-gradient(180deg, #FF7600 0%, #FF5C00 100%);
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  ${( { button } ) => !button && css`
  opacity: 0;
  left: 38px;
  top: 165px;
  animation: ${fadeEasy} .62s 200ms 1 forwards ease;
  `}
  
  ${( { button } ) => button && css`
  transform: translateY(0);
  transition: transform .5s 10ms ease;
  right:5vw;
  bottom: 100px;
  cursor: pointer;
  &:hover{
    opacity:.9;
  }
  `}
  ${( { button, animate } ) => button && animate && css`
  transform: translateY(250px);
  `}
  `
const ChatBotIcon = ( { animate, button, handleClick } ) => {
  return (
    <Wrapper animate={animate} onClick={handleClick} button={button}><BotIcon /></Wrapper>
  )
}
export default ChatBotIcon;