export const NAV_ITEMS = [
  { to: "/home", displayText: "Home" },
  { to: "/about", displayText: "About Us" },
  { to: "/product/cakes", displayText: "Cakes" },
  { to: "/product/ladoos", displayText: "Ladoos" },
];

export const PHONE_NUMBER = "+91 98180 19728";
export const EMAIL = "homechef@gmail.com";
export const HOME_ADDRESS = "A-5/334 IInd Floor, Paschim Vihar, New Delhi";
export const PIN_CODE = "110063";
export const INSTAGRAM = { url: "#", id: "insta" };
export const FACEBOOK = { url: "#", id: "facebook" };

export const PRODUCT_TYPE_LADDO = "ladoos";
export const PRODUCT_TYPE_CAKE = "cakes";

export const PRODUCTS = [
  {
    id: `${PRODUCT_TYPE_LADDO}-001`,
    name: "Laado",
    pricing: [{ price: "₹100/-", weight: "500gm" }],
    imgUrl:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/04/Godzilla-vs-kong-Skull-crawlers-Skull-island-.jpg",
    type: PRODUCT_TYPE_LADDO,
  },
  {
    id: `${PRODUCT_TYPE_LADDO}-002`,
    name: "Laado2",
    pricing: [{ price: "₹200/-", weight: "500gm" }],
    imgUrl:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/04/Godzilla-vs-kong-Skull-crawlers-Skull-island-.jpg",
    type: PRODUCT_TYPE_LADDO,
  },
  {
    id: `${PRODUCT_TYPE_LADDO}-003`,
    name: "Laado2",
    pricing: [{ price: "₹200/-", weight: "500gm" }],
    imgUrl:
      "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/04/Godzilla-vs-kong-Skull-crawlers-Skull-island-.jpg",
    type: PRODUCT_TYPE_LADDO,
  },
  {
    id: `${PRODUCT_TYPE_CAKE}-001`,
    name: "Tuti Frooti",
    pricing: [{ price: "₹100/-", weight: "500gm" }],
    imgUrl: "#",
    type: PRODUCT_TYPE_CAKE,
  },
];
