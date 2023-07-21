import { createGlobalStyle } from "styled-components";
import fontUrlPoppinsRegular from "./Poppins-Regular.ttf";
import fontUrlPoppinsSemiBold from "./Poppins-SemiBold.ttf";
const GlobalStyle = createGlobalStyle`

:is(h1, h2, h3, h4, h5, h6) {
font-family:  "Poppins-Regular";

};
 p {
    font-family:  "Poppins-SemiBold";
}

;

@font-face {
  font-family: "Poppins-Regular";
  src: local('FontName'), url(${fontUrlPoppinsRegular}) format('ttf');
};
@font-face {
  font-family: "Poppins-SemiBold";
  //src:  url(${fontUrlPoppinsSemiBold}) format('ttf');
  src: @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
};


`;

export default GlobalStyle;
