import React, { useEffect, useState } from "react";

export default function Input({ label, type = 'text', ...props }) {
  const [show, setShow] = useState(false);
  const [inputType,setType] = useState(type)

  useEffect(()=>{
    if(show){
      setType('text')
    }else if(type === 'password'){
      setType('password')
    }
  },[show])

  return (
    <label className="block relative">
      <input
      type={inputType}
        required={true}
        className="bg-zinc-50 outline-none focus:border-gray-500 border-gray-300 px-2 text-xs  border rounded-sm w-full h-[38px] valid:pt-[10px] peer  "
        {...props}
      />
      <small className="absolute top-1/2 left-2 cursor-text pointer-events-none  text-gray-500 text-xs -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {type === "password" && props?.value &&(
        <button
          type="button"
          onClick={() => setShow((show) => !show)}
          className="absolute top-0 right-0 h-full flex items-center pr-2 text-sm font-semibold"
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
