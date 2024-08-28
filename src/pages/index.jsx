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
  const [isShow, setIsShow] = useState(false);

  const change = () => {
    setIsDark(!isDark);
  };
  const showMenu = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="">
      <Menu
        isDark={isDark}
        isShow={isShow}
        change={change}
        visible={showMenu}
      />
      <HeaderNavi isDark={isDark} change={change} visible={showMenu} />
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
