import { Navname } from "./Navbarname";
import { Down } from "./Download";
import { IconButton } from "./svg/IconButton";
import { MenuIcon } from "./svg/MenuIcon";
import { MoonBUtton } from "./svg/MoonButton";

export const HeaderNavi = ({ change, visible, isDark }) => {
  return (
    <div className="w-full px-[16px] py-[4px] md:px-[80px] md:py-[16px] flex justify-center items-center">
      <div className="container flex justify-between px-[32px]">
        <a
          className=" text-[30px] font-[400] leading-[36px] text-center"
          href=""
        >
          Tom
        </a>
        <div className="hidden md:flex gap-[24px] ">
          <div className="flex gap-[24px] items-center">
            <Navname name={"About"} />
            <Navname name={"Work"} />
            <Navname name={"Testimonials"} />
            <Navname name={"Contact"} />
            <p className="h-[24px] border-l-[1px]"></p>
          </div>
          <button onClick={change}>
            {isDark ? <MoonBUtton /> : <IconButton />}
          </button>
          <div className="flex gap-[16px]">
            <Down />
          </div>
        </div>

        <button className="flex md:hidden" onClick={visible}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};
