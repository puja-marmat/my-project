import { useState } from "react";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import SelectField from "../../components/SelectField";
import Button from "../../components/Button";
import { ROLES } from "../../data/roles";
import "./Login.css";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("operator@savmdm.in");
  const [role, setRole] = useState(ROLES[0].value);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    setLoading(true);

    // Demo: yahan baad me real API call lagegi
    setTimeout(() => {
      const roleLabel = ROLES.find((r) => r.value === role).label;
      onLogin({ email, role: roleLabel });
    }, 800);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <Logo />

        <h1 className="login-title">Welcome to Meter Data Management</h1>
        <p className="login-subtitle">Login with your credentials to continue</p>

        <InputField
          label="Email ID"
          id="email"
          type="email"
          value={email}
          error={error}
          onChange={(e) => setEmail(e.target.value)}
        />

        <SelectField
          label="Sign in as (demo)"
          id="role"
          value={role}
          options={ROLES}
          onChange={(e) => setRole(e.target.value)}
        />

        <Button type="submit" loading={loading}>Continue</Button>

        <p className="login-note">Prototype – any password works</p>
      </form>
    </div>
  );
}