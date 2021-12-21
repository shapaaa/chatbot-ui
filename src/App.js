import { useState } from "react";
import styled, { css } from "styled-components";
import ChatBot from "./components/ChatBot";
import ChatBotIcon from "./components/ChatBotIcon";

const Container = styled.div`
 position: fixed;
 right: 2vw;
 bottom: 50px;
 ${( { showChatBox } ) => !showChatBox && css`
 bottom: -10px;
 `}
`

function App() {
  const [showChatBox, setShowChatBox] = useState( false );
  const [animate, setAnimate] = useState( false );
  const handleClick = () => {
    if ( !showChatBox ) {
      setAnimate( true );
      setTimeout( () => {
        setAnimate( false )
        setShowChatBox( !showChatBox )
      }, 550 )
    }
    else
      setShowChatBox( !showChatBox )
  }
  return (
    <Container showChatBox={showChatBox}>
      {showChatBox && <ChatBot handleClick={handleClick} />}
      {!showChatBox && <ChatBotIcon animate={animate} handleClick={handleClick} button={true} />}
    </Container>
  );
}

export default App;