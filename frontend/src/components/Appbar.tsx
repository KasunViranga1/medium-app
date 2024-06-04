import { AvatarName } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="flex justify-between px-10 border-b py-4 ">
      <div className="flex justify-center flex-col">Medium</div>
      <div>
        <AvatarName size={"big"} name="Kasun" />
      </div>
    </div>
  );
};
