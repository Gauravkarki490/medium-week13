import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({
    title: "",
    content: "",
  });
  const handlePublish = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          ...article,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("sucess");
      //console.log(response)
      navigate(`/blogs/${response.data.id}`);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <form>
      <div className="flex justify-center flex-col mt-10">
        <div className="mb-6 w-screen px-10 max-w-screen-lg">
          <textarea
            id="large-input"
            className="block w-full p-4 text-gray-900  rounded-lg bg-gray-50 text-base focus:outline-none"
            placeholder="Title"
            required
            onChange={(prev) => {
              setArticle({ ...article, title: prev.target.value });
            }}
          />
        </div>

        <div className="mb-6 w-screen px-10 max-w-screen-lg">
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50  ">
            <div className="px-4 py-2 bg-white rounded-t-lg  ">
              <textarea
                id="Content"
                rows={4}
                className="w-full px-0 text-sm text-gray-900 bg-white border-0  h-[50vh] focus:outline-none"
                placeholder="Write an Article..."
                required
                onChange={(prev) => {
                  setArticle({ ...article, content: prev.target.value });
                }}
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t ">
              <button
                type="button"
                className="mr-6 text-white bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handlePublish}
                disabled={article.title === "" || article.content === ""}
              >
                Publish Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
