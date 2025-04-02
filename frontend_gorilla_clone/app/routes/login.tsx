import { useState, useContext } from "react";
import { redirect, Form, type MetaFunction } from "react-router";
import type * as Route from "./+types/login";
import { LoginContext } from "~/contexts/LoginContext";

export default function Login({ actionData }: Route.ComponentProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const { onLogin } = useContext(LoginContext);
  const [usernameLogin, setUsernameLogin] = useState("emilys");
  const [passwordLogin, setPasswordLogin] = useState("emilyspass");
  const [errorLogin, setErrorLogin] = useState(undefined);
  const [usernameRegistration, setUsernameRegistration] = useState("emilys");
  const [passwordRegister, setPasswordRegister] = useState("pistol");
  const [confirmPassword, setConfirmPassword] = useState("pistol");
  const [errorRegister, setErrorRegister] = useState<string | undefined>(undefined);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);

  function fetchLogin() {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        username: usernameLogin,
        password: passwordLogin,
        expiresInMins: 60,
      }),
      credentials: "include",
    })
      .then((response) => {
        console.log(response.status);
        setLoadingLogin(false);
        if (response.status === 200) {
          onLogin(usernameLogin);
          redirect("/");
        } 
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          setErrorLogin(data.error);
        }
      });
  }

  function fetchRegister() {
    
  }

  function handleLogin() {
    setLoadingLogin(true);
    fetchLogin();
  }

  function handleRegister() {
    setLoadingRegister(true);
    fetchRegister();
  }

  return (
    <>
      <div className="container">
        <div className="login-card">
          <div className="logo-container">
            <div className="logo"></div>
            <h1 className="brand-name">TestGorilla</h1>
          </div>

          <h2 className="welcome-text">We're glad to see you again</h2>

          {/* demo */}
          <button className="google-button">
            Continue with Google
          </button>

          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          <form>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Work email*" 
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="form-group password-container">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password*" 
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            
            <div className="form-footer">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  className="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span>Keep me logged in</span>
              </label>
              <a href="#" className="forgot-link">Forgot password?</a>
            </div>
            
            <button 
              type="submit" 
              className="login-button"
            >
              Log in
            </button>
          </form>
          
          <div className="signup-section">
            <p className="signup-text">Don't have an account? <a href="#" className="link">Sign up now</a></p>
            <p>Are you a candidate? <a href="#" className="link">Visit our candidate hub</a></p>
          </div>
        </div>
      </div>
    </>
  );
}