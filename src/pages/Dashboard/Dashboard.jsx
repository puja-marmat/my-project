export default function Dashboard({ user, onLogout }) {
  return (
    <div style={{ padding: 40 }}>
      <h2>Welcome, {user.email}</h2>
      <p style={{ margin: "8px 0 20px", color: "#6b7280" }}>Role: {user.role}</p>
      <button onClick={onLogout} style={{ padding: "8px 16px", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
}