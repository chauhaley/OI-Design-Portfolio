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
        <div style={{
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

                            <Link href="/about" className="hover:text-opacity-80 transition-opacity">
                                <Image
                                    src={hover ? "/img/botton/Asset 16.png" : "/img/botton/Asset 23.png"}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                    alt="Home"
                                    width={160}
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
                            <Link href="/contact" className="hover:text-opacity-80 transition-opacity"><Image
                                src={hover2 ? "/img/botton/Asset 17.png" : "/img/botton/Asset 21.png"}
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


                <div style={{

                    width: '1920px',
                    height: '1760px',
                    position: "absolute",
                    top: '450px',
                    zIndex: 1000
                }}>
                    <div className='flex' style={{}}>
                        <Link href="/hiton" className="hover:text-opacity-80 transition-opacity">
                            <div style={{
                                width: ((1920 / 2) - 12) + 'px',
                                margin: '5px 2px 5px 10px',
                                height: "635px",

                                backgroundImage: "url('/img/botton/Asset 26.png')", backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>

                                <Image
                                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                    src="/img/botton/Asset_47.png"
                                    alt="设计图片"
                                    width={((1920 / 2) - 12) / 1.2}
                                    height={80}

                                />


                            </div></Link>
                        <Link href="/steve" className="hover:text-opacity-80 transition-opacity">
                            <div style={{
                                width: ((1920 / 2) - 12) + 'px',
                                margin: '5px 10px 5px 2px',
                                height: "635px",

                                backgroundImage: "url('/img/botton/Asset 27.png')", backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <Image
                                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                    src="/img/botton/Asset 41.png"
                                    alt="设计图片"
                                    width={((1920 / 2) - 12) / 2}
                                    height={80}

                                />


                            </div></Link>
                    </div>
                    <div className='flex'>

                        <Link href="/qwatch" className="hover:text-opacity-80 transition-opacity">
                            <div style={{
                                width: ((1920 / 3) - 12) + 'px', height: "445px", margin: '5px 2px 5px 10px',
                                backgroundImage: "url('/img/botton/Asset 28.png')", backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>
                                <Image
                                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                    src="/img/botton/Asset 45.png"
                                    alt="设计图片"
                                    width={((1920 / 3) - 12) / 1.2}
                                    height={80}
                                />
                            </div></Link>
                        <Link href="/aspoe" className="hover:text-opacity-80 transition-opacity">
                            <div style={{
                                width: ((1920 / 3) - 4) + 'px', height: "445px", margin: '5px 2px 5px 2px',
                                backgroundImage: "url('/img/botton/Asset 29.png')", backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>


                                <Image
                                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                    src="/img/botton/Asset 44.png"
                                    alt="设计图片"
                                    width={((1920 / 3) - 12) / 2}
                                    height={80}

                                />
                            </div></Link>
                        <Link href="/hkFA" className="hover:text-opacity-80 transition-opacity">
                            <div style={{
                                width: ((1920 / 3) - 12) + 'px', height: "445px", margin: '5px 10px 5px 2px',
                                backgroundImage: "url('/img/botton/Asset 30.png')", backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}>

                                <Image
                                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                    src="/img/botton/Asset 46.png"
                                    alt="设计图片"
                                    width={((1920 / 3) - 12) / 1.5}
                                    height={80}

                                />
                            </div></Link>
                    </div>
                    <div className='flex' style={{}}>
                        <div style={{
                            width: ((1920 / 2) - 12) + 'px',
                            margin: '5px 2px 5px 10px',
                            height: "635px",
                            backgroundImage: "url('/img/botton/Asset 39.png')", backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}>
                            <Image
                                style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                src="/img/botton/Asset 42.png"
                                alt="设计图片"
                                width={((1920 / 2) - 12) / 2}
                                height={80}

                            />
                        </div>

                        <div style={{
                            width: ((1920 / 2) - 12) + 'px',
                            margin: '5px 10px 5px 2px',
                            height: "635px",

                            backgroundImage: "url('/img/botton/Asset 31.png')", backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}>
                            <Image
                                style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                                src="/img/botton/Asset 43.png"
                                alt="设计图片"
                                width={((1920 / 2) - 12) / 2}
                                height={80}

                            />
                        </div>
                    </div>


                </div>
                <Image
                    style={{ position: 'relative' }}
                    src="/img/1/作品目录.png"
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
