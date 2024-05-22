import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react"
import companyLogo from '../assets/vite.svg';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function Homepage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
        Log in to your account
          </h2>
          <img className="mt-10 center" width={20} src={companyLogo} alt="logo"/> 
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
                <Input type="email" />
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
                <div className="text-sm">
                  <a href="#" className="font-semibold  ">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input type="password" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button type="submit">Log in</Button>

              
       
                <Link to="signup" className="link" relative="/">
                       Signup
                </Link>
  
            </div>
            <Alert  className="h-20 w-30">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Guesuser1@tchat.com</AlertTitle>
  <AlertDescription>
    Password: testnet2
  </AlertDescription>
</Alert>
<Alert  className="h-20 w-30">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Guesuser1@tchat.com</AlertTitle>
  <AlertDescription>
    Password: testnet1
  </AlertDescription>
</Alert>


          </form>
        </div>
      </div>
    </>
  );
}
export default Homepage;
