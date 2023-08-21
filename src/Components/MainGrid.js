import styled from "styled-components";
import debtList from "./photos/debtList.js";
import { useNavigate } from "react-router-dom";
import logo from "../Components/photos/logo.png";

import useId from "react-id-generator";
import Font from "react-font";
const Box = styled.div`
  padding: 30px;
  margin: 10px;
  border: 2px solid white;
  box-shadow: 2px 5px 5px #808080;
  border-radius: 15px;
  img {
    width: auto;
    height: 70px;
  }
`;

const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2px;
  padding-left: 150px;
  padding-right: 150px;
  h1 {
    font-family: "Poppins";
    color: #b80200;
    font-size: 36px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
  }
  h2 {
    font-family: "Poppins";
    color: #b80200;
    font-size: 36px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
  }
  h3 {
    opacity: 1;
    color: rgba(55,70,90,1);
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0px;
    text-align:center;
    margin:-1px;
  
  }
  h4{
    opacity: 1;
    color: rgba(55, 70, 90, 1);
    font-family: "Poppins";
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0px;
    text-align:center;
    margin-bottom:-5px;
  }
  p {
    display: inline-block
    font-family: "Poppins";
    opacity: 1;
    color: rgba(55, 70, 90, 1);
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
  }
  button{
    fill:"#B80200";
    width: 120px;
    height: 50px;
    font-family:"Poppins";
    font-size: 20px;
    fill:"#FFFFFF";}
  .buttonRed{
    
    fill: "#FFFFFF";
    color: rgba(255, 255, 255, 1);
    background-color: #b80200;
    border: 2px solid white;
    border-radius: 8px;
  
  }
                   
  
`;
const SubGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const HeaderSubGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;
const ButtonSubGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  font-family: "Poppins";
  grid-gap: 50px;
  margin-top: 30px;
`;

const DebtItem = (item, index) => {
  const [htmlId] = useId();
  console.log(htmlId);
  const navigate = useNavigate();
  const navigateToView = () => {
    // 👇️ navigate to /contacts
    navigate("/view");
  };
  const navigateToInvest = () => {
    // 👇️ navigate to /contacts
    navigate("/invest");
  };

  return (
    <Box key={index}>
      <HeaderSubGrid>
        <div>
          <img src={item.photo} alt={item.title} id={index} />
        </div>
        <div></div>
        <div>
          <img src={logo} alt="logo of the stablecoin" />
        </div>
      </HeaderSubGrid>
      <h1>{item.title}</h1>
      <description>{item.description}</description>
      <SubGrid>
        <div>
          <h4>{item.price}</h4>
          <h3>Price</h3>
        </div>
        <div>
          <h4>{item.quantity}</h4>
          <h3>Quantity</h3>
        </div>
        <div>
          <h4>{item.coupon}</h4>
          <h3>Coupon</h3>
        </div>
        <div>
          <h4>{item.maturity}</h4>
          <h3>Maturity</h3>
        </div>
      </SubGrid>

      <ButtonSubGrid>
        <div></div>
        <div>
          <button onClick={navigateToView}>View</button>
        </div>

        <div>
          <button className="buttonRed" onClick={navigateToInvest}>
            Invest
          </button>
        </div>
      </ButtonSubGrid>
    </Box>
  );
};
const MainGrid = () => {
  return (
    <Font family="Poppins">
      <Gridcontainer>
        <>{debtList.map(DebtItem)}</>;
      </Gridcontainer>
    </Font>
  );
};

export default MainGrid;
