export const BodySecondAll = ({ icon, text }) => {
  return (
    <div className="w-[88px] h-[100px] flex flex-col gap-[8px] items-center">
      <div>{icon}</div>
      <p className="text-[18px] font-[400] leading-[28px] ">{text}</p>
    </div>
  );
};
//
