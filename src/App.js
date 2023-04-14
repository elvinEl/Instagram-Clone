import React, { useEffect } from "react";
import { useRef } from "react";

function App() {
  const ref = useRef();

  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    let total = images.length;
    let current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");

      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex justify-center gap-x-8 items-center">
      
      <div className="w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[551px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="/assets/login/sc.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="/assets/login/sc4.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="/assets/login/sc2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
            src="/assets/login/sc3.png"
            alt=""
          />
        </div>
      </div>

      <div className="w-[350px] bg-white border-[1px] px-[40px] pt-6 pb-2">
        <a href="#" className="flex justify-center mb-8">
          <img className="h-[51px]" src="/assets/login/insta_logo.jpg" alt="" />
        </a>
        <form className="grid gap-y-1.5">
          <label className="block relative">
            <input type="text" required={true} className="bg-zinc-50 outline-none focus:border-gray-500 border-gray-300 px-2 text-xs  border rounded-sm w-full h-[38px] valid:pt-[10px] peer " />
            <small className="absolute top-1/2 left-2 cursor-text pointer-events-none  text-gray-500 text-xs -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">Phone number, username or email </small>
          </label>
          <label className="block relative">
            <input type="password" required={true} className="bg-zinc-50 outline-none focus:border-gray-500 border-gray-300 px-2 text-xs  border rounded-sm w-full h-[38px] valid:pt-[10px] peer " />
            <small className="absolute top-1/2 left-2 cursor-text pointer-events-none  text-gray-500 text-xs -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">Password</small>
          </label>
          <button type="submit" disabled={true} className="bg-[#4db5f9] font-medium text-white rounded-[8px] h-[30px] text-sm disabled:opacity-50">Log In</button>
        
        <div className="flex items-center">
          <div className="h-px bg-gray-400"/>
          <span className="px-4">Or</span>
          <div className="h-px bg-gray-400"/>

        </div>
        
        </form>
      </div>
    </div>
  );
}

export default App;
