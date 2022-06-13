import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import login1 from "../public/assets/login/login1.svg";
import login2 from "../public/assets/login/login2.svg";
import login3 from "../public/assets/login/login3.svg";
import login4 from "../public/assets/login/login4.svg";
import logo from "../public/assets/logo.svg";
import GoogleLogo from "../components/icons/google";
import GithubLogo from "../components/icons/github";
import LinkedinLogo from "../components/icons/linkedin";
import DiscordLogo from "../components/icons/discord";

export default function Login({}) {
  const [revealPassword, setRevealPassword] = useState(false);
  const router = useRouter();

  let loginImg = [login1, login2, login3, login4];
  let [loginImage, setLoginImage] = useState(login1);

  let i = 0;
  function switchImage(){
     setLoginImage(loginImg[i]);
     i = (i+1)%4;
  }

  useEffect(() => {
    setInterval(switchImage, 3000);
  }, [switchImage]);


  return (
    <div className="w-full dark:bg-[#000000] dark:text-white relative">
        <div className="w-1/2">
            <div className="logo">

            </div>
            <div className="relative w-full">
                <Image src={loginImages} alt="login ;(" />
            </div>
            <p className="text-24px text-[#5F6FEE]">
                <span className="text-[#F6BF23]">Level-up</span> your career from anywhere
            </p>


        </div>
        <div className="w-1/2 bg-[#5F6FEE]">
            <div className="m-[3.25rem] mt-[7.87rem] px-[4.375rem] py-[3.75rem] bg-white">
                <div className="grid gap-y-[3.125rem]">
                    <p className="text-24px">Login to Your Account</p>
                    <div className="">
                        <p className="text-24px mb-[1.875rem]">Continue with</p>
                        <div className="grid gap-x-[1.5625rem]">
                            <div className="border border-[#5F6FEE] py-[1.875rem] px-[0.75rem]"> <GoogleLogo /> </div>
                            <div className="border border-[#5F6FEE] py-[1.875rem] px-[0.75rem]"> <LinkedinLogo /> </div>
                            <div className="border border-[#5F6FEE] py-[1.875rem] px-[0.75rem]"> <GithubLogo /> </div>
                            <div className="border border-[#5F6FEE] py-[1.875rem] px-[0.75rem]"> <DiscordLogo /> </div>
                        </div>
                    </div>

                    <div className="">
                        <p className="text-24px"></p>
                        <input className="px-5 py-3"></input>
                    </div>
                    <div className="">
                        <p className="text-24px"></p>
                        <div className="">
                        <input className="px-5 py-3"></input>
                        <Link href="#">
                        <button className="">
                        Forgot Password?
                        </button>
                        </Link>
                        </div>
                    </div>

                    <input className="px-5 py-3"></input>
                    <div className=""></div>
                    <p className="text-24px"></p>
                </div> 
            </div>
        </div>
    </div>
  );
}
export async function getServerSideProps({ req, res, query }) {
  return { props: {} };
}
