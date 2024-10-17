import { Blog } from "../hooks";
import { Avatar } from "./Avatar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const { title, content, publishedDate, author } = blog;
  return (
    <div className="flex justify-center flex-col">
      <div className="grid grid-cols-12 px-10 w-screen pt-200 max-w-screen-xl pt-12">
        <div className="col-span-8 ">
          <div className="text-5xl font-extrabold">{title}</div>
          <div className=" text-slate-500 pt-2">
            Posted on{" "}
            {publishedDate.split("T")[0].split("-").reverse().join("/")}
          </div>
          <div className="pt-2">{content}</div>
        </div>
        <div className="col-span-4 ">
          <div className="text-2xl">Author</div>
          <div className="flex justify-center ">
            <div className="flex justify-center flex-col p-2">
              <Avatar name={author.name} size="big" />
            </div>
            <div>
              <div className="text-2xl font-bold p-2">{author.name}</div>
              <div className="text-slate-500 p-2">
                Master of mirth,purveyor of puns, and the funniest person in the
                world
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
