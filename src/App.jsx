import { useState, useEffect } from 'react'

import LoadingScreen from "./components/LoadingScreen.jsx"
import ScrollToTopButton from "./components/fixed-btn.jsx"

import SplitText from "./components/split-text.jsx";
import FadeContent from './components/fade-content.jsx'
import ShinyText from './components/shiny-text.jsx';
import Aurora from "./components/aurora.jsx";
import GlareHover from './components/rb-glarehover.jsx'
import AnimatedContent from './components/animated-content.jsx'


import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import Toptitle from './components/toptitle.jsx';
import Learned from './components/learned.jsx';
import Footer from './components/Footer.jsx';

import logo from "./assets/logo.png";
import memoji4 from "./assets/memoji-4.png";
import memoji3 from "./assets/memoji-3.png";
import memoji2 from "./assets/memoji-2.png";

import cer1 from "./assets/certificate-en.jpg";
import cer2 from "./assets/certificate-en1.jpg";
import cer3 from "./assets/certificate-en2.jpg";
import cer4 from "./assets/certificate-en3.jpg";
import cer5 from "./assets/certificate-en4.jpg";
import cer6 from "./assets/certificate-en5.jpg";

import pro0 from "./assets/pro.jpg";
import pro1 from "./assets/project1.png";
import pro2 from "./assets/project2.png";
import pro3 from "./assets/project444.jpg";
import pro4 from "./assets/project5.png";

import { LuChevronsDown } from "react-icons/lu";

import './App.css';

function App() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or data fetching
    setTimeout(() => {
      setData('Data Loaded!');
      setIsLoading(false); // Set loading to false after data is fetched
    }, 1000);
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (



    <div className="iransans overflow-x-hidden">

      {isLoading ? (
        <LoadingScreen />
      ) : (

        <>
          <ScrollToTopButton />

          {/* <Toptitle /> */}

          <div className="absolute w-full h-[100vh] overflow-hidden -z-50">
            <Aurora
              colorStops={["#B5A8D5", "#4D55CC", "#211C84"]}
              blend={1.0}
              amplitude={1.0}
              speed={0.5}
            />
          </div>

          {/* sdasdasdasd */}

          <div className="flex justify-center pt-0 md:pt-10 z-1000" dir='ltr'>
            <header className="fixed grid grid-cols-6  backdrop-blur-[15px] w-100% w-full max-w-full md:max-w-xl py-3 px-8 bg-black/60 md:bg-black/10  rounded-none md:rounded-full md:border-1 border-white/25">
              <div className="w-8 col">
                <img src={logo} alt="" />
              </div>
              <div className="flex items-center justify-center w-full col-span-4 col">
                <ul className="flex items-center justify-between text-center">
                  <li className="hover:bg-white/15 py-1 px-2 hover:px-4 rounded-full transition-all text-sm md:text-md">
                    <a href="#project_section"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById("project_section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}>
                      پروژه ها
                    </a>
                  </li>
                  <li className="hover:bg-white/15 py-1 px-2 hover:px-4 rounded-full transition-all text-sm md:text-md">
                    <a href="#learned_section"
                    onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById("learned_section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}>
                      رزومه
                    </a>
                  </li>
                  <li className="hover:bg-white/15 py-1 px-2 hover:px-4 rounded-full transition-all text-sm md:text-md">
                    <a href="#contact_section"
                    onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById("contact_section");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}>
                      ارتباط
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end items-center col gap-1">
                <div className="header-red bg-red-500 w-1.5 h-1.5 rounded-full"></div>
                <div className="header-red bg-yellow-300 w-1.5 h-1.5 rounded-full"></div>
                <div className="header-red bg-green-500 w-1.5 h-1.5 rounded-full"></div>
              </div>
            </header>
          </div>

          <div className="flex justify-center pt-38 -z-50">
            <div className="container px-4 md:px-6 lg:px-0 max-w-5xl">
              <div className="flex items-center flex-col w-full lg:px-24 text-center lg:text-start">
                <img className='w-48' src={memoji2} alt="پارسا حسنی" />
                <h1>
                  <p className='text-5xl sm:text-6xl lg:text-7xl font-semibold'>
                    پارسا حسنی
                  </p>
                  <br />
                  <span className='text-md sm:text-lg md:text-2xl text-center font-light'>
                    برنامه نویس وبسایت و طراح گرافیک
                  </span>
                </h1>
                <LuChevronsDown className='text-5xl mt-12 animate-bounce
'/>
              </div>

              <div className="w-full flex items-center justify-center mt-18 text-3xl gap-4">
                <a href="https://wa.me/+989991555608" className='p-2 bg-zinc-900 rounded-xl border-1 border-white/20 md:hover:bg-zinc-800'><FaWhatsapp /></a>
                <a href="https://instagram.com/parsahsnys" className='p-2 bg-zinc-900 rounded-xl border-1 border-white/20 md:hover:bg-zinc-800'><FaInstagram /></a>
                <a href="https://t.me/lilparsax" className='p-2 bg-zinc-900 rounded-xl border-1 border-white/20 md:hover:bg-zinc-800'><FaTelegramPlane /></a>
              </div>

              <div className="grid grid-cols-2 gap-18 mt-4">
                <div className=""></div>
                {/* <div className="border-1 border-white/20 rounded-4xl overflow-hidden">
                  <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={false}
                    outerVignette={true}
                    smooth={true}
                  />
                </div> */}
              </div>

              <div className="mt-18">
                <div className="title w-full text-center">
                  <ShinyText text="ABOUT ME" disabled={false} speed={3} className='text-xl' />
                  <h2 className='text-5xl font-bold'>
                    درباره من
                  </h2>
                </div>

                <div className="grid grid-cols-1 items-center md:grid-cols-4 mt-12">
                  <div className="col col-span-1 flex justify-center mb-6 md:mb-0">
                    <img src={memoji3} alt="" className='w-42 md:w-full' />
                  </div>
                  <div className="col text-xl text-center md:text-start col-span-3">
                    <p>
                      پارسا حسنی
                      برنامه‌نویس وبسایت، طراح گرافیک و توسعه‌دهنده گیم‌سرور.
                      در زمینه طراحی و پیاده‌سازی وب، ساخت رابط کاربری و مدیریت گیم‌سرورها فعالیت دارم.
                      علاقه‌مند به ترکیب خلاقیت و فناوری برای ساخت پروژه‌های متنوع در حوزه وب و بازی.
                    </p>
                  </div>
                </div>
              </div>


              <div className="mt-18" id='project_section'>
                <div className="title w-full text-center">
                  <ShinyText text="PROJECTS" disabled={false} speed={3} className='text-xl' />
                  <h2 className='text-5xl font-bold'>
                    پروژه ها
                  </h2>
                </div>

                <div className="flex items-center justify-center flex-col gap-8 mt-12">


                  <a href="https://kandelous.com">
                    <div className="relative rounded-2xl group overflow-hidden border-1 border-white/30 shadow-xl">

                      <div className="flex items-center justify-center overflow-hidden h-48">
                        <img src={pro3} alt="" className="scale-105 lg:group-hover:scale-110 lg:group-hover:blur-xs transition-all duration-500" />
                      </div>

                      <div className="absolute flex items-center inset-0 bg-gradient-to-r from-zinc-900/50 md:from-zinc-900/5 to-zinc-900 z-10">
                        <div className="w-full md:w-[50%] text-4xl font-bold text-center">
                          <h3>موزه مردم شناسی کندلوس</h3>
                          <p className='text-sm pt-2 font-light text-white/90'>فیلمبردای، عکسبرداری و مدیریت سوشیال مدیا</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="https://pishkajgroup.com">
                    <div className="relative rounded-2xl group overflow-hidden border-1 border-white/30 shadow-xl">

                      <div className="flex items-center justify-center overflow-hidden h-48">
                        <img src={pro1} alt="" className="scale-105 lg:group-hover:scale-110 lg:group-hover:blur-xs transition-all duration-500" />
                      </div>

                      <div className="absolute flex items-center inset-0 bg-gradient-to-r from-zinc-900/50 md:from-zinc-900/5 to-zinc-900 z-10">
                        <div className="w-full md:w-[50%] text-4xl font-bold text-center">
                          <h3>شهرک مسکونی پیش‌کاج</h3>
                          <p className='text-sm pt-2 font-light text-white/90'>طراحی و برنامه نویسی وبسایت</p>
                        </div>
                      </div>
                    </div>
                  </a>

                  <div className="relative rounded-2xl group overflow-hidden border-1 border-white/30 shadow-xl">

                    <div className="flex items-center justify-center overflow-hidden h-48">
                      <img src={pro0} alt="" className="scale-105 lg:group-hover:scale-110 lg:group-hover:blur-xs transition-all duration-500" />
                    </div>

                    <div className="absolute flex items-center inset-0 bg-gradient-to-r from-zinc-900/50 md:from-zinc-900/5 to-zinc-900 z-10">
                      <div className="w-full md:w-[50%] text-4xl font-bold text-center">
                        <h3>شهرک توریستی نمک‌آبرود</h3>
                        <p className='text-sm pt-2 font-light text-white/90'>طراحی گرافیک و وبسایت</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl group overflow-hidden border-1 border-white/30 shadow-xl">

                    <div className="flex items-center justify-center overflow-hidden h-48">
                      <img src={pro4} alt="" className="scale-105 lg:group-hover:scale-110 lg:group-hover:blur-xs transition-all duration-500" />
                    </div>

                    <div className="absolute flex items-center inset-0 bg-gradient-to-r from-zinc-900/50 md:from-zinc-900/5 to-zinc-900 z-10">
                      <div className="w-full md:w-[50%] text-4xl font-bold text-center">
                        <h3>سرور ماینکرفت آی‌آر پیکسل</h3>
                        <p className='text-sm pt-2 font-light text-white/90'>برنامه نویسی سرور و سایت</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl group overflow-hidden border-1 border-white/30 shadow-xl">

                    <div className="flex items-center justify-center overflow-hidden h-48">
                      <img src={pro2} alt="" className="scale-105 lg:group-hover:scale-110 lg:group-hover:blur-xs transition-all duration-500" />
                    </div>

                    <div className="absolute flex items-center inset-0 bg-gradient-to-r from-zinc-900/50 md:from-zinc-900/5 to-zinc-900 z-10">
                      <div className="w-full md:w-[50%] text-4xl font-bold text-center">
                        <h3>سرور رول پلی پرایم</h3>
                        <p className='text-sm pt-2 font-light text-white/90'>طراحی و برنامه نویسی وبسایت</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className='text-3xl text-center text-white/20'>Fail to fetch :(</p> */}



              </div>


              <div className=" mt-18" id='learned_section'>
                <div className="title w-full text-center">
                  <ShinyText text="CERTIFICATES" disabled={false} speed={3} />
                  <h2 className='text-5xl font-bold'>
                    رزومه
                  </h2>
                </div>

                <Learned />



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                  <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className='col rounded-lg overflow-hidden border-1 border-white/20 md:hover:brightness-80 md:hover:cursor-zoom-in transition-all'>
                      <img src={cer1} alt="" className='' />
                    </div>
                  </FadeContent>

                  <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className='col rounded-lg overflow-hidden border-1 border-white/20 md:hover:brightness-80 md:hover:cursor-zoom-in transition-all'>
                      <img src={cer2} alt="" className='' />
                    </div>
                  </FadeContent>

                  <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className='col rounded-lg overflow-hidden border-1 border-white/20 md:hover:brightness-80 md:hover:cursor-zoom-in transition-all'>
                      <img src={cer3} alt="" className='' />
                    </div>
                  </FadeContent>

                  <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className='col rounded-lg overflow-hidden border-1 border-white/20 md:hover:brightness-80 md:hover:cursor-zoom-in transition-all'>
                      <img src={cer4} alt="" className='' />
                    </div>
                  </FadeContent>

                  <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className='col rounded-lg overflow-hidden border-1 border-white/20 md:hover:brightness-80 md:hover:cursor-zoom-in transition-all'>
                      <img src={cer5} alt="" className='' />
                    </div>
                  </FadeContent>

                  <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0}>
                    <div className='col rounded-lg overflow-hidden border-1 border-white/20 md:hover:brightness-80 md:hover:cursor-zoom-in transition-all'>
                      <img src={cer6} alt="" className='' />
                    </div>
                  </FadeContent>

                </div>
              </div>

              <div className="mt-18 mb-18" id='contact_section'>
                <div className="title w-full text-center">
                  <ShinyText text="Contact Me" disabled={false} speed={3} />
                  <h2 className='text-5xl font-semibold'>
                    ارتباط با من
                  </h2>
                </div>

                <div className="">
                  <img src={memoji4} alt="" className='w-50 block mx-auto' />
                </div>

                <form action="https://api.web3forms.com/submit" method="POST" className="w-full p-8 rounded-2xl col-span-2 bg-white/1.5 shadow-xl">

                  <div className="bg-blue-500/50 border-1 border-blue-500 text-center rounded-xl p-2 mb-4">
                    <p>
                      لطفا در صورت مشاهده باگ در وبسایت از طریق فرم زیر به ما اعلام کنید !!!
                    </p>
                  </div>

                  <input type="hidden" name="access_key" value="72f0f897-a5fe-43be-942d-90e84f50c979"></input>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div className="">
                      <label htmlFor="name">نام و نام خانوادگی</label>
                      <input type="text" name="name" id='name' required className="py-3 px-4 w-full bg-zinc-900 rounded-xl focus:outline-1 focus:outline-purple-300 border-1 mt-1 border-white/10" placeholder="سید پارسا حسنی"></input>
                    </div>
                    <div className="">
                      <label htmlFor="name">ایمیل</label>
                      <input type="email" name="email" required className="py-3 px-4 w-full bg-zinc-900 rounded-xl focus:outline-1 focus:outline-purple-300 border-1 mt-1 border-white/10" placeholder="info@parsahasani.ir"></input>
                    </div>
                  </div>
                  <label htmlFor="name">پیام شما</label>
                  <textarea name="message" required className="min-h-26 max-h-100 py-3 px-4 mt-1 w-full bg-zinc-900 rounded-xl focus:outline-1 focus:outline-purple-300 border-1 border-white/10"
                    placeholder="پیام خود را بنوسید..."></textarea>
                  <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
                  <button type="submit" className="w-full py-3 mt-6 rounded-xl  text-black border-1 border-white/10 bg-purple-300 cursor-pointer">ارسال</button>

                </form>

              </div>
            </div>


          </div>
          <Footer />
        </>
      )}

    </div>


  );

}

export default App
