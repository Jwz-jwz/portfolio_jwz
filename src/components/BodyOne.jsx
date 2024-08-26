import { Main_head } from "./Main_head";

export const BodyOne = () => {
  return (
    <div className="w-full px-[16px] py-[64px] md:px-[80px] md:py-[96px] flex justify-center items-center bg-[#F9FAFB]">
      <div className="container md:px-[32px] flex flex-col gap-[48px] justify-center ">
        <div className="flex justify-center">
          <Main_head head={"About me"} />
        </div>
        <div className=" md:flex gap-[48px] justify-between">
          <div className="flex md:hidden justify-center">
            <img src="./mobilesecond.png" alt="" />
          </div>
          <div className="md:w-[50%] hidden md:flex ">
            <img
              className="shadow-[-35px_35px_rgba(0,0,0,0.3)] border-l-[15px] border-b-[15px] border-[white]"
              src="./propic.png"
              alt=""
            />
          </div>
          <div className="md:w-[50%] flex flex-col gap-[24px]">
            <p className="text-[30px] font-[600] leading-[36px]">
              Curious about me? Here you have it:{" "}
            </p>
            <div className="flex flex-col gap-[16px] text-[#4B5563] text-[16px] font-[400] leading-[24px]">
              <p>
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex gap-[10px]">
                <div className="w-[50%]">
                  <ul className="list-disc px-[18px] flex flex-col gap-[16px]">
                    <li>B.E. in Computer Engineering</li>
                    <li>Full time freelancer</li>
                  </ul>
                </div>
                <div className="w-[50%]">
                  <ul className="list-disc w-[50%]">
                    <li>Avid learner</li>
                  </ul>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
