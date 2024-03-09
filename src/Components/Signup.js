import { useState } from 'react';
import './Signin.css';
import profile from "./a.png";

function Signup() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    mobileNumber: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="main" align="center">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
              
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="name"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>
             <br></br>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="name"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <br></br>
              </div>
              <div className="second-input">
                <input
                  type="password"
                  placeholder="Password"
                  className="name"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <br></br>
              <div>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="name"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="login-button">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
