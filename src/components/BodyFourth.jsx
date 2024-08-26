import { ExplainCard } from "./ExplainCard";
import { ExplainCardSecond } from "./ExplainCardSecond";

import { Main_head } from "./Main_head";
import { MainHeadSecond } from "./MainHeadSecond";

export const BodyFourth = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] flex justify-center items-center">
      <div className="container px-[32px] flex flex-col gap-[48px] justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <Main_head head={"Work"} />
          <MainHeadSecond
            headsecond={"Some of the noteworthy projects I have built:"}
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-[48px]">
          <ExplainCard
            head={"UBCab"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            }
          />
          <ExplainCardSecond
            head={"Mentorhub"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            }
          />
          <ExplainCard
            head={"iToim"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
            }
          />
        </div>
      </div>
    </div>
  );
};
