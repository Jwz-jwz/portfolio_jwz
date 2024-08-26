import { HeroBody } from "@/components/HeroBody";
import { HeaderNavi } from "../components/HeaderNavi";
import { BodyOne } from "@/components/BodyOne";
import { BodySecond } from "@/components/BodySecond";
import { BodyThird } from "@/components/BodyTthird";
import { BodyFourth } from "@/components/BodyFourth";
import { BodyFifth } from "@/components/BodyFifth";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Menu } from "@/components/Menu";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const change = () => {
    setIsDark(!isDark);
  };
  const show = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="">
      <Menu isVisible={isVisible} />
      <HeaderNavi isDark={isDark} change={change} />
      <HeroBody />
      <BodyOne />
      <BodySecond />
      <BodyThird />
      <BodyFourth />
      <BodyFifth />
      <Footer />
    </div>
  );
}
