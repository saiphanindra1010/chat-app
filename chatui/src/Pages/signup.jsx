import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const signup = () => {
  const [show, setShow] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const postDetails=(img)=>{

  }
  const submit=()=>{

  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign up to chat
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                Email address
              </label>
              <div className="mt-2">
                <Input />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <Input type="password" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Confirmation Password
                </label>
              </div>
              <div className="mt-2">
                <Input type="password" />
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label htmlFor="picture">Profile pic</label>
              <Input
                className="choosefile"
                id="picture"
                accept="image/*"
                type="file"
                onChange={()=>{
                  postDetails(e.target.files[0])
                }}
              />
            </div>
            <div className=" items-center ">
              <Button type="submit">Signup</Button>

              <Link to="Login" className="link" relative="/Login">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default signup;
