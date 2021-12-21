import styled from "styled-components";
import CancelIcon from "../assets/Icons/CancelIcon";
import ChatIcon from '../assets/Icons/ChatIcon'
import WaveIcon from '../assets/Icons/WaveIcon'
import ChatBotIcon from "./ChatBotIcon";

const questions = [
    {
        id: '1',
        question: 'Can I redeem my FB before the original term?',
    },
    {
        id: '2',
        question: 'How do I pay my Credit card bill?',
    },
    {
        id: '3',
        question: 'How can I get my Account Statement?',
    },
    {
        id: '4',
        question: 'What is the tenure of Fixed Deposit?',
    },

]
const Container
    = styled.div`
  width: 416px;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgb(0 0 0 / 25%);
  @media screen and (max-width:440px) {
    width: 95vw;
  }
 `
const Wrapper = styled.div`
  background: linear-gradient(123.75deg, #F5821F 1.87%, #FF5C00 120.46%);
  height:280px;
  `
const Name = styled.div`
font-size: 30px;
font-weight: 700;
`
const Hello = styled.div`
font-size: 22px;
font-weight: 700;
`
const Intro = styled.div`
font-size: 18px;
font-weight: 500;
`
const IntroComponent = styled.div`
  width: 90%;
  margin:0 auto;
  color: #FFFFFF;
  padding: 20px;
  `
const IntroWrapper = styled.div`
  padding: 5px 0;
`
const Question = styled.div`
border: 1px solid #E1E1E1;
font-size: 12px;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
border-radius: 8px;
padding: 15px;
width: 90%;
display: flex;
align-items: center;
gap: 10px;
`
const QuestionContainer = styled.div`
height:100%;
`
const QuestionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: -80px auto 20px auto;
gap: 10px;
padding: 40px 0 20px 0;
width: 95%;
background: #FFFFFF;
border: 1px solid #E4E4E4;
box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);
border-radius: 8px; 
`
const BulletPoint = styled.div`
background: rgba(255, 118, 0, 0.15);
width: 14px;
height: 14px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
`
const SmallBulletPoint = styled.div`
width: 8px;
height: 8px;
background: rgba(255, 118, 0, 0.8);
border-radius: 50%;
`
const TitleWrapper = styled.div`
display: flex;
gap: 13px;
font-weight: 500;
width: 90%;
`
const Button = styled.div`
border: 1px solid #D1D1D1;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
border-radius: 100px;
width: 70%;
margin-top: 10px;
text-align: center;
font-size: 14px;
font-weight: 500;
padding:12px 14px;
@media screen and (max-width:377px) {
padding: 10px 0;
width: 80%;
}
`
const Title = styled.div`
font-size: 14px;
`
const Icon = styled.div`
  color: #FF7600;
  width: 21px;
  height: 21px;
  background: rgba(247, 183, 49, 0.12);
  text-align: center;
  border-radius: 50%;
`
const ChatBot = ( { handleClick } ) => {
    return (
        <Container>
            <CancelIcon handleClick={handleClick} />
            <ChatBotIcon />
            <Wrapper>
                <IntroComponent>
                    <Name>IRIS</Name>
                    <Hello>Hello <WaveIcon /></Hello>
                    <IntroWrapper>
                        <Intro>
                            I am Iris, a Virtual Assistant
                        </Intro>
                        <Intro>
                            How may I help you?
                        </Intro>
                    </IntroWrapper>
                </IntroComponent>
            </Wrapper>
            <QuestionContainer>
                <QuestionWrapper>
                    <TitleWrapper>
                        <Title>Frequently Asked Questions</Title>
                        <Icon>?</Icon>
                    </TitleWrapper>
                    {questions.map( ( { id, question } ) =>
                        <Question key={id}> <BulletPoint><SmallBulletPoint></SmallBulletPoint></BulletPoint>{question}</Question>
                    )}
                    <Button> <ChatIcon />Start a New Conversation</Button>
                </QuestionWrapper>
            </QuestionContainer>
        </Container>
    )
}
export default ChatBot;
{/* <WrapperIntro>
<IntroComponent>
    <Name>IRIS</Name>
    <Hello>Hello</Hello>
    <IntroWrapper>
        <Intro>
            I am Iris, a Virtual Assistant
        </Intro>
        <Intro>
            How may I help you?
        </Intro>
    </IntroWrapper>
</IntroComponent>
</WrapperIntro>
<AnotherComponent>

</AnotherComponent> */}

// const AnotherComponent = styled.div`
// /* position: relative;

//   `
// const WrapperIntro = styled.div`
//   /* background: linear-gradient(123.75deg, #F5821F 1.87%, #FF5C00 120.46%);
//   width: 100%;
//   height:278px;
//   padding: 20px 0; */
// `
