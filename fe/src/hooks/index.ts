import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
export interface Blog {
  "content":string
  "author": {
      "name":string
  }
  "title":string
  "publishedDate":string
  "id":string
}

export const useBlogs =()=>{

    const [loading ,setLoading] = useState(true)
    const [blogs ,setBlogs] = useState<Blog[]>([])

    const fetchBlogs = async ()=>{
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
        })
   
        setBlogs(response.data)
        setLoading(false)
    }
    useEffect(()=>{

        fetchBlogs()

    },[])

    return {loading,blogs}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Fetches a blog post by its id and returns the blog post.
 * Also returns a boolean indicating whether the data is loading.
 *
 * @param {string} id - the id of the blog post to fetch
 * @returns {{loading:boolean, blog:Blog}} where blog is the fetched blog post
 */
/******  f3fbdc9c-8ddb-4f3c-83b9-8b5c4929123f  *******/}

export const  useBlog = (id:string)=>{

    const [loading ,setLoading] = useState(true)
    const [blog,setBlog]=useState<Blog>({content:"",author:{name:""},title:"",publishedDate:"",id:""})
    const fetchBlog = async ()=>{
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      });
      setBlog(response.data)
      setLoading(false)
    }

    useEffect(()=>{
      fetchBlog()
    },[id])
    return {
      loading,
      blog
    }
}