interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b border-slate-200 pb-4 pt-4">
      <div className="flex">
        <div>
          <AvatarName name={authorName} />
        </div>
        <div className="flex justify-center flex-col font-extralight pl-2 text-sm ">
          {authorName}
        </div>
        <div className="flex justify-center flex-col pl-2">
          <Circle />
        </div>
        <div className="pl-2 font-light text-slate-400 flex justify-center flex-col">
          {publishedDate}
        </div>
      </div>
      <div className="font-semibold text-xl pt-2">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="font-thin text-sm text-slate-500 pt-4">{`${Math.ceil(
        content.length / 100
      )} min read`}</div>
    </div>
  );
};

function Circle() {
  return <div className="w-1 h-1 rounded-full bg-slate-300 "></div>;
}

export function AvatarName({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        }font-extralight  text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
