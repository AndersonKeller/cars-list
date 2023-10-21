interface Inputprops {
  label: string;
  placeholder: string;
  register: {};
  errorMsg?: string;
  type?: string;
}
export function Input({
  label,
  placeholder,
  register,
  errorMsg,
  type,
}: Inputprops) {
  return (
    <>
      <label className="self-start" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        className="ps-3 h-7 rounded-md outline-blue-100 w-full"
        type={type ? type : "text"}
        placeholder={placeholder}
        {...register}
      />
      {errorMsg && <span>{errorMsg}</span>}
    </>
  );
}
