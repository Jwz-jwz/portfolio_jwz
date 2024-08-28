import { Down } from "./Download";
import { Navname } from "./Navbarname";
import { CloseButton } from "./svg/CloseButton";
import { IconButton } from "./svg/IconButton";

import { MoonBUtton } from "./svg/MoonButton";

export const Menu = ({ isShow, visible, isDark, change }) => {
  return (
    <div
      className={`fixed ${
        isShow ? "left-[100%]" : "left-[0]"
      }   w-full px-[16px] z-50 bg-white py-[4px] flex justify-center items-center`}
    >
      <div className={`container flex flex-col px-[32px gap-[24px]`}>
        <div className="flex justify-between">
          <a
            className=" text-[30px] font-[400] leading-[36px] text-center"
            href=""
          >
            Tom
          </a>
          <button className="flex md:hidden" onClick={visible}>
            <CloseButton />
          </button>
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
