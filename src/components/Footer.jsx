import { FinalIcon } from "./svg/FinalIcon";

export const Footer = () => {
  return (
    <div className="w-full px-[80px] py-[24px] flex justify-center items-center bg-[#F9FAFB]">
      <div className="px-[32px] flex justify-center flex-wrap gap-[8px]">
        <FinalIcon />
        <p className="text-[14px] font-[400] leading-[20px]">
          2024 | Greetings with ❤️️ from Ulaanbaatar
        </p>
      </div>
    </div>
  );
};
