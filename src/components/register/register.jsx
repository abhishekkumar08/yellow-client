/* eslint-disable jsx-a11y/anchor-is-valid */
import './register.css';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    axios
      .post('http://localhost:5000/register', user)
      .then((res) => {
        console.log(res.data);
        alert('Register Successful');
        window.location.href = '/login';
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400) {
          alert('Invalid Credentials');
        }
      });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="col-left">
          <div className="Register-text">
            <h2>DEMOS</h2>
            <p>
              We want to create a platform that transforms the way girls
              perceive code education and software engineering. The game is
              designed to teach girls practical, real-world coding skills via
              highly gamified, story-driven gameplay.
            </p>
          </div>
        </div>
        <div className="col-right">
          <div className="Register-form">
            <h2>Register</h2>
            <form>
              <p>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="text"
                  placeholder="Username"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </p>
              <p>
                <input
                  className="btn"
                  type="submit"
                  value="Register"
                  onClick={handleClick}
                />
              </p>
              <p>
                <a href="">Forget password?</a>
                <a href="">Create an account.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
