'use client'

import React from "react";
import Layout from "../components/layout";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import { useState , ChangeEvent , MouseEventHandler   } from "react";
import Link from "next/link";
import { Login } from "@/utils/Auth";
import { Toaster, toast } from 'sonner'


const Page = () => {

  interface UserLoginDataProps {
    Email: string;
    Password: string;
  }

  const initialUserData:UserLoginDataProps = {
    Email: '',
    Password: '',
  };

  const [userData, setUserData] = useState<UserLoginDataProps>(initialUserData);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      Email: event.target.value,
    });
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      Password: event.target.value,
    });
  };


  const handleLogin:MouseEventHandler<HTMLButtonElement> = (e)  => {
      e.preventDefault()
      try {
        Login(userData).then(() => {
         toast.success("Login Succesfully , bouhalla tell me what next?")
        }).catch((err) => {
          toast.error(err?.response?.data?.message)
        })
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <Layout>
      <main className="flex flex-col items-center px-3rem mt-[2rem]">
      <h1 className="font-bold text-2xl my-3">Login Page</h1>
      <span className="text-xs text-center">Lorem ipsum dolor sit amet consectetur  <br />
      adipisicing elit. 
      </span>

      <div className="my-3">
        <label className="text-xs">Email <span className="text-red-500">*</span></label>
        <Input className="text-xs input_auth" onChange={handleEmailChange} placeholder="Email" type="email" value={userData.Email} />
      </div>

      <div className="my-2">
        <label className="text-xs">Password <span className="text-red-500">*</span></label>
        <Input className="text-xs input_auth" onChange={handlePassword} placeholder="******" type="password" value={userData.Password} />
      </div>

      <Button  content="login" className="btn_auth mt-4" isPrimary={true} onClick={handleLogin}  />
      <div className="flex flex-col text-center mt-5">
      <span className="text-xs text-light">U dont have a account ?</span>
      <Link className="text-xs text-red-500" href={`/register`}>click here to register</Link>
      </div>
      </main>
      <Toaster  />
    </Layout>
  );
};

export default Page;
