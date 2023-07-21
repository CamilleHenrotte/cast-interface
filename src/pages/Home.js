import MainGrid from "../Components/MainGrid";
import styled from "styled-components";
import logoCeres from "../Components/photos/logo-ceres.png";

import { useNavigate } from "react-router-dom";
const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;

  padding-left: 150px;
  padding-right: 150px;
  padding-top: 50px;
  img {
    width: auto;
    height: 70px;
  }
  button {
    fill: "#FFFFFF";
    color: rgba(255, 255, 255, 1);
    background-color: #b80200;
    font-family: "Poppins";
    font-size: 18px;
    letter-spacing: 0px;
    text-align: center;
    width: 170px;
    height: 70px;
    border: 2px solid white;
    border-radius: 8px;
  }
`;
const H1 = styled.h1`
  opacity: 1;
  color: rgba(184, 2, 0, 1);
  font-family: "Poppins";
  font-size: 60px;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 150px;
  padding-right: 150px;
  margin-bottom: -10px;
`;
const H2 = styled.h2`
  opacity: 1;
  color: rgba(55, 70, 90, 1);
  font-family: "Poppins";
  font-size: 36px;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 150px;
  padding-right: 150px;
`;
const Line = styled.hr`
  border: 3px solid rgba(184, 2, 0, 1);
  margin-left: 150px;
  opacity: 1;
  width: 300px;
  left: 0;
  display: inline-block;
`;

const Home = () => {
  const navigate = useNavigate();
  const navigateToConnect = () => {
    // 👇️ navigate to /contacts
    navigate("/connect");
  };
  return (
    <>
      <Header>
        <div>
          <img src={logoCeres}></img>
        </div>
        <div></div>
        <div>
          <button onClick={navigateToConnect}>Connect Wallet</button>
        </div>
      </Header>
      <H1>Debt pool</H1>
      <Line />
      <H2>Live Now</H2>
      <MainGrid />
      <H2>Coming soon</H2>
      <MainGrid />
    </>
  );
};
export default Home;
