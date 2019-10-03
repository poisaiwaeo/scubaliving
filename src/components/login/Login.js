import React from 'react';
import './Login.css'



const Login = () => {
    return (
        <div>

            <div className="col-lg-12 col-md-12 col-12 d-flex">

            <div id="login__container">
        <div class="left__box">
            <h1>Sign Up</h1>

            <input type="text" name="username" placeholder="Username" required />
            <input type="text" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />

            <input type="password" name="passewordtwo" placeholder="Retypepassword" required />

                <a href="besked.html">
                    <input type="submit" name="signup__button" value="Sign Up" required/>
                </a>
        </div>


        <div class="right__box">
            <span class="signinwith">Sign in with<br />Social Network</span>

            <button class="social facebook">
                <a href="https://www.facebook.com/" target="_blank"> Log in with Facebook</a>
            </button>
            <div class="social twitter">
                <a href="https://twitter.com/?lang=en-gb/" target="_blank"> Log in with Twitter</a>
            </div>
            <div class="social google">
                <a href="https://www.instagram.com/accounts/login/?source=auth_switcher" target="_blank">Log in with Google</a>
            </div>

        </div>

        <div class="or">Or</div>
    </div>

            </div>

        </div>
    )
}

export default Login
