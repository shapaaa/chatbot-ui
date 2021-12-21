import styled, { keyframes } from "styled-components";

const fadeEasy = keyframes`
 100%{
     opacity: 1;
 }
 `
const Svg = styled.svg`
position: absolute;
right:10px;
top:10px;
cursor: pointer;
opacity: 0;
animation: ${fadeEasy} .6s 3.8s 1 forwards ease;
z-index:1;
`
const CancelIcon = ( { handleClick } ) => {
    return (
        <Svg onClick={handleClick} width="60px" fill="white" height="60px" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g>
                <path d="m247.05 177.05c6.5625-6.5625 17.199-6.5625 23.758 0l79.195 79.195 79.195-79.195c6.5625-6.5625 17.199-6.5625 23.758 0 6.5625 6.5625 6.5625 17.199 0 23.758l-79.195 79.195 79.195 79.195c6.5625 6.5625 6.5625 17.199 0 23.758-6.5625 6.5625-17.199 6.5586-23.758 0l-79.195-79.195-79.195 79.195c-6.5625 6.5586-17.199 6.5586-23.758 0-6.5625-6.5625-6.5625-17.199 0-23.758l79.195-79.195-79.195-79.195c-6.5625-6.5625-6.5625-17.199 0-23.758z" />
            </g>
        </Svg>
    )
}
export default CancelIcon;