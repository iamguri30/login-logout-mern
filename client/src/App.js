import React, { useState } from "react"; // Corrected the import
import axios from "axios";
import "./App.css";

function App() {
  // const url = "http://localhost:5000/";
  const url = "https://login-logout-mern-backend.onrender.com/";
      const [isSignUpActive, setIsSignUpActive] = useState(false);

      const toggleForm = () => {
            setIsSignUpActive(!isSignUpActive);
      };

      const registerUser = (e) => {
            e.preventDefault();
            let data = new FormData(e.target);
            const user = {
              username : data.get("username"),
              email : data.get("email"),
              password : data.get("pwd")
            }

            axios.post(url+"register", user).then((response) => {
              alert(response.username)
            }).catch((err) => {
              alert(err)
            })
      };
      return (
            <>
                  <section>
                        <div className={`container ${isSignUpActive ? "active" : ""}`}>
                              <div className="user signinBx">
                                    <div className="imgBx">
                                          <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="" />
                                    </div>
                                    <div className="formBx">
                                          <form onSubmit={(e) => e.preventDefault()}>
                                                {" "}
                                                {/* Corrected onSubmit */}
                                                <h2>Sign In</h2>
                                                <input autoComplete="Username" type="text" placeholder="Username" />
                                                <input autoComplete="Password" type="password" placeholder="Password" />
                                                <input autoComplete="Login" type="submit" value="Login" />
                                                <p className="signup">
                                                      Don't have an account? <a onClick={toggleForm}> Sign Up.</a>
                                                </p>
                                          </form>
                                    </div>
                              </div>

                              <div className="user signupBx">
                                    <div className="formBx">
                                          <form onSubmit={registerUser}>
                                                {" "}
                                                {/* Corrected onSubmit */}
                                                <h2>Create an account</h2>
                                                <input autoComplete="Username" type="text" name="username" placeholder="Username" />
                                                <input autoComplete="Email Address" type="email" name="email" placeholder="Email Address" />
                                                <input autoComplete="Create Password" type="password" name="pwd" placeholder="Create Password" />
                                                <input autoComplete="Confirm Password" type="password" name="c_pwd" placeholder="Confirm Password" />
                                                <input type="submit" value="Sign Up" />
                                                <p className="signup">
                                                      Already have an account? <a onClick={toggleForm}> Sign in.</a>
                                                </p>
                                          </form>
                                    </div>
                                    <div className="imgBx">
                                          <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="" />
                                    </div>
                              </div>
                        </div>
                  </section>
            </>
      );
}

export default App;
