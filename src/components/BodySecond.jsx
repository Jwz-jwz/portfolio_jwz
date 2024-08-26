import { BodySecondAll } from "./BodySecAll";
import { Main_head } from "./Main_head";
import { MainHeadSecond } from "./MainHeadSecond";
import { CypressIcon } from "./svg/CypressIcon";
import { Expressicon } from "./svg/Expressicon";
import { FigmaIcon } from "./svg/FigmaIcon";
import { GitIcon } from "./svg/GitIcon";
import { Javascript } from "./svg/Javascripticon";
import { Mongoicon } from "./svg/MongoDB";
import { Nesticon } from "./svg/Nesticon";
import { Nexticon } from "./svg/Nexticon";
import { Nodeicon } from "./svg/Nodeicon";
import { Postdreicon, PostgreSQl } from "./svg/PostgreSQL";
import { Reacticon } from "./svg/Reacticon";
import { Sassicon } from "./svg/Sass";
import { Socketicon } from "./svg/Socket";
import { StorybookIcon } from "./svg/StorybookIcon";
import { Tailwindicon } from "./svg/Tailwind";
import { Typescript } from "./svg/Typescripticon";

export const BodySecond = () => {
  return (
    <div className="w-full px-[16px] py-[64px] flex justify-center items-center md:px-[80px] md:py-[96px]">
      <div className="container md:px-[32px] flex flex-col gap-[48px] items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <Main_head head={"Skills"} />
          <MainHeadSecond
            headsecond={
              "The skills, tools and technologies I am really good at:"
            }
          />
        </div>
        <div className="w-full  flex flex-col gap-[48px]">
          <div className="grid grid-cols-3 grid-rows-6 md:grid-cols-8 md:grid-rows-2 gap-[48px]  ">
            <BodySecondAll icon={<Javascript />} text={"Javascript"} />
            <BodySecondAll icon={<Typescript />} text={"Typescript"} />
            <BodySecondAll icon={<Reacticon />} text={"React"} />
            <BodySecondAll icon={<Nexticon />} text={"Next.js"} />
            <BodySecondAll icon={<Nodeicon />} text={"Node.js"} />
            <BodySecondAll icon={<Expressicon />} text={"Express.js"} />
            <BodySecondAll icon={<Nesticon />} text={"Nest.js"} />
            <BodySecondAll icon={<Socketicon />} text={"Socket.io"} />
            <BodySecondAll icon={<Mongoicon />} text={"MongoDB"} />
            <div>
              <img src="icon-postgresql.png" alt="" />
              <p className="text-[18px] font-[400] leading-[28px] mt-[9px]">
                PostgreSQL
              </p>
            </div>
            <BodySecondAll icon={<Sassicon />} text={"Sass/Scss"} />
            <BodySecondAll icon={<Tailwindicon />} text={"Tailwindcss"} />
            <BodySecondAll icon={<FigmaIcon />} text={"Figma"} />
            <BodySecondAll icon={<CypressIcon />} text={"Cypress"} />
            <BodySecondAll icon={<StorybookIcon />} text={"Storybook"} />
            <BodySecondAll icon={<GitIcon />} text={"Git"} />
          </div>
        </div>
      </div>
    </div>
  );
};
