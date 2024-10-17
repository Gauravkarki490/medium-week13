import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
  id:string
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blogs/${id}`}>
    <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-md cursor-pointer">
      <div>
        <div className="flex ">
          <div className="">
            <Avatar name={authorName} size="small" />
          </div>
          <div className="font-extralight pl-2 flex justify-center flex-col text-sm">{authorName}</div>
       <div className="flex justify-center flex-col pl-2">
        <Circle />
       </div>
          <div className="pl-2 font-thin text-slate-500 flex justify-center flex-col text-sm">
            {publishedDate}
            </div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="text-xl font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-400 text-sm font-thin pt-2">{`${Math.floor(content.length / 100)} minute(s) read`}</div>
   
    </div>
    </Link>
  );
};

function Circle (){

    return <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
}
