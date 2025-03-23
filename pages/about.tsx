import Image from "next/image";
import { Geist } from "next/font/google";
import Link from "next/link";

import React, { useState } from 'react';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function About() {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <div
      className={`min-h-screen w-full flex flex-row ${geistSans.variable}`}
      style={{
        backgroundImage: "url('/img/about-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",

      }}
    >
      {/* 右上角Home图标 */}
      <div className="fixed top-8 right-8 z-10">
        <Link href="/">
          <Image
            src={hover3 ? "/img/icon-home-green.png" : "/img/icon-home.png"}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
            alt="Home"
            width={32}
            height={32}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>


      <div style={{
        backgroundImage: "url('/img/Asset 15.png')", backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: '460px',
        height: '240px',
      }} className="fixed fixed top-[7.5%] left-[11%]">

      </div>
      {/* About 和 Contact 按钮 (水平排列) */}
      <div className="fixed left-[11%] top-[31%] flex flex-row items-center gap-3 z-10">

        <span style={{
          color: hover ? '#666666' : '#00ad6e',
          // transition: 'color 0.3s ease',

        }}


          className="text-[#00AD6E] text-[38.6834px] font-extralight font-['proxima-nova']">
          <Link href="/contact" className="hover:text-opacity-80 transition-opacity">
            <Image
              src={hover ? "/img/botton/Asset 17.png" : "/img/botton/Asset 25.png"}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              alt="Home"
              width={180}
              height={50}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            /></Link>
        </span>
        <span style={{
          color: hover2 ? '#666666' : '#00ad6e',
          // transition: 'color 0.3s ease',

        }}
          className="text-[#00AD6E] text-[38.6834px] font-extralight font-['proxima-nova']">
          <Link href="/list" className="hover:text-opacity-80 transition-opacity">
            <Image
              src={hover2 ? "/img/botton/Asset 14.png" : "/img/botton/Asset 20.png"}
              onMouseEnter={() => setHover2(true)}
              onMouseLeave={() => setHover2(false)}
              alt="Home"
              width={180}
              height={50}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />


          </Link>
        </span>
      </div>

      {/* 内容区域 - 从右侧移到中央偏左位置 */}
      {/* <div className="mx-auto flex flex-col justify-center pl-[50%]">
        <div className="bg-transparent">
          <h1 className="text-[36px] leading-tight font-black text-[#333333] mb-2">
            Hi, I'm Haley, a visual and graphic designer
          </h1>
          <p className="text-[18px] text-[#555555] mb-12 font-bold">
            Growing up in Hong Kong, I was inspired by love and vibrant colors, which shaped my creative vision.
          </p>
          
          <h2 className="text-[36px] leading-tight font-black text-[#333333] mb-2">
            I love to create fresh, joyful ideas that spark positivity.
          </h2>
          <p className="text-[18px] text-[#555555] mb-16 font-bold">
            I hope my work brings a little energy and inspiration to your day!
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
 
          
        
        
          
          <p className="text-[14pt] text-[#777777] font-semibold mt-8">
            "Oi" in my logo—it's part of my name and in Cantonese or Chinglish, "Oi" is like saying "Hey," 
            a warm, casual greeting that feels personal and inviting.
          </p>
        </div>
      </div> */}
    </div >
  );
}