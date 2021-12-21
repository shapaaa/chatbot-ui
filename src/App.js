import { useState } from "react";
import styled, { css } from "styled-components";
import ChatBot from "./components/ChatBot";
import ChatBotIcon from "./components/ChatBotIcon";

const Container = styled.div`
 position: fixed;
 right: 2vw;
 bottom: 50px;
`

function App() {
  const [showChatBox, setShowChatBox] = useState( false );
  const handleClick = () => {
    setShowChatBox( !showChatBox )
  }
  return (
    <Container>
      {showChatBox && <ChatBot handleClick={handleClick} />}
      {!showChatBox && <ChatBotIcon handleClick={handleClick} button={true} />}
    </Container>
  );
}

export default App;