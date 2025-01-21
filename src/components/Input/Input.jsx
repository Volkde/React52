import "./styles.css";


function Input({ name, type = "text", placeholder, label }) {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;