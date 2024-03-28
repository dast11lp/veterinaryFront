export const Input = ({ register, watch,rules, errors, name, label }) => {

  const labelOff = {
    top: "0",
    left: "0",
 }
 
  return (
    <div className="input">
      <input {...register(name, rules)} className="input__input-box" type="text" />
      <label className="input__label" style={watch(name) ? labelOff : {}}>{label}</label>
      {errors[name] && <span className="input__msg input__msg--error">{errors[name].message}</span>}
    </div>
  )
}
