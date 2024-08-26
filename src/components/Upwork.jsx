export const Upwork = ({
  head,
  list_one,
  list_two,
  list_three,
  list_four,
  date,
}) => {
  return (
    <div className="md:flex  rounded-[12px] bg-[#FFFFFF]  p-[32px] drop-shadow-md">
      <div className="md:flex justify-between gap-[48px]">
        <div className="">
          <img className="" src="./upwork.png" alt="" />
        </div>
        <div className="flex flex-col gap-[16px] w-[384px]">
          <p className="text-[20px] font-[600] leading-[28px] text-[#111827]">
            {head}
          </p>
          <ul className="flex flex-col gap-[4px] text-[16px] font-[400] leading-[24px] text-[#4B5563] list-disc ml-[25px]">
            <li>{list_one}</li>
            <li>{list_two}</li>
            <li>{list_three}</li>
            <li>{list_four}</li>
          </ul>
        </div>
        <p className="text-[16px] font-[400] leading-[24px] text-[#374151] w-[146px]]">
          {date}
        </p>
      </div>
    </div>
  );
};
