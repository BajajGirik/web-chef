import Veg from "../assets/Veg.png";
import TuttiFrooti1 from "../assets/TootiFrooti_Cake_001.jpg";
import TuttiFrooti2 from "../assets/TootiFrooti_Cake_002.jpg";
import TuttiFrooti3 from "../assets/TootiFrooti_Cake_003.jpg";
import ChocolateCake1 from "../assets/Chocolate_Cake_001.jpg";
import ChocolateCake2 from "../assets/Chocolate_Cake_002.jpg";
import ChocolateCake3 from "../assets/Chocolate_Cake_003.jpg";
import AllCakes1 from "../assets/All_Cakes_013.jpg";
import AllCakes2 from "../assets/All_Cakes_014.jpg";
import AllCakes3 from "../assets/All_Cakes_015.jpg";
import AllCakes4 from "../assets/All_Cakes_016.jpg";
import AllCakes5 from "../assets/All_Cakes_005.jpg";
import Logo from "../assets/Logo.png";

export const ROUTES = {
  LOGIN: "/auth/log-in",
  SIGNUP: "/auth/sign-up",
  HOME: "/",
  CAKE: "/product/cakes",
  LADOOS: "/product/ladoos",
  CART: "/cart",
  SHIPPING: "/shipping",
  ADD_SHIPPING_DETAILS: "/shipping/add",
  EDIT_SHIPPING_DETAILS: "/shipping/edit",
  TNC: "/tnc",
  PRIVACYPOLICY: "/privacypolicy",
  REFUNDPOLICY: "/refundpolicy",
};

export const NAV_ITEMS = [
  { to: ROUTES.HOME, displayText: "Home" },
  { to: ROUTES.CAKE, displayText: "Cakes" },
  { to: ROUTES.LADOOS, displayText: "Ladoos" },
  { to: ROUTES.CART, displayText: "Cart" },
];

export const HOME_PRODUCTS_LIST = [
  {
    carouselImgs: [AllCakes1, AllCakes2, AllCakes3, AllCakes4, AllCakes5],
    heading: "Cakes",
    starterDesc: "Get tasty, healthy ",
    boldTxt: "Home-Made",
    finalDesc: " cakes at a very low price.",
    btnLink: ROUTES.CAKE,
    btnText: "Order Cakes Now!",
  },
  {
    carouselImgs: [AllCakes1, AllCakes2, AllCakes3, AllCakes4, AllCakes5],
    heading: "Ladoos",
    starterDesc: "Get tasty, healthy ",
    boldTxt: "Home-Made",
    finalDesc: " ladoos at a very low price.",
    btnLink: ROUTES.LADOOS,
    btnText: "Order Ladoos Now!",
  },
];

export const PRODUCT_TYPE_LADDO = "ladoos";
export const PRODUCT_TYPE_CAKE = "cakes";
export const PRODUCTS = [
  {
    id: `${PRODUCT_TYPE_CAKE}-001`,
    name: "Tuti Frooti",
    pricing: [{ price: 100, weight: "500gm" }],
    imgUrl: [TuttiFrooti1, TuttiFrooti2, TuttiFrooti3],
    type: PRODUCT_TYPE_CAKE,
  },
  {
    id: `${PRODUCT_TYPE_CAKE}-002`,
    name: "Chocolate Cake",
    pricing: [{ price: 100, weight: "500gm" }],
    imgUrl: [ChocolateCake1, ChocolateCake2, ChocolateCake3],
    type: PRODUCT_TYPE_CAKE,
  },
  {
    id: `${PRODUCT_TYPE_CAKE}-003`,
    name: "Chocolate Cake",
    pricing: [{ price: 100, weight: "500gm" }],
    imgUrl: [ChocolateCake1, ChocolateCake2, ChocolateCake3],
    type: PRODUCT_TYPE_CAKE,
  },
  {
    id: `${PRODUCT_TYPE_CAKE}-004`,
    name: "Chocolate Cake",
    pricing: [{ price: 100, weight: "500gm" }],
    imgUrl: [ChocolateCake1, ChocolateCake2, ChocolateCake3],
    type: PRODUCT_TYPE_CAKE,
  },
];

export const VEG_ICON_URI = Veg;
export const LOGO = Logo;

export const PHONE_NUMBER = "+91 98180 19728";
export const EMAIL = "ambikaskitchen2034@gmail.com";
export const HOME_ADDRESS = "A-5/334 IInd Floor, Paschim Vihar, New Delhi";
export const PIN_CODE = "110063";
export const INSTAGRAM = {
  url: "https://www.instagram.com/ambika_kitchen2034/",
  id: "ambika_kitchen2034",
};
export const FACEBOOK = {
  url: "https://www.facebook.com/profile.php?id=100073953483206",
  id: "Ambika's Kitchen",
};
export const WHATSAPP_LINK = "https://wa.me/919990852682";
export const EMAIL_LINK = "mailto:" + EMAIL;
