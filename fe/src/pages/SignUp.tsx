import { useState } from "react";
import Auth from "../components/Auth";
import { Quote } from "../components/Quote";
import { SignupType } from "@gauravsingh/common";
const SignUp = () => {
  const [postInput, setPostInput] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });
 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Auth type="signup" inputField={postInput} setInputField={setPostInput} />
      </div>

      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default SignUp;
