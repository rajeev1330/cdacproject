import React from "react";
import Header from "./header";
import Footer from "./footer";

function Login() {
  return (
    <div>
      <div className="main-sec inner-page">
        <Header />
      </div>
      <section className="banner-bottom py-5">
        <div className="container">
          <div className="content-grid">
            <div className="text-center icon">
              <span className="fa fa-unlock-alt"></span>
            </div>
            <div className="content-bottom">
              <form action="#" method="post">
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="text1"
                      id="text1"
                      type="text"
                      value=""
                      placeholder="User Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="field-group">
                  <div className="content-input-field">
                    <input
                      name="password"
                      id="myInput"
                      type="Password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="content-input-field">
                  <button type="submit" className="btn">
                    Sign In
                  </button>
                </div>
                <ul className="list-login">
                  <li className="switch-slide">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                      keep Logged in
                    </label>
                  </li>
                  <li>
                    <a href="#" className="text-right">
                      Forgot password?
                    </a>
                  </li>
                  <li className="clearfix"></li>
                </ul>
                <ul className="list-login-bottom">
                  <li className="">
                    <a href="register.html" className="">
                      Don't have an Account?
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="text-right">
                      Need Help?
                    </a>
                  </li>
                  <li className="clearfix"></li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="shipping-wthree">
        <div className="shiopping-grids d-lg-flex">
          <div className="col-lg-4 shiopping-w3pvt-gd text-center">
            <div className="icon-gd">
              <span className="fa fa-truck" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>FREE SHIPPING</h3>
              <p>On all order over $2000</p>
            </div>
          </div>
          <div className="col-lg-4 shiopping-w3pvt-gd sec text-center">
            <div className="icon-gd">
              <span className="fa fa-bullhorn" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>FREE RETURN</h3>
              <p>On 1st exchange in 30 days</p>
            </div>
          </div>
          <div className="col-lg-4 shiopping-w3pvt-gd text-center">
            <div className="icon-gd">
              {" "}
              <span className="fa fa-gift" aria-hidden="true"></span>
            </div>
            <div className="icon-gd-info">
              <h3>MEMBER DISCOUNT</h3>
              <p>Register &amp; save up to $29%</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
