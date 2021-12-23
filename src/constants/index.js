import Veg from "../assets/Veg.png";
import TuttiFrooti1 from "../assets/TootiFrooti_Cake_001.jpg";
import TuttiFrooti2 from "../assets/TootiFrooti_Cake_002.jpg";
import TuttiFrooti3 from "../assets/TootiFrooti_Cake_003.jpg";
import ChocolateCake1 from "../assets/Chocolate_Cake_001.jpg";
import ChocolateCake2 from "../assets/Chocolate_Cake_002.jpg";
import ChocolateCake3 from "../assets/Chocolate_Cake_003.jpg";

export const NAV_ITEMS = [
  { to: "/home", displayText: "Home" },
  { to: "/product/cakes", displayText: "Cakes" },
  { to: "/product/ladoos", displayText: "Ladoos" },
  { to: "/cart", displayText: "Cart" },
];

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
export const VEG_ICON_URI = Veg;

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
];
