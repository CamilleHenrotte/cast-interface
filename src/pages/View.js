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
const NewHeader = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr;
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
  grid-template-columns: repeat(4, 1fr);
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
    height: 22px;
  }
`;

const View = () => {
  const navigate = useNavigate();
  const navigateToConnect = () => {
    // 👇️ navigate to /contacts
    navigate("/connect");
  };
  const navigateToInvest = () => {
    // 👇️ navigate to /contacts
    navigate("/invest");
  };
  return (
    <>
      <Header>
        <div>
          <img src={logoCeres}></img>
        </div>
        <div></div>
        <div></div>
        <div>
          <button onClick={navigateToConnect}>Connect Wallet</button>
        </div>
      </Header>
      <div>
        <Header>
          <img src={socgen}></img>
          <H1>Société Générale Bond</H1>
        </Header>
      </div>
      <P>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </P>
      <Gridcontainer>
        <White></White>
        <Pink>Code ISIN</Pink>
        <Pink>FR0000045072</Pink>
        <White></White>
        <White></White>
        <White>ERC Symbol</White>
        <White>
          <img src={logoEthereum}></img>
        </White>
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
        <White></White>
        <White>Coupon Value i.e. fixed</White>
        <White>0.3%</White>
        <White></White>
      </Gridcontainer>
      <NewHeader>
        <div></div>
        <div></div>
        <div>
          <button>Download Term Sheet</button>
        </div>
        <div>
          <button onClick={navigateToInvest}>Invest</button>
        </div>
      </NewHeader>
    </>
  );
};
export default View;
