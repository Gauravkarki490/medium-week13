
import { useState } from 'react';
import Auth from '../components/Auth';
import { Quote } from '../components/Quote';
import { SigninType } from '@gauravsingh/common';

const SignIn = () => {

    const [postInput, setPostInput] = useState<SigninType>({

        email: "",
        password: "",
      });
     
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <Auth type="signin"   inputField={postInput} setInputField={setPostInput} />
          </div>
    
          <div className="hidden lg:block">
            <Quote />
          </div>
        </div>
      );
}

export default SignIn