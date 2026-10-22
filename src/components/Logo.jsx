import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo-row">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
               stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
            <line x1="12" y1="3" x2="12" y2="21" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
            <line x1="18.4" y1="5.6" x2="5.6" y2="18.4" />
          </svg>
        </div>
        <span className="logo-text">Urjā</span>
      </div>
      <span className="logo-sub">by Kimbal</span>
    </div>
  );
}