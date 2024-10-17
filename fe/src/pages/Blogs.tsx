import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";



export const Blogs = () => {

    const {loading,blogs}= useBlogs()  
    if(loading){
        return <BlogSkeleton/>
    }
  return ( 
    <div >
        {blogs.map((blog) => (
            <BlogCard 
            key={blog.id}
            id={blog.id}
            authorName={blog.author.name||"Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={blog.publishedDate.split("T")[0].split("-").reverse().join("/")}
            />
        ))}
    </div>
  );
};
