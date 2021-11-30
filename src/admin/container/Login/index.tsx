
import { Login } from "./components/Login";
import styled from "@emotion/styled";
import left from "assets/left.svg";
import right from "assets/right.svg";


export const UnauthenticatedApp = () => {
  return (<Container>
    <Header />
    <Background />
        <Login/>
  </Container>)
};




const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`;

const Header = styled.header`
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
