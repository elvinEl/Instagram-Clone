import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Input from "components/Input";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;

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
    <div className="h-full w-full flex-wrap overflow-auto flex justify-center gap-x-8 items-center">
      <div className="hidden md:block w-[380px] h-[581px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
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

      <div className="w-[350px] grid gap-y-3">
        <div className="bg-white border-[1px] px-[40px] pt-6 pb-2">
          <a href="#" className="flex justify-center mb-8">
            <img
              className="h-[51px]"
              src="/assets/login/insta_logo.jpg"
              alt=""
            />
          </a>
          <form className="grid gap-y-1.5">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label=" Phone number, username or email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
            />
            <button
              type="submit"
              disabled={!enable}
              className="bg-[#4db5f9] mt-1 font-medium text-white rounded-[8px] h-[30px] text-sm disabled:opacity-50"
            >
              Log In
            </button>

            <div className="flex items-center">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-[13px] text-gray-500">Or</span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
            <div>
              <a
                href="#"
                className="flex justify-center items-center gap-2 text-sm font-semibold text-[#4267B2]"
              >
                <AiFillFacebook size={20} />
                Log in with Facebook
              </a>
              <a
                href="#"
                className="text-xs text-[#787295] mt-2 flex items-center justify-center"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        <div className="bg-white border-[1px] p-4 text-center text-sm">
        Don't have an account yet? <a href="#" className="text-semibold text-[">Register</a>


          </div>
      </div>
    </div>
  );
}

export default App;
