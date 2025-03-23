import Image from "next/image";
import { Geist } from "next/font/google";
import Link from "next/link";
import React, { useState } from 'react';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Contact() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <div
      className={`min-h-screen w-full flex flex-row ${geistSans.variable}`}
      style={{
        backgroundImage: "url('/img/contact-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}
    >
      <div style={{
        backgroundImage: "url('/img/Asset 14.png')", backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: '560px',
        height: '290px',
        transform: 'translate(-50%, 0%)'
      }} className="fixed fixed top-[3.5%] left-[50%]">

      </div>



      {/* About 和 Contact 按钮 (水平排列) */}
      <div style={{ transform: 'translate(-50%, 0%)', }} className="fixed left-[50%] top-[33%] flex flex-row items-center gap-3 z-10">
        <span style={{
          color: hover ? '#666666' : '#46b8dd',
          // transition: 'color 0.3s ease',
        }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}

          className="text-[#00AD6E] text-[38.6834px] font-extralight font-['proxima-nova']">

          <Link href="/about" className="hover:text-opacity-80 transition-opacity">
            <Image
              src={hover ? "/img/botton/Asset 16.png" : "/img/botton/Asset 24.png"}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              alt="Home"
              width={120}
              height={30}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />

          </Link>
        </span>
        <span style={{
          color: hover2 ? '#666666' : '#46b8dd',
          // transition: 'color 0.3s ease',
          position: 'relative',
          top: '3px'
        }}
          onMouseEnter={() => setHover2(true)}
          onMouseLeave={() => setHover2(false)} className="text-[#00AD6E] text-[38.6834px] font-extralight font-['proxima-nova']">
          <Link href="/list" className="hover:text-opacity-80 transition-opacity"><Image
            src={hover2 ? "/img/botton/Asset 14.png" : "/img/botton/Asset 19.png"}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
            alt="Home"
            width={150}
            height={30}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          /></Link>
        </span>
      </div>



      {/* 右上角Home图标 */}
      <div className="fixed top-8 right-8 z-10">
        <Link href="/">
          <Image
            src={hover3 ? "/img/icon-home-blue.png" : "/img/icon-home.png"}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            alt="Home"
            width={32}
            height={32}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* About 和 Contact 按钮 (水平排列) */}
      {/* <div className="fixed left-[10.5%] top-[15%] flex flex-row items-center gap-3 z-10">
        <span className="text-[#00AD6E] text-[38.6834px] font-extralight font-['proxima-nova']">
          &gt; <Link href="/about" className="hover:text-opacity-80 transition-opacity">Contact</Link>
        </span>
        <span className="text-[#00AD6E] text-[38.6834px] font-extralight font-['proxima-nova']">
          &gt; Portfolio
        </span>
      </div> */}

      {/* 内容区域 */}
      {/* <div className="mx-auto flex flex-col justify-center pl-[30%]">
        <div className="bg-transparent w-[400px]">
          <h1 className="text-[33pt] leading-tight font-semibold text-[#333333] mb-10">
            Contact
          </h1>
          
          <div className="mb-14">
            <div className="flex mb-4">
              <p className="text-[18px] text-[#555555] font-normal w-28">E-mail</p>
              <p className="text-[18px] text-[#555555] font-normal">chuhaley@gmail.com</p>
            </div>
            <div className="flex mb-4">
              <p className="text-[18px] text-[#555555] font-normal w-28">WhatsApp</p>
              <p className="text-[18px] text-[#555555] font-normal">+852 5166 0093</p>
            </div>
            <div className="flex mb-4">
              <p className="text-[18px] text-[#555555] font-normal w-28">WeChat</p>
              <p className="text-[18px] text-[#555555] font-normal">+86 135 0001 2134</p>
            </div>
          </div>
          
          <h2 className="text-[33pt] leading-tight font-semibold text-[#333333] mb-5">
            Based in
          </h2>
          <div className="flex">
            <p className="text-[18px] text-[#555555] mb-16 font-normal w-28"></p>
            <p className="text-[18px] text-[#555555] mb-16 font-normal">Hong Kong</p>
          </div>
          
          <br></br>
          <br></br>
          <br></br>
          
          <p className="text-[14pt] text-[#777777] font-semibold mt-8">
            "Oi" in my logo—it's part of my name and in Cantonese or Chinglish, "Oi" is like saying "Hey," 
            a warm, casual greeting that feels personal and inviting.
          </p>
        </div>
      </div> */}
    </div>
  );
}