import LabeledInput from "./LabeledInput";
import Button from "./Button";
import AuthHeader from "./AuthHeader";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Auth = ({
  type,
  setInputField,
  inputField,
}: {
  type: "signup" | "signin";
  setInputField: Function;
  inputField: object;
}) => {
  //console.log(inputField)
  const navigate = useNavigate();
  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`, {
        ...inputField,
      });
      const jwt = response.data.jwt;
      //console.log(jwt)
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      //console.log(e)
    }
  }
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="">
          <div className="px-10">
            <AuthHeader type={type} />
          </div>
          <div className="pt-6 ">
            {type === "signup" && (
              <LabeledInput
                label="Username"
                placeholder="Enter your username"
                onChange={(e) => {
                  setInputField((prev: any) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            )}
            <LabeledInput
              label="Email"
              placeholder="Email"
              onChange={(e) => {
                setInputField((prev: any) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />
            <LabeledInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setInputField((prev: any) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <div className="mt-8">
              <Button
                label={type === "signup" ? "Sign up" : "Sign in"}
                onclick={sendRequest}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
