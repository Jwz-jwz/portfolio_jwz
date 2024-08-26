import { Main_head } from "./Main_head";
import { ArrowButton } from "./svg/ArrowButton";

export const ExplainCard = ({ head, text }) => {
  return (
    <div className="container md:flex justify-center shadow-md">
      <div className="md:w-[50%] p-[48px] rounded-l-[12px] bg-[#F9FAFB] flex justify-center">
        <img src="./Picture.png" alt="" />
      </div>
      <div className="md:w-[50%] flex flex-col gap-[24px] p-[48px]">
        <p className="text-[20px] font-[600] leading-[28px] text-[#111827]">
          {head}
        </p>
        <p className="flex flex-col gap-[4px] text-[16px] font-[400] leading-[24px] text-[#4B5563] ">
          {text}
        </p>
        <div className="flex  flex-wrap  gap-[8px]">
          <Main_head head={"React"} />
          <Main_head head={"Next.js"} />
          <Main_head head={"Typescript"} />
          <Main_head head={"Nest.js"} />
          <Main_head head={"PostgreSQL"} />
          <Main_head head={"Tailwindcss"} />
          <Main_head head={"Figma"} />
          <Main_head head={"Cypress"} />
          <Main_head head={"Storybook"} />
          <Main_head head={"Git"} />
        </div>
        <ArrowButton />
      </div>
    </div>
  );
};
