import { FieldErrors, FieldValues, Path, UseFormRegister, UseFormWatch } from "react-hook-form";

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  errors: FieldErrors<T>;
  rules: object;
  name: string;
  label: string;
}

export const Input = <T extends FieldValues>({ register, watch, rules, errors, name, label }: Props<T>) => {
  const labelOff = {
    top: "0",
    left: "0",
  };

  return (
    <div className="input">
      <input {...register(name as Path<T>, rules)} className="input__input-box" type="text" />
      <label className="input__label" style={watch(name as Path<T>) ? labelOff : {}}>{label}</label>
      {errors[name as Path<T>] && <span className="input__msg input__msg--error">{errors?.[name]?.message?.toString()}</span>}
    </div>
  );
};

