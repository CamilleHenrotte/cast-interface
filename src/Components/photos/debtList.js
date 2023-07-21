import axa from "./AXA_Logo.svg.png";
import creditAgricole from "./credit-agricole.svg.png";
import socgen from "./socgen.png";
const descriptionLorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore …";
const debtList = [
  {
    photo: axa,
    title: "Axa Invest Web 3",
    description: descriptionLorem,
    price: 105.44289,
    quantity: "1.5M",
    coupon: "5.05%",
    maturity: "2041-06-15",
  },
  {
    photo: creditAgricole,
    title: "Crédit Agricole bond",
    description: descriptionLorem,
    price: 148.443871,
    quantity: "75M",
    coupon: "2.25%",
    maturity: "2033-05-15",
  },

  {
    photo: socgen,
    title: "Société Générale",
    description: descriptionLorem,
    price: 98.443871,
    quantity: "10M",
    coupon: "3.75%",
    maturity: "2028-11-10",
  },
];

export default debtList;
