function FormCheckbox({ label, name, defaultValue, size }) {
  return (
    <div className="form-control flex flex-col justify-center items-center">
      <label htmlFor={name} className="label cursor-pointer py-2 px-1">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        id={name}
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size || ""}`}
      />
    </div>
  );
}

export default FormCheckbox;
