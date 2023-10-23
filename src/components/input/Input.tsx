import { useRef } from "react";
import InputMask from "react-input-mask";
interface Inputprops {
  label: string;
  placeholder: string;
  register: {};
  errorMsg?: string;
  type?: string;
  mask?: string;
}
export function Input({
  label,
  placeholder,
  register,
  errorMsg,
  type,
  mask,
}: Inputprops) {
  const inputRef = useRef(null);

  return mask ? (
    <>
      <label className="self-start" htmlFor={label}>
        {label}
      </label>
      <InputMask
        alwaysShowMask={false}
        mask={mask}
        ref={inputRef.current}
        id={label}
        maskChar={null}
        className="uppercase pe-3 ps-3 h-9 rounded-md outline-blue-100 w-full text-right "
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register}
      />
      {errorMsg && (
        <span className="text-red-500 font-bold self-start">{errorMsg}</span>
      )}
    </>
  ) : (
    <>
      <label className="self-start" htmlFor={label}>
        {label}
      </label>
      <input
        ref={inputRef.current}
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
