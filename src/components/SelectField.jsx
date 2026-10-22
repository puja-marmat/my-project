import "./Form.css";

export default function SelectField({ label, id, options, ...props }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="input select" {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}