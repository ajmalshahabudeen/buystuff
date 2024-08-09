import { Merriweather, Poppins, Gluten } from "next/font/google";

export const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const gluten = Gluten({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});