import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [greyPosition, setGreyPosition] = useState(0); // 专门用于控制grey.png的位置
  const animationRef = useRef<number | null>(null);
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  
  useEffect(() => {
   
    const handleMouseMove = (event: MouseEvent) => {
      // grey.png直接跟随鼠标，无需区域限制
      setGreyPosition(event.clientX);
      
      // 只在屏幕中间区域触发其他元素的移动
      const screenWidth = window.innerWidth;
      const activeAreaStart = screenWidth * 0.3;
      const activeAreaEnd = screenWidth * 0.7;
      
      if (event.clientX >= activeAreaStart && event.clientX <= activeAreaEnd) {
        targetXRef.current = event.clientX;
        
        if (animationRef.current === null) {
          animationRef.current = requestAnimationFrame(updatePosition);
        }
      }
      // if (event.clientX >= window.innerWidth) {
      //   console.log('鼠标在屏幕的右边');
      // } 

    };
    
    const updatePosition = () => {
      // 平滑过渡
      const dx = (targetXRef.current - currentXRef.current) * 0.1;
      if (Math.abs(dx) > 0.1) {
        currentXRef.current += dx;
        setMouseX(currentXRef.current);
        animationRef.current = requestAnimationFrame(updatePosition);
      } else {
        currentXRef.current = targetXRef.current;
        setMouseX(currentXRef.current);
        animationRef.current = null;
      }
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // 计算背景位置，限制最大移动距离
  const calculateBgPosition = () => {
    // 添加初始偏移量，负值使背景向上偏移
    const initialOffset = -500;
    
    // 服务器端渲染时提供默认值
    if (typeof window === 'undefined') {
      return `center ${initialOffset}px`;
    }
    
    // 反转鼠标移动方向，使鼠标左移时背景下移
    const screenWidth = window.innerWidth;
    const reverseMouseX = screenWidth - mouseX; // 鼠标位置反转
    const baseMovement = reverseMouseX * 0.0; // 增加移动系数从0.01到0.03
    const maxDownwardMovement = 500; // 最大向下移动300px，增加从100px
    
    // 确保baseMovement不超过最大值
    const limitedMovement = Math.min(baseMovement, maxDownwardMovement);
    
    // 从初始偏移开始计算位置
    return `center ${initialOffset + limitedMovement}px`;
  };

  return (
    <>
      {/* 背景和装饰元素容器 */}
      <div 
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] pointer-events-none"
        style={{
          backgroundImage: "url('/img/4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          zIndex: -1
        }}
      >
        {/* 原始背景图层 */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/img/1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0
          }}
        />
        
        {/* 额外背景图层 */}
        <div 
          className="pointer-events-none fixed top-0 h-screen w-screen overflow-hidden"
          style={{
            backgroundImage: "url('/img/2.png')",
            backgroundSize: "cover",
            // backgroundColor:'green',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            top:'300px',
            zIndex: -2
          }}
        />

        <div 
          className="pointer-events-none fixed top-0 h-screen overflow-visible"
          style={{
            left: `${greyPosition - 100}px`,
            transform: "translateX(-50%)",
            zIndex: -3,
            willChange: "left"
          }}
        >
          <Image
            src="/img/3.png"
            alt="Grey element"
            width={10000}
            height={19000}
            style={{
              height: '100vh',
              width: 'auto',
              maxWidth: 'none'
            }}
            priority
            unoptimized
          />
        </div>
      </div>

      {/* 交互元素，与背景分离 */}
      <div className="w-full h-full fixed top-0 left-0 pointer-events-none">
        {/* 右上角Home图标 */}
        <div className="fixed top-8 right-8 z-50 pointer-events-auto">
          <Image
            src="/img/icon-home-white.png"
            alt="Home"
            width={32}
            height={32}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
        
        {/* About 和 Contact 按钮 (左侧) */}
        <div style={{}} className="fixed left-[12%] top-[75%] flex flex-col gap-2 z-50 pointer-events-auto">
          <Link href="/about" style={{
            fontWeight:'600',
          }} className="text-white text-[35px] font-light hover:text-gray-300 hover:font-bold hover:translate-y-[-2px] transition-all text-left cursor-pointer">
            &nbsp;&nbsp;About
          </Link>
          <Link href="/contact" style={{
            fontWeight:'200',
          }} className="text-white text-[38px] font-extralight font-['proxima-nova']">
            Contact
          </Link>
        </div>
        
        {/* Design Portfolio 区域 (右侧) */}
        <div className="fixed right-[49%] top-[75%] transform z-50 text-left group pointer-events-auto">
          <h2 className="text-white text-[48px] font-thin group-hover:translate-y-[-2px] transition-all">Design</h2>
          <Link style={{lineHeight:'15px'}} href="/list" className="text-white text-[38px] font-extralight font-['proxima-nova']">
          <button className="text-white text-[25px] font-light hover:text-gray-300 hover:font-bold hover:translate-y-[-2px] transition-all cursor-pointer">
            Portfolio
          </button></Link>
        </div>
      </div>
    </>
  );
}
