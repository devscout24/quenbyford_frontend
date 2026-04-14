
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from '@/components/ui/checkbox';

const MemberLogin = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-[700px]  h-[700px] border-gray-100 ring-0 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-4xl py-12 px-6 md:px-10 bg-white">
        <CardContent className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-5 mb-20">
            <h1 className="text-[32px] font-medium text-black">Members Portal Login</h1>
            <p className="text-black font-normal text-xl ">
              This site is for FCHCC members only. Not a member? Join from our{" "}
              <a href="#" className="text-[#1E88E5] hover:underline">Main Site!</a>
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <Label className="text-sm font-normal text-black ml-1">Username or Email Address</Label>
              <Input
                type="text"
                className="bg-[#F3F4F6] border-none h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-gray-300"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label className="text-sm font-normal text-black ml-1">Password</Label>
              <div className="relative">
                <Input
                  type="password"
                  className="bg-[#F3F4F6] border-none h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-gray-300 pr-10"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <Eye size={18} />
                </button>
              </div>
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-gray-300 rounded" />
                <label htmlFor="remember" className="text-xs font-normal text-black cursor-pointer">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-xs font-normal text-[#1E88E5] hover:underline">
                Forget Password
              </a>
            </div>

            {/* Login Button */}
            <Button className="w-full bg-[#FF7A1A] hover:bg-[#e66d17] text-white  h-12 rounded-full text-sm font-medium transition-all duration-300 shadow-md">
              Login
            </Button>
          </form>

          {/* Footer Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-600">
              Don’t have an account? <Link to="/register" className="text-blue-500 font-bold hover:underline cursor-pointer">Register</Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MemberLogin;