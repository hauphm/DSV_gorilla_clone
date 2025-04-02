import { NavLink } from "react-router";
import { LoginButton } from "./LoginButton";

export function Header() {
  return (
    <>
      <header className="header">
          <div className="logo-container">
            <div className="logo"></div>
            <span className="brand-name">TestGorilla</span>
          </div>
          
          <nav className="nav-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link active">Assessments</a>
            <a href="#" className="nav-link">Candidates</a>
            <a href="#" className="nav-link">Jobs <span className="beta-tag">Beta</span></a>
          </nav>
          
          <div className="header-right">
            <button className="book-demo-btn">Book demo</button>
            <button className="start-trial-btn">
              <span className="rocket-icon">🚀</span>
              Start trial
            </button>
            <div className="help-icon">?</div>
            <div className="avatar">HP</div>
          </div>
        </header>
    </>
  );
}