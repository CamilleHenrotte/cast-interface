import MainGrid from "../Components/MainGrid";
import styled from "styled-components";
import logoCeres from "../Components/photos/logo-ceres.png";
import logoEthereum from "../Components/photos/Ethereum.svg.png";
import socgen from "../Components/photos/socgen.png";

import { useNavigate } from "react-router-dom";
const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 6fr 1fr;
  font-family: "Poppins";
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
  margin-top: -12px;
  left: 0;
  text-align: left;
  display: inline-block;
  grid-column: span 2;
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
const H3 = styled.h2`
  opacity: 1;
  color: rgba(184, 2, 0, 1);
  font-family: "Poppins";
  font-size: 20px;
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
const P = styled.p`
  font-family: "Poppins";
  font-size: 16px;
  padding-left: 150px;
  padding-right: 150px;
`;
const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;
const Pink = styled.div`
  background-color: RGB(247, 230, 230);
  font-family: "Poppins";
  font-size: 20px;
  border: 2px solid white;
  border-radius: 8px;
  text-align: center;
`;
const White = styled.div`
  background-color: white;
  font-family: "Poppins";
  font-size: 20px;
  border: 2px solid white;
  border-radius: 8px;
  text-align: center;
  img {
    width: auto;
    height: 60px;
  }
`;

const BackOffice = () => {
  return (
    <>
      <Header>
        <div>
          <img src={logoCeres}></img>
        </div>
        <div></div>
        <div></div>
      </Header>
      <H1>Back Office interface</H1>
      <H2>List Bond</H2>
      <H3>
        {" "}
        <img src={socgen}></img>Société Générale Bond
      </H3>

      <Gridcontainer>
        <Pink></Pink>
        <Pink></Pink>
        <Pink></Pink>
        <Pink></Pink>
        <Pink></Pink>
        <Pink></Pink>
        <Pink></Pink>
        <Pink></Pink>
        <Pink></Pink>
        <Pink>ERC Symbol</Pink>

        <White></White>

        <White></White>
        <Pink>Expected Supply</Pink>
        <Pink>10 M</Pink>
        <White></White>
        <White></White>
        <White>Currency</White>
        <White>ERCV</White>
        <White></White>

        <White></White>
        <Pink>Unit Value</Pink>
        <Pink>1 ERCV</Pink>
        <White></White>
        <White></White>
        <White>Creation Date</White>
        <White>17-08-2023</White>
        <White></White>

        <White></White>
        <Pink>Issuance Date</Pink>
        <Pink>11-09-2023</Pink>
        <White></White>
        <White></White>
        <White>Maturity Date</White>
        <White>11-09-2033</White>
        <White></White>

        <White></White>
        <Pink>Coupon Date</Pink>
        <Pink>Quaterly</Pink>
        <White></White>
      </Gridcontainer>
      <Header>
        <div></div>
        <div></div>
        <div></div>
      </Header>
    </>
  );
};
export default BackOffice;
