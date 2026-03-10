function FormInput({ label, name, type, defaultValue }) {
  return (
    <div className="form-control">
      {/* <legend className="fieldset-legend"></legend> */}
      <label className="label py-2 px-1">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
}
export default FormInput;
