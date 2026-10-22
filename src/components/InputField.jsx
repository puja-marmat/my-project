import "./Form.css";

export default function InputField({ label, id, error, ...props }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input id={id} className={`input ${error ? "input-error" : ""}`} {...props} />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}