import styled from "styled-components";
import photoList from "./photos/debtList.js";
import useId from "react-id-generator";

const Gallery = styled.div`
  padding: 2px;
  img {
    width: 100%;
    height: auto;
  }
`;
const Styleddiv = styled.div`
  padding: 0 !important;
`;
const Gridcontainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const GalleryDouble = styled(Gallery)`
  grid-column: span 2;
`;

const Photoitem = (photo, index) => {
  const [htmlId] = useId();
  console.log(htmlId);

  return (
    <GalleryDouble key={index}>
      <img
        src={photo.photo}
        alt={photo.description}
        width="600"
        height="400"
        id={index}
      />
    </GalleryDouble>
  );
};
const Griditems = () => {
  return <>{photoList.map(Photoitem)}</>;
};
const Grid = () => {
  return (
    <>
      <Gridcontainer id="container">
        <Griditems />
      </Gridcontainer>
    </>
  );
};

export default Grid;
