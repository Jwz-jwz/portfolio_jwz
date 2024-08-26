import { Dot, IconCat, IconFace, IconTweer, Location } from "./svg/HeroIcons";
export const HeroBody = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] flex flex-col md:flex justify-center items-center ">
      <div className="container md:px-[32px] md:flex justify-between gap-[48px]">
        <div className="flex md:hidden justify-center">
          <img src="./mobileone.png" alt="" />
        </div>
        <div className="md:w-[50%]  flex flex-col gap-[48px]">
          <div className=" flex flex-col gap-[8px]">
            <a className="text-[60px] font-[700] leading-[72px]" href="">
              Hi, I’m Tom 👋
            </a>
            <p className="text-[16px] font-[400] leading-[24px] text-[#4B5563]">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className=" flex flex-col gap-[8px]">
            <div className="flex gap-[8px]">
              <Location />
              <p className="text-[16px] font-[400] leading-[24px] text-[#4B5563]">
                Ulaanbaatar, Mongolia
              </p>
            </div>
            <div className="flex gap-[8px]">
              <Dot />
              <p className="text-[16px] font-[400] leading-[24px] text-[#4B5563]">
                Available for new projects
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex gap-[4px]">
            <IconCat />
            <IconTweer />
            <IconFace />
          </div>
        </div>
        <div className="md:w-[50%] hidden md:flex justify-end">
          <img
            className="shadow-[35px_35px_rgba(0,0,0,0.3)] border-r-[15px] border-b-[15px] border-[white]"
            src="./propic.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

//left-[248px] left-[288px]
