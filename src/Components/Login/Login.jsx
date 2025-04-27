import React, { useEffect, useState } from "react";
import styles from './Login.module.css';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    animateText();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setError("⚠️Please Fill All the Blanks!");
    } else {
      setError("");
      alert("Login Successful! ✅"); 
      navigate('/home')

    }
  };

  const handleSocialLogin = (provider) => {
    alert(`Logging in with ${provider}`);
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.loginForm}>
          <button className={styles.header} id="animated-text">LOGIN</button>
          {error && <p className={styles.error}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              className={styles.inputField}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              className={styles.inputField}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input 
              className={`${styles.inputField} ${styles.submitButton}`} 
              type="submit" 
              value="Login" 
            />
          </form>

          <div className={styles.socialDivider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerText}>OR</span>
            <span className={styles.dividerLine}></span>
          </div>

          <div className={styles.socialButtons}>
            <button 
              onClick={() => handleSocialLogin('Google')}
              className={`${styles.socialButton} ${styles.google}`}
            >
              <FcGoogle className={styles.socialIcon} /> Sign in with Google
            </button>
            <button 
              onClick={() => handleSocialLogin('Apple')}
              className={`${styles.socialButton} ${styles.apple}`}
            >
              <FaApple className={styles.socialIcon} /> Sign in with Apple
            </button>
            <button 
              onClick={() => handleSocialLogin('GitHub')}
              className={`${styles.socialButton} ${styles.github}`}
            >
              <FaGithub className={styles.socialIcon} /> Sign in with GitHub
            </button>
          </div>

          <div className={styles.linkGroup}>
            <a className={styles.link} href="#">Forgot Password?</a>
            <Link className={styles.link} to="/Auth/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

function animateText() {
  const text = document.getElementById("animated-text");
  if (!text) return;

  let letters = text.innerText.split("");
  text.innerText = "";

  letters.forEach((letter, index) => {
    let span = document.createElement("span");
    span.className = styles.waveAnimation;
    span.innerText = letter;
    span.style.display = "inline-block";
    span.style.animationDelay = `${index * 0.1}s`;
    text.appendChild(span);
  });
}