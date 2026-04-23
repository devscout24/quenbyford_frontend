import  { useState } from 'react';
import { Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const RegisterAccount = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gray-100/50 flex items-center justify-center p-6 ">
      <Card className="w-full max-w-187 h-auto border-gray-200 ring-0 shadow-[0_20px_60px_rgba(0,0,0,0.1)] rounded-[35px] py-12 px-6 md:px-10 bg-white">
        <CardContent className="">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-[32px] font-medium text-black">
              {isLogin ? "Log in to Your Account" : "Register your Account"}
            </h1>
            <p className="text-black text-xl font-medium mt-4">
              {isLogin ? "Welcome back! Please log in." : "FCHCC members only"}
            </p>
          </div>

          {!isLogin ? (
           <form className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-normal text-black mb-1">Username</label>
            <input 
              type="text" 
              className="w-full bg-[#F4F4F4] border-none rounded-lg p-3  outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-normal text-black mb-1">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-[#F4F4F4] border-none rounded-lg p-3  outline-none"
            />
          </div>

          {/* Password Fields */}
          <div className="relative">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <div className="relative">
              <input 
                type="password" 
                className="w-full bg-[#F4F4F4] border-none rounded-lg p-3 pr-10 outline-none"
              />
              <Eye className="absolute right-3 top-3 text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
          </div>

          <div className="relative">
           <label className="block text-sm font-normal text-black mb-1">Repeat Password</label>
            <div className="relative">
              <input 
                type="password" 
                className="w-full bg-[#F4F4F4] border-none rounded-lg p-3 pr-10 outline-none"
              />
              <Eye className="absolute right-3 top-3 text-gray-400 w-5 h-5 cursor-pointer" />
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="block text-sm font-normal text-black mb-1">First Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F4F4F4] border-none rounded-lg p-3 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-normal text-black mb-1">Last Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F4F4F4] border-none rounded-lg p-3 outline-none"
              />
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="flex items-center gap-2 py-2">
            <input type="checkbox" className="rounded border-gray-300" id="privacy" />
            <label htmlFor="privacy" className="text-xs text-gray-600">
              I agree to the <a href="#" className="text-blue-500 underline">privacy Policy</a>
            </label>
          </div>

          {/* Membership Level Box */}
          {/* <div className="bg-[#1E88E5]/20 rounded-lg p-4 flex items-center justify-between">
            <span className="text-black text-lg font-normal">Membership Level-</span>
            <div className="bg-[#1E88E5] text-white px-4 py-2 rounded-lg text-sm font-normal flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              FCHCC Active Members
            </div>
          </div> */}

          {/* Submit Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors mt-4">
            Register
          </button>
        </form>
          ) : (
            <form className="space-y-5">
              {/* Login Form */}
              <div className="space-y-1.5">
                <Label className="text-[13px] font-bold text-slate-800 ml-1">Email Address</Label>
                <Input type="email" className="bg-[#F3F4F6] border-none h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-gray-300" />
              </div>

              <div className="space-y-1.5">
                <Label className="text-[13px] font-bold text-slate-800 ml-1">Password</Label>
                <div className="relative">
                  <Input type="password" className="bg-[#F3F4F6] border-none h-12 rounded-xl pr-10" />
                  <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" size={18} />
                </div>
              </div>

              <Button className="w-full bg-[#FF7A1A] hover:bg-[#e66d17] text-white font-bold h-12 rounded-full mt-4 shadow-sm text-sm">
                Log in
              </Button>
            </form>
          )}

          {/* Footer */}
          <div className="text-center pt-10">
            <p className="text-sm text-gray-600">
              {isLogin ? (
                <>
                  Don’t have an account? <a onClick={() => setIsLogin(false)} className="text-blue-500 font-bold hover:underline cursor-pointer">Register</a>
                </>
              ) : (
                <>
                  Already have an account? <a onClick={() => setIsLogin(true)} className="text-blue-500 font-bold hover:underline cursor-pointer">Log in</a>
                </>
              )}
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterAccount;