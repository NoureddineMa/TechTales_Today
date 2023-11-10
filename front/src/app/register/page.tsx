'use client'

import React from 'react'
import Layout from '../components/layout'
import { useState , useEffect , ChangeEvent } from 'react'
import Link from "next/link";
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';

const Page = () => {


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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
     <Layout>
        <main className="flex flex-col items-center px-3rem">
      <h1 className="font-bold text-2xl my-2">Register Page</h1>
      <span className="text-xs text-center">Lorem ipsum dolor sit amet consectetur  <br />
       adipisicing elit. 
      </span>

      <div className="my-2">
        <label className="text-xs">First Name <span className="text-red-500">*</span></label>
        <Input className="text-xs input_auth" onChange={handleInputChange} placeholder="First Name" type="text" value={userData.FirstName} />
      </div>

      <div className="my-2">
        <label className="text-xs">Last Name <span className="text-red-500">*</span></label>
        <Input className="text-xs input_auth" onChange={handleInputChange} placeholder="Last Name" type="text" value={userData.LastName} />
      </div>

      <div className="my-2">
        <label className="text-xs">Email <span className="text-red-500">*</span></label>
        <Input className="text-xs input_auth" onChange={handleInputChange} placeholder="Email" type="email" value={userData.Email} />
      </div>

      <div className="my-2">
        <label className="text-xs">Password <span className="text-red-500">*</span></label>
        <Input className="text-xs input_auth" onChange={handleInputChange} placeholder="******" type="password" value={userData.Password} />
      </div>

      <Button  content="Register" className="btn_auth mt-4" isPrimary={true} onClick={() => console.log(userData)}  />
      <div className="flex flex-col text-center mt-5">
      <span className="text-xs text-light">Already have a account ?</span>
      <Link className="text-xs text-red-500" href={`/login`}>click here to login</Link>
      </div>

      </main>
     </Layout>
    )
}

export default Page
