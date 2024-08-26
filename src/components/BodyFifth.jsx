import { Main_head } from "./Main_head";
import { MainHeadSecond } from "./MainHeadSecond";
import { IconCat, IconFace, IconTweer } from "./svg/HeroIcons";
import { MessageIcon } from "./svg/MessageIcon";
import { PhoneIcon } from "./svg/PhoneIcon";
import { Window } from "./svg/Window";

export const BodyFifth = () => {
  return (
    <div className="w-full px-[80px] py-[96px] flex justify-center items-center">
      <div className="container  px-[32px] flex flex-col gap-[48px]">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <Main_head head={"Get in touch"} />
          <MainHeadSecond
            headsecond={
              "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."
            }
          />
        </div>
        <div className="flex gap-[20px] justify-center">
          <MessageIcon />
          <p className="text-[36px] font-[600] leading-[40px] ">
            tom@pinecone.mn
          </p>
          <Window />
        </div>
        <div className="flex gap-[20px] justify-center">
          <PhoneIcon />
          <p className="text-[36px] font-[600] leading-[40px] ">
            tom@pinecone.mn
          </p>
          <Window />
        </div>
        <div className="flex flex-col gap-[20px] items-center">
          <MainHeadSecond
            headsecond={"You may also find me on these platforms!"}
          />
          <div className="flex gap-[16px]">
            <IconCat />
            <IconTweer />
            <IconFace />
          </div>
        </div>
      </div>
    </div>
  );
};
