
import { Link } from 'react-router-dom'

const AuthHeader = ({type}:{type: "signin" | "signup"}) => {
  return (
    <div>

    <div className="text-xl md:text-3xl font-extrabold ">Create an account</div>
    <div className="text-slate-400 text-center">
      {type === "signin" ? "Don't have an account?":"Already have an account?"}
      <Link className="pl-2 underline" to={ type==="signin"?"/signup":"/signin"}>
        {type==="signin"?"Sign up":"Sign in"}
      </Link>
    </div>
    </div>
  )
}

export default AuthHeader