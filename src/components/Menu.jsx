import { Down } from "./Download";
import { Navname } from "./Navbarname";
import { IconButton } from "./svg/IconButton";
import { MenuIcon } from "./svg/MenuIcon";
import { MoonBUtton } from "./svg/MoonButton";

export const Menu = ({ isVisible, change, isDark }) => {
  return (
    <div
      className={`absolute w-full px-[16px] py-[4px] flex justify-center items-center`}
    >
      <div className="container flex flex-col px-[32px gap-[24px]">
        <div className="flex justify-between">
          <a
            className=" text-[30px] font-[400] leading-[36px] text-center"
            href=""
          >
            Tom
          </a>
          <div className="flex md:hidden">
            <MenuIcon />
          </div>
        </div>
        <p className="container border-t-[1px]"></p>

        <Navname name={"About"} />
        <Navname name={"Work"} />
        <Navname name={"Testimonials"} />
        <Navname name={"Contact"} />

        <div className="flex justify-between">
          <Navname name={"Switch"} />

          <button onClick={change}>
            {isDark ? <MoonBUtton /> : <IconButton />}
          </button>
        </div>

        <p className="container border-t-[1px]"></p>

        <Down />
      </div>
    </div>
  );
};
