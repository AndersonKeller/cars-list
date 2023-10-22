interface Inputprops {
  label: string;
  placeholder: string;
  register: {};
  errorMsg?: string;
  type?: string;
  maxlength?: number;
}
export function Input({
  label,
  placeholder,
  register,
  errorMsg,
  type,
  maxlength,
}: Inputprops) {
  return (
    <>
      <label className="self-start" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        className="uppercase ps-3 h-9 rounded-md outline-blue-100 w-full "
        type={type ? type : "text"}
        placeholder={placeholder}
        maxLength={maxlength ? maxlength : undefined}
        {...register}
      />
      {errorMsg && (
        <span className="text-red-500 font-bold self-start">{errorMsg}</span>
      )}
    </>
  );
}
