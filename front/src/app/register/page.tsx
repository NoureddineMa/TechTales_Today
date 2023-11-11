'use client'

import React from 'react'
import Layout from '../components/layout'
import { useState , ChangeEvent , MouseEventHandler } from 'react'
import Link from "next/link";
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';
import { Register } from '@/helpers/Auth';
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation';


const Page = () => {


  const router = useRouter()


  interface UserLoginDataProps {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
  }

  const initialUserData: UserLoginDataProps = {
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
  };

  const [userData, setUserData] = useState<UserLoginDataProps>(initialUserData);

  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      FirstName: event.target.value,
    });
  };
  const handlelastName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      LastName: event.target.value,
    });
  };

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


  const handleRegister:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    try {
      Register(userData).then((res) => {
        toast.success(res.data.message)
        setTimeout(() => {
          router.push('/login')
        },1000)
        console.log(res)
      }).catch((err) => {
        toast.error(err?.response?.data?.message)
        console.log(err)
      })
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Layout>
      <main className="flex flex-col items-center px-3rem">
        <h1 className="font-bold text-2xl my-2">Register Page</h1>
        <span className="text-xs text-center">Lorem ipsum dolor sit amet consectetur  <br />
          adipisicing elit.
        </span>

        <div className="my-2">
          <label className="text-xs">First Name <span className="text-red-500">*</span></label>
          <Input className="text-xs input_auth" onChange={handleFirstName} placeholder="First Name" type="text" value={userData.FirstName} />
        </div>

        <div className="my-2">
          <label className="text-xs">Last Name <span className="text-red-500">*</span></label>
          <Input className="text-xs input_auth" onChange={handlelastName} placeholder="Last Name" type="text" value={userData.LastName} />
        </div>

        <div className="my-2">
          <label className="text-xs">Email <span className="text-red-500">*</span></label>
          <Input className="text-xs input_auth" onChange={handleEmailChange} placeholder="Email" type="email" value={userData.Email} />
        </div>

        <div className="my-2">
          <label className="text-xs">Password <span className="text-red-500">*</span></label>
          <Input className="text-xs input_auth" onChange={handlePassword} placeholder="******" type="password" value={userData.Password} />
        </div>

        <Button  content="Register" className="btn_auth mt-4" isPrimary={true} onClick={handleRegister} />
        <div className="flex flex-col text-center mt-5">
          <span className="text-xs text-light">Already have a account ?</span>
          <Link className="text-xs text-red-500" href={`/login`}>click here to login</Link>
        </div>

      </main>
      <Toaster />
    </Layout>
  )
}

export default Page
