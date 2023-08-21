import styled from "styled-components";
const Box = styled.div`
  padding: 10px;
  margin: 50px;
  width: 800px;
  height: 800px;
  border: 2px solid #808080;
  box-shadow: 1px 5px 5px #808080;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  img {
    width: auto;
    height: 30px;
  }

  h1 {
    opacity: 1;
    color: rgba(55, 70, 90, 1);
    font-family: "Poppins";
    font-size: 36px;
    font-weight: 900;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    padding-top: 50px;
    padding-left: 120px;
    padding-right: 120px;
    margin-top: -12px;
    left: 0;
    text-align: left;

    grid-column: span 2;
  }
  h2 {
    opacity: 1;
    color: rgba(184, 2, 0, 1);
    font-family: "Poppins";
    font-size: 21px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0px;
    text-align: left;
    text-align: left;
    padding-left: 150px;
    padding-right: 150px;
  }
  span {
    display: grid;
    padding-left: 150px;
    padding-right: 150px;
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 30px;
  }

  div {
    background-color: RGB(245, 245, 245);
    font-family: "Poppins";
    font-size: 20px;
    border: 2px solid white;
    border-radius: 8px;
    text-align: center;
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
    margin-left: 200px;
  }
`;

const Invest = () => {
  return (
    <Box>
      <h1>Invest</h1>
      <h2>Société générale Bond</h2>
      <h2>Wallet</h2>
      <span>
        <div>Code ISIN</div>
        <div>Quantity</div>
        <div>Price EURCV</div>
        <div>Total EURCV</div>
        <div>FR0000045072</div>
        <div>13</div>
        <div>1</div>
        <div>13</div>
      </span>
      <button>Confirm</button>
      <h2>Book Order</h2>
      <span>
        <div>Code ISIN</div>
        <div>Quantity</div>
        <div>Price EURCV</div>
        <div>Total EURCV</div>
        <div>FR0000045072 </div>
        <div>4</div>
        <div>1</div>
        <div>4</div>
        <div>FR0000045072 </div>
        <div>22</div>
        <div>1</div>
        <div>22</div>
        <div>FR0000045072 </div>
        <div>7</div>
        <div>1</div>
        <div>7</div>
      </span>
      <button>Export</button>
      <button>Show more</button>
    </Box>
  );
};
export default Invest;
