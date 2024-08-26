import { Main_head } from "./Main_head";
import { MainHeadSecond } from "./MainHeadSecond";
import { Upwork } from "./Upwork";

export const BodyThird = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] flex justify-center items-cente bg-[#F9FAFB]">
      <div className="container  px-[32px] flex flex-col gap-[48px]">
        <div className="flex flex-col justify-center items-center gap-[16px]">
          <Main_head head={"Experience"} />
          <MainHeadSecond
            headsecond={
              "Here is a quick summary of my most recent experiences:"
            }
          />
        </div>
        <div className="flex flex-col items-center gap-[48px]">
          <Upwork
            head={"Team Lead"}
            list_one={"Sed quis justo ac magna."}
            list_two={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            list_three={"Sed quis justo ac magna."}
            list_four={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            date={"Jul 2017 - Oct 2021"}
          />
          <Upwork
            head={"Team Lead"}
            list_one={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            list_two={
              "Ut pretium arcu et massa semper, id fringilla leo semper."
            }
            list_three={"Sed quis justo ac magna."}
            list_four={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            date={"Nov 2021 - Present"}
          />
          <Upwork
            head={"Full Stack Developer"}
            list_one={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            list_two={
              "Ut pretium arcu et massa semper, id fringilla leo semper."
            }
            list_three={"Sed quis justo ac magna."}
            list_four={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }
            date={"Dec 2015 - May 2017"}
          />
        </div>
      </div>
    </div>
  );
};
