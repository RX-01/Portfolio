import styled , { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% {
  opacity: 0;
}


100% {
  opacity: 1;
}
`;

const fadeOut = keyframes`
0% {
  opacity: 1;
}


100% {
  opacity: 0;
}
`;

export const ModalWrapper = styled.div`
position:absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
align-content: center;

// animation: .5s ${fadeIn} ease-out;

`;

export const ModalBody = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
width: 85%;
height: 85%;
background-color: snow;
border-radius: 5px;
z-index:10;
`;

export const Backgroud = styled.div`
position:absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: black;
opacity:.25;
`;

export const Heading = styled.div`
display: flex;
background-color: salmon;
justify-content: space-between;
align-items: center;
margin-bottom: 35px;
width: 100%;

`;