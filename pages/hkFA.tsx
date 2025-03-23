import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Hiton() {
    const [scrolled, setScrolled] = useState(false);
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div key={1002} style={{
            padding: 0,
            width: '100%',
            position: 'relative',
            height: 'auto'
        }}>
            <Head>
                <title>图片展示</title>
                <meta name="description" content="图片展示页面" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 100,
                width: '40px',
                height: '40px',
                cursor: 'pointer'
            }}>
                <Link href="/">
                    <Image
                         src={hover3 ? "/img/icon-home-red.png" : "/img/icon-home.png"}
                         onMouseEnter={() => setHover3(true)}
                         onMouseLeave={() => setHover3(false)}
                        alt="主页"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>

            {/* 固定导航按钮 */}
            <div style={{
                position: 'absolute',
                top: '3.8%',
                left: '45%',
                transform: 'translateX(0)',
                zIndex: 2000,
                cursor: 'pointer',
                backgroundColor: 'transparent',
                width: 'auto',
                textAlign: 'center',
                pointerEvents: 'auto'
            }}>
                <div style={{
                    color: '#e53e3e',
                    fontSize: '24px',
                    fontWeight: '500',
                    fontFamily: 'Arial, sans-serif',
                    letterSpacing: '1px',
                    textAlign: 'left'
                }}>

                </div>
            </div>

            {/* 图片区域 */}




            <div
                style={{

                    position: 'relative',
                    zIndex: 1,

                }}>




                <div style={{
                    position: 'absolute',
                    top: '40px',
                    left: '50%',
                    transform: 'translateX(0)',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    width: 'auto'
                }}> <div style={{
                    backgroundImage: "url('/img/1/Asset 13.png')", backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: '450px',
                    height: '200px',
                    transform: 'translate(-50%, 0%)'
                }} className="fixed fixed top-[50px] left-[50%]">

                    </div>
                    <div style={{ transform: 'translate(-67%, 0%)', width: '330px', height: '40px', }} className="fixed left-[40%] top-[300px] flex flex-row items-center gap-3 z-10">
                        <span style={{
                            color: hover ? '#666666' : '#46b8dd',
                            // transition: 'color 0.3s ease',
                        }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}

                            className="text-[#00AD6E] text-[38.6834px] font-extralight font-['proxima-nova']">

                            <Link href="/aspoe" className="hover:text-opacity-80 transition-opacity">
                                <Image
                                    src={hover ? "/img/botton/Asset 15.png" : "/img/botton/Asset 22.png"}
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
                            <Link href="/hiton" className="hover:text-opacity-80 transition-opacity"><Image
                                src={hover2 ? "/img/botton/Asset 13.png" : "/img/botton/Asset 18.png"}
                                onMouseEnter={() => setHover2(true)}
                                onMouseLeave={() => setHover2(false)}
                                alt="Home"
                                width={170}
                                height={30}
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                            /></Link>
                        </span>
                    </div>

                </div>


              
                <Image
                    style={{ position: 'relative' }}
                    src="/img/pro/web design-25.jpg"
                    alt="设计图片"
                    width={1920}
                    height={1080}
                    layout="responsive"
                />
                {/* 图片 */}

            </div>
        </div>
    );
}
