import {
  clientOne,
  clientTwo,
  clientThree,
  clientFour,
  clientFive,
  clientEight,
  clientSeven,
} from "@/assets";

interface Logo {
  name: string;
  src: string;
}
export const logos: Logo[] = [
  { name: "Bank muscat", src: clientOne },
  { name: "Cognizant", src: clientTwo },
  { name: "Temenos", src: clientThree },
  { name: "Sterling", src: clientFour },
  { name: "NAFC", src: clientFive },
  { name: "Stanbic Bank", src: clientSeven },
  { name: "Santander", src: clientEight },
];
