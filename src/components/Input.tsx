import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { FieldErrors, FieldValues, Path, UseFormRegister, UseFormWatch } from "react-hook-form";

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  errors: FieldErrors<T>;
  rules: object;
  name: string;
  label: string;
  type: string;
  icon: IconDefinition | null
}

export const Input = <T extends FieldValues>({ register, watch, rules, errors, name, label, type, icon}: Props<T>) => {
  const labelOff = {
    top: "0",
    left: "0",
  };

  const [viewed, setViewed] = useState(type)

  const watchPassword = () => {

      if(viewed == type){
        setViewed("text")
      }else {
        setViewed(type)
      }

  }

  

  return (
    <div className="input">
      <input {...register(name as Path<T>, rules)} className="input__input-box" type={viewed} />
      <label className="input__label" style={watch(name as Path<T>) ? labelOff : {}}>{label}</label>
      <div className="icon" onClick={watchPassword}>
        {
          icon ?
          <FontAwesomeIcon icon={icon} />:
           ''
        }
      </div>
      {errors[name as Path<T>] && <span className="input__msg input__msg--error">{errors?.[name]?.message?.toString()}</span>}
    </div>
  );
};

