import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Register.module.css';
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    animateText(styles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("⚠️ All Fields Must Be Filled!");
    } else if (password !== confirmPassword) {
      setError("❌ Passwords Doesn't Match!");
    } else {
      setError("");
      alert("Successful Register! ✅");
      navigate('/home')

    }
  };

  const handleSocialRegister = (provider) => {
    alert(`Registering with ${provider}`);
    navigate('/home');
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.box}>
        <div className={styles.login}>
          <h2 className={styles.header} id="animated-text">REGISTER</h2>
          {error && <p className={styles.errorMessage}>{error}</p>}

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
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              className={styles.inputField}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input 
              type="submit"
              className={`${styles.inputField} ${styles.submitButton}`}
              value="Register" 
            />
          </form>
          <div className={styles.socialDivider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerText}>OR</span>
            <span className={styles.dividerLine}></span>
          </div>

          <div className={styles.socialButtons}>
            <button 
              onClick={() => handleSocialRegister('Google')}
              className={`${styles.socialButton} ${styles.google}`}
            >
              <FcGoogle className={styles.socialIcon} /> Sign up with Google
            </button>
            <button 
              onClick={() => handleSocialRegister('Apple')}
              className={`${styles.socialButton} ${styles.apple}`}
            >
              <FaApple className={styles.socialIcon} /> Sign up with Apple
            </button>
            <button 
              onClick={() => handleSocialRegister('GitHub')}
              className={`${styles.socialButton} ${styles.github}`}
            >
              <FaGithub className={styles.socialIcon} /> Sign up with GitHub
            </button>
          </div>

          <div className={styles.linkGroup}>
            <Link className={styles.link} to="/auth/login">Already Have An Account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

function animateText(styles) {
  const text = document.getElementById("animated-text");
  if (!text) return;

  let letters = text.innerText.split("");
  text.innerText = "";

  letters.forEach((letter, index) => {
    let span = document.createElement("span");
    span.className = styles.waveAnimation;
    span.innerText = letter;
    span.style.display = "inline-block";
    span.style.animation = `wave 1.5s infinite ease-in-out ${index * 0.1}s`;
    text.appendChild(span);
  });
}