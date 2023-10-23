import { useRef } from "react";
interface Inputprops {
  label: string;
  placeholder: string;
  register: {};
  errorMsg?: string;
  type?: string;
  mask?: string;
  maxLength?: number;
}
export function Input({
  label,
  placeholder,
  register,
  errorMsg,
  type,
  mask,
  maxLength,
}: Inputprops) {
  const inputRef = useRef("");

  return mask ? (
    <>
      <label className="self-start" htmlFor={label}>
        {label} <span className="text-red-600 font-bold">*</span>
      </label>
      <input
        ref={inputRef.current}
        id={label}
        className=" uppercase pe-3 ps-3 h-9 rounded-md outline-blue-100 w-full text-right "
        placeholder={placeholder}
        maxLength={maxLength}
        type={type ? type : "text"}
        {...register}
      />
      {errorMsg && (
        <span className="text-red-500 font-bold self-start">{errorMsg}</span>
      )}
    </>
  ) : (
    <>
      <label className="self-start" htmlFor={label}>
        {label} <span className="text-red-600 font-bold">*</span>
      </label>
      <input
        id={label}
        className="uppercase ps-3 h-9 rounded-md outline-blue-100 w-full"
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register}
      />
      {errorMsg && (
        <span className="text-red-500 font-bold self-start">{errorMsg}</span>
      )}
    </>
  );
}
